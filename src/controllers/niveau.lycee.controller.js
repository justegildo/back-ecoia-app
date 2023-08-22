const db = require("../config/dbConfig");
const niveauLyceeQueries = require('../queries/niveau.Lycee.queries');

//afficher tous les NiveauLycees
module.exports.getAllNiveauLycees = async (req, res) => {

    const results = await db.query(niveauLyceeQueries.getAllNiveauLycees)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un NiveauLycee
module.exports.getNiveauLyceeById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauLyceeQueries.getNiveauLyceeById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette classe n'existe pas")
    }
} 

//env
module.exports.addNiveauLycee =  async (req, res) => {
    const { label, classe } = req.body;

    //ajouter un NiveauLycee
    const result = await db.query(niveauLyceeQueries.addNiveauLycee, [label, classe])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Classe créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un NiveauLycee
module.exports.updateNiveauLycee = async (req, res) => {
    const id = parseInt(req.params.id);
    const { label, classe } = req.body;

    const result = await db.query(niveauLyceeQueries.getNiveauLyceeById, [id])
    const noNiveauLyceeFound = !result.rows.length;

    if (noNiveauLyceeFound) {
        res.send("Impossible de modifier cette classe car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauLyceeQueries.updateNiveauLycee, [label, classe, id])

       if(results.rowCount && results.command === 'UPDATE')
        res.status(200).send("Classe modifié avec succès !");
    }
} 


//supprimer un NiveauLycee
module.exports.deleteNiveauLycee = async(req, res) => {
    const id = parseInt(req.params.id);

    const results = await db.query(niveauLyceeQueries.getNiveauLyceeById, [id])
    //console.log(results);

    const noNiveauLyceeFound = !results.rows.length;
    if (noNiveauLyceeFound) {
        res.send("Impossible de supprimer classe car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(niveauLyceeQueries.deleteNiveauLycee, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Classe supprimé avec succès");
        } else {

        }
    }
} 
