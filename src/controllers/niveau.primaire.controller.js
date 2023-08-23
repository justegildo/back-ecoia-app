const db = require("../config/dbConfig");
const niveauPrimaireQueries = require('../queries/niveau.primaire.queries');

//afficher tous les NiveauPrimaires
module.exports.getAllNiveauPrimaires = async (req, res) => {

    const results = await db.query(niveauPrimaireQueries.getAllNiveauPrimaires)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un NiveauPrimaire
module.exports.getNiveauPrimaireById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauPrimaireQueries.getNiveauPrimaireById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette classe n'existe pas")
    }
} 

//env
module.exports.addNiveauPrimaire =  async (req, res) => {
    const { label, name } = req.body;

    //ajouter un NiveauPrimaire
    const result = await db.query(niveauPrimaireQueries.addNiveauPrimaire, [label, name])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Classe créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un NiveauPrimaire
module.exports.updateNiveauPrimaire = async (req, res) => {
    const id = parseInt(req.params.id);
    const { label, name } = req.body;

    const result = await db.query(niveauPrimaireQueries.getNiveauPrimaireById, [id])
    const noNiveauPrimaireFound = !result.rows.length;

    if (noNiveauPrimaireFound) {
        res.send("Impossible de modifier cette classe car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauPrimaireQueries.updateNiveauPrimaire, [label, name, id])

       if(results.rowCount && results.command === 'UPDATE')
        res.status(200).send("Classe modifié avec succès !");
    }
} 


//supprimer un NiveauPrimaire
module.exports.deleteNiveauPrimaire = async(req, res) => {
    const id = parseInt(req.params.id);

    const results = await db.query(niveauPrimaireQueries.getNiveauPrimaireById, [id])
    //console.log(results);

    const noNiveauPrimaireFound = !results.rows.length;
    if (noNiveauPrimaireFound) {
        res.send("Impossible de supprimer classe car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(niveauPrimaireQueries.deleteNiveauPrimaire, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Classe supprimé avec succès");
        } else {

        }
    }
} 
