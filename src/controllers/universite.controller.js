const db = require("../config/dbConfig");
const universiteQueries = require('../queries/universite.queries');


//afficher tous les Universites
module.exports.getAllUniversites = async (req, res) => {

    const results = await db.query(universiteQueries.getAllUniversites)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}


// récupérer un Universite
module.exports.getUniversiteById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(universiteQueries.getUniversiteById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cet élève n'existe pas")
    }
} 

//env
module.exports.addUniversite =  async (req, res) => {
    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude,  filiere, ecole_id, parrainages_id 
    } = req.body;

    //ajouter un Universite
    const result = await db.query(universiteQueries.addUniversite, 
        [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude,  filiere, ecole_id, parrainages_id]
    )

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Etudiant créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un Universite
module.exports.updateUniversite = async (req, res) => {
    const id = parseInt(req.params.id);
    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude,  filiere, ecole_id, parrainages_id
     } = req.body;

    const result = await db.query(universiteQueries.getUniversiteById, [id])
    const noUniversiteFound = !result.rows.length;
 
    if (noUniversiteFound) {
        res.status(400).send("Impossible de modifier cet élève car il n'existe pas dans la base de données.");
    } else {
        const results = await db.query(universiteQueries.updateUniversite, 
            [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude,  filiere, ecole_id, parrainages_id, id]
        )

       if(results.rowCount && results.command === 'UPDATE'){
            res.status(200).send("Etudiant modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
    }
} 


//supprimer un Universite
module.exports.deleteUniversite = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(universiteQueries.getUniversiteById, [id])
    //console.log(results);

    const noUniversiteFound = !results.rows.length;
    if (noUniversiteFound) {
        res.send("Impossible de supprimer cet élève car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(universiteQueries.deleteUniversite, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Etudiant supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 