const jwt = require('jsonwebtoken');
const db = require('../config/dbConfig');
const bcrypt = require('bcryptjs');
const utilisateurQueries = require('../queries/utilisateur.queries');


//module pour vérifier le code de confirmation
module.exports.verifyCode = async(req, res) =>{
  const email = req.body.email;
  const code_confirmation = req.body.code_confirmation;

  const query = `SELECT email, code_confirmation FROM utilisateur WHERE email = '${email}' AND code_confirmation = '${code_confirmation}'`;
  const result = await db.query(query);
  const user = result.rows[0];
  
  if (!user) {
    res.status(401).send('Utilisateur non authentifié');
    return;
  } else {
    res.status(200).send('Utilisateur authentifié avec succès');
    return;
  }
}

//module pour s'authenrifier 
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

 //se connecter
 const query = await db.query(utilisateurQueries.getUser, [email]);
 const user = query.rows[0];

 if (!user) {
   res.status(401).send('Cet email n\'existe pas !' );
 } else {

   const passwordMatch = await bcrypt.compare(password, user.password);

   if(!passwordMatch){
     res.status(401).send('Mot de passe incorrect !' );
   } else {

     if(user.is_active === false){
       res.status(401).send('Votre compte est désactivé !' );
     } else{

       const token = jwt.sign(
         { name: user.name, email: user.email },
          process.env.TOKEN_KEY,
         { expiresIn: process.env.TOKEN_DURING }
       );
         
      res.send({ token })

     }
   }
 }
};


//module pour update le mot de passe
module.exports.updatePassword = async (req, res) =>{
  const {email , oldPassword, newPassword} = req.body
  var hashNewPassword = bcrypt.hashSync(newPassword);

  const result = await db.query(utilisateurQueries.getUser, [email]);

  if( ! result.rows[0]){
    res.status(401).send({ message: 'Cet email n\'existe pas !' })
  } else {
    const verifyPassword = await bcrypt.compare(oldPassword, result.rows[0].password);

    if(! verifyPassword){
      res.status(401).send({ message: 'Mot de passe incorrect !' })
    } else {
      const result = await db.query(utilisateurQueries.updatePassword, [ hashNewPassword, email ]);

      if (!result.rowCount) {
        res.status(401).send({ message: 'Impossible de modifier le mot de passe !' })
      } else {
        res.send({ message: 'Mot de passe modifié !' })
      }
    }
  }
}

//active compte
module.exports.enableAccount = (req, res) =>{
  const userId = parseInt(req.params.id);

  db.query(utilisateurQueries.activeCompte, [ userId ], (error, results) =>{
    //console.log(results);
    if (error) {
      res.send(error)
      //console.error(error);
      return;
    } else if(results.rowCount && results.command === 'UPDATE') {
      res.status(200).json("Utilisateur réactivé avec succès !")
      
    } else {
      res.status(401).json("Impossible de réactiver le compte !")
    }
  })
}


//desactive compte
module.exports.disableAccount = (req, res) =>{
  const userId = parseInt(req.params.id);

  db.query(utilisateurQueries.desactiveCompte, [ userId ], (error, results) =>{
    if (error) {
      res.send(error)
      //console.error(error);
      return;
    } else if(results.rowCount && results.command === 'UPDATE') {
      res.status(200).json("Utilisateur désactivé avec succès !")
      
    } else {
      res.status(400).json("Impossible de désactiver le compte !")
    }
  })
}

//reset password
module.exports.resetPassword = async (req, res) =>{
  const { email } = req.body;

  const result = await db.query(utilisateurQueries.checkEmailExists, [email]);

  if(! result.rows[0]){
    res.status(401).send({ message: 'Cet email n\'existe pas !' })
  } else {
    const result = await db.query(utilisateurQueries.reset, [ email]);

    if(! result.rowCount){
      res.status(401).send({ message: 'Impossible de réinitialiser le mot de passe !'})
    } else {
      res.send({ message: 'Mot de passe réinitialisé !'})
    }
  }
}
