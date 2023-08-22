const db = require("../config/dbConfig");
const primaireQueries = require('../queries/primaire.queries');


//afficher tous les Primaires
module.exports.getAllPrimaires = async (req, res) => {

    const results = await db.query(primaireQueries.getAllPrimaires)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un Primaire
module.exports.getPrimaireById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(primaireQueries.getPrimaireById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cet élève n'existe pas")
    }
} 

//env
module.exports.addPrimaire =  async (req, res) => {
    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id
    } = req.body;

    //ajouter un Primaire
    const result = await db.query(primaireQueries.addPrimaire, 
        [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id]
    )

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Elève créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un Primaire
module.exports.updatePrimaire = async (req, res) => {
    const id = parseInt(req.params.id);

    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id
    } = req.body;

    const result = await db.query(primaireQueries.getPrimaireById, [id])
    const noPrimaireFound = !result.rows.length;
 
    if (noPrimaireFound) {
        res.status(400).send("Impossible de modifier cet élève car il n'existe pas dans la base de données.");
    } else {
        const results = await db.query(primaireQueries.updatePrimaire, 
            [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id, id]
        )

       if(results.rowCount && results.command === 'UPDATE') {
            res.status(200).send("Primaire modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
        
    }
} 


//supprimer un Primaire
module.exports.deletePrimaire = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(primaireQueries.getPrimaireById, [id])
    //console.log(results);

    const noPrimaireFound = !results.rows.length;
    if (noPrimaireFound) {
        res.send("Impossible de supprimer cet élève car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(primaireQueries.deletePrimaire, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Elève supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 