const db = require("../config/dbConfig");
const lyceeQueries = require('../queries/lycee.queries');


//afficher tous les Lycees
module.exports.getAllLycees = async (req, res) => {

    const results = await db.query(lyceeQueries.getAllLycees)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un Lycee
module.exports.getLyceeById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(lyceeQueries.getLyceeById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cet élève n'existe pas")
    }
} 

//env
module.exports.addLycee =  async (req, res) => {
    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id
    } = req.body;

    //ajouter un Lycee
    const result = await db.query(lyceeQueries.addLycee, 
        [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id]
    )

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Elève créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un Lycee
module.exports.updateLycee = async (req, res) => {
    const id = parseInt(req.params.id);
    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id
     } = req.body;

    const result = await db.query(lyceeQueries.getLyceeById, [id])
    const noLyceeFound = !result.rows.length;
 
    if (noLyceeFound) {
        res.status(400).send("Impossible de modifier cet élève car il n'existe pas dans la base de données.");
    } else {
        const results = await db.query(lyceeQueries.updateLycee, 
            [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id, id]
        )

       if(results.rowCount && results.command === 'UPDATE'){
            res.status(200).send("Elève modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
        
    }
} 


//supprimer un Lycee
module.exports.deleteLycee = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(lyceeQueries.getLyceeById, [id])
    //console.log(results);

    const noLyceeFound = !results.rows.length;
    if (noLyceeFound) {
        res.send("Impossible de supprimer cet élève car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(lyceeQueries.deleteLycee, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Elève supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 