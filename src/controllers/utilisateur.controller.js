const db = require("../config/dbConfig");
const utilisateurQueries = require('../queries/utilisateur.queries');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const { startApp } = require('../../started')


//afficher tous les utilisateurs
module.exports.getAllUtilisateurs = async (req, res) => {
    db.query(utilisateurQueries.getAllUtilisateurs, (error, results) => {
        if (error) throw error;

       res.status(200).json(results.rows);
        //console.log(results.rows);

        /*
            //const 
        const data = results.rows
        const noms = data.map(item => item.nom);
        console.log(noms);
        */
    })
}

// récupérer une utilisateur
module.exports.getUtilisateurById = (req, res) => {
    const id = parseInt(req.params.id);
    db.query(utilisateurQueries.getUtilisateurById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

//ajouter une utilisateur
module.exports.addUtilisateur = async (req, res) => {
    const { nom, prenoms, sexe, email, telephone, password, roles } = req.body;
    //console.log(req.body);
    var hashPassword = bcrypt.hashSync(password);

    const result = await db.query(utilisateurQueries.checkEmailExists, [email]);

    if (result.rows.length) {
        res.send("Cet email existe déjà dans la base de données !");
    } else {
        try {
            // Insert the new user into the database
            const results = await db.query(utilisateurQueries.addUtilisateur, 
                [nom, prenoms, sexe, email, telephone, hashPassword, roles])
            
            //console.log(results);

            if(results.rowCount && results.command === 'INSERT'){
                //console.log(results.rowCount);
                // Send a welcome email to the new user
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    service: 'gmail',
                    auth: {
                        user: process.env.USER_MAIL, // replace with your own email
                        pass: process.env.PASSWORD_USER_MAIL // replace with your own email password
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });

                //envoie du message à l'utilisateur
                let mailOptions = {
                    from: process.env.SENDER_MAIL, // sender address
                    to: req.body.email, // list of receivers
                    subject: 'Re-Recipe', // Subject line
                    text: "Inscription réussie avec succès ! ", // plain text body
                    html: `<p>${prenoms + ' ' + nom} une très chaleureuse bienvenue à vous sur notre plateforme Re-Recipe ! C\est agréable de vous avoir parmi nous ! </p><br> `
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email envoyé: ' + info.response);
                    }
                });

                res.json({
                    message: 'Utilisateur crée avec succès !'
                });
                
            } else {
                res.status(400).json("Erreur")

            }
        } catch (err) {
            res.status(400).json(err.message);
        }
    }
}


//modifier un utilisateur
module.exports.updateUtilisateur = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nom, prenoms, sexe, email, telephone, roles } = req.body;

    const result = await db.query(utilisateurQueries.getUtilisateurById, [id])

    const noUtilisateurFound = !result.rows.length;

    if (noUtilisateurFound) {
        res.send("Cet utilisateur n'existe pas");

    } else {
        const results = await db.query(utilisateurQueries.updateUtilisateur,
            [nom, prenoms, sexe, email, telephone, roles, id])
        console.log(results);

        if(results.rowCount && results.command === 'UPDATE'){
            res.status(200).send("Utilisateur modifié avec succès !");
        } else {
            res.status(401).json(error)
        }
    }
}


//supprimer un utilisateur
module.exports.deleteUtilisateur = async(req, res) => {
    const id = parseInt(req.params.id);

    const results = await db.query(utilisateurQueries.getUtilisateurById, [id])
    //console.log(results);

    const noNiveauLyceeFound = !results.rows.length;
    if (noNiveauLyceeFound) {
        res.send("Impossible de supprimer cet utilisateur car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(utilisateurQueries.deleteUtilisateur, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Utilisateur supprimé avec succès");
        } else {

        }
    }
}






