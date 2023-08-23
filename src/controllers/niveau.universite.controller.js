const db = require("../config/dbConfig");
const niveauUniversiteQueries = require('../queries/niveau.Universite.queries');

//afficher tous les NiveauUniversite
module.exports.getAllNiveauUniversites = async (req, res) => {

    const results = await db.query(niveauUniversiteQueries.getAllNiveauUniversites)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un NiveauUniversite
module.exports.getNiveauUniversiteById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauUniversiteQueries.getNiveauUniversiteById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette classe n'existe pas")
    }
} 

//env
module.exports.addNiveauUniversite =  async (req, res) => {
    const { label, name } = req.body;

    //ajouter un NiveauUniversite
    const result = await db.query(niveauUniversiteQueries.addNiveauUniversite, [label, name])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Classe créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un NiveauUniversite
module.exports.updateNiveauUniversite = async (req, res) => {
    const id = parseInt(req.params.id);
    const { label, name } = req.body;

    const result = await db.query(niveauUniversiteQueries.getNiveauUniversiteById, [id])
    const noNiveauUniversiteFound = !result.rows.length;

    if (noNiveauUniversiteFound) {
        res.send("Impossible de modifier cette classe car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauUniversiteQueries.updateNiveauUniversite, [label, name, id])

       if(results.rowCount && results.command === 'UPDATE')
        res.status(200).send("Classe modifié avec succès !");
    }
} 


//supprimer un NiveauUniversite
module.exports.deleteNiveauUniversite = async(req, res) => {
    const id = parseInt(req.params.id);

    const results = await db.query(niveauUniversiteQueries.getNiveauUniversiteById, [id])
    //console.log(results);

    const noNiveauUniversiteFound = !results.rows.length;
    if (noNiveauUniversiteFound) {
        res.send("Impossible de supprimer classe car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(niveauUniversiteQueries.deleteNiveauUniversite, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Classe supprimé avec succès");
        } else {

        }
    }
} 
