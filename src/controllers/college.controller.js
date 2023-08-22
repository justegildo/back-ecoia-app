const db = require("../config/dbConfig");
const collegeQueries = require('../queries/college.queries');


//afficher tous les Colleges
module.exports.getAllColleges = async (req, res) => {

    const results = await db.query(collegeQueries.getAllColleges)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un College
module.exports.getCollegeById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(collegeQueries.getCollegeById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cet élève n'existe pas")
    }
} 

//env
module.exports.addCollege =  async (req, res) => {
    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id 
    } = req.body;

    //ajouter un College
    const result = await db.query(collegeQueries.addCollege, 
        [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id]
    )

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Elève créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un College
module.exports.updateCollege = async (req, res) => {
    const id = parseInt(req.params.id);
    const { 
        nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id 
    } = req.body;

    const result = await db.query(collegeQueries.getCollegeById, [id])
    const noCollegeFound = !result.rows.length;
 
    if (noCollegeFound) {
        res.status(400).send("Impossible de modifier cet élève car il n'existe pas dans la base de données.");
    } else {
        const results = await db.query(collegeQueries.updateCollege, 
            [nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id, id]
        )

       if(results.rowCount && results.command === 'UPDATE'){
            res.status(200).send("Elève modifié avec succès !");
       } else {
            res.status(400).send("Erreur")
       }
        
    }
} 


//supprimer un College
module.exports.deleteCollege = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(collegeQueries.getCollegeById, [id])
    //console.log(results);

    const noCollegeFound = !results.rows.length;
    if (noCollegeFound) {
        res.send("Impossible de supprimer cet élève car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(collegeQueries.deleteCollege, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Elève supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 