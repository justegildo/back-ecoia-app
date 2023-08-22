const db = require("../config/dbConfig");
const maternelleQueries = require('../queries/maternelle.queries');


//afficher tous les Maternelles
module.exports.getAllMaternelles = async (req, res) => {

    const results = await db.query(maternelleQueries.getAllMaternelles)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un Maternelle
module.exports.getMaternelleById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(maternelleQueries.getMaternelleById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cet élève n'existe pas")
    }
} 


//env
module.exports.addMaternelle =  async (req, res) => {
    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id
    } = req.body;

    //ajouter un Maternelle
    const result = await db.query(maternelleQueries.addMaternelle, 
        [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id]
    )

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Elève créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un Maternelle
module.exports.updateMaternelle = async (req, res) => {
    const id = parseInt(req.params.id);
    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id 
    } = req.body;

    const result = await db.query(maternelleQueries.getMaternelleById, [id])
    console.log(result.rows);
    const noMaternelleFound = !result.rows.length;
 
    if (noMaternelleFound) {
        res.send("Impossible de modifier cet élève car il n'existe pas dans la base de données.");
    } else {
        const results = await db.query(maternelleQueries.updateMaternelle, 
            [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id, id]
        )

       if(results.rowCount && results.command === 'UPDATE') {
            res.status(200).send("Maternelle modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
        
    }
} 


//supprimer un Maternelle
module.exports.deleteMaternelle = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(maternelleQueries.getMaternelleById, [id])
    //console.log(results);

    const noMaternelleFound = !results.rows.length;
    if (noMaternelleFound) {
        res.send("Impossible de supprimer cet élève car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(maternelleQueries.deleteMaternelle, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Elève supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 