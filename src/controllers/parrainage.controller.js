const db = require("../config/dbConfig");
const parrainageQueries = require('../queries/parrainage.queries');


//afficher tous les Parrainages
module.exports.getAllParrainages = async (req, res) => {

    const results = await db.query(parrainageQueries.getAllParrainages)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un Parrainage
module.exports.getParrainageById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(parrainageQueries.getParrainageById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette Parrainage n'existe pas")
    }
} 

//env
module.exports.addParrainage =  async (req, res) => {
    const { date_parrainage, utilisateur_id, maternelle_id, primaire_id, lycee_id, college_id, universite_id } = req.body;

    //ajouter un Parrainage
    const result = await db.query(parrainageQueries.addParrainage, 
        [date_parrainage, utilisateur_id, maternelle_id, primaire_id, lycee_id, college_id, universite_id]
    )

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Parrainage créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un Parrainage
module.exports.updateParrainage = async (req, res) => {
    const id = parseInt(req.params.id);
    const { 
        date_parrainage, utilisateur_id, maternelle_id, primaire_id, lycee_id, college_id, universite_id
    } = req.body;

    const result = await db.query(parrainageQueries.getParrainageById, [id])
    const noParrainageFound = !result.rows.length;
 
    if (noParrainageFound) {
        res.status(400).send("Impossible de modifier cette école car il n'existe pas dans la base de données.");
    } else {
        const results = await db.query(parrainageQueries.updateParrainage, 
            [date_parrainage, utilisateur_id, maternelle_id, primaire_id, lycee_id, college_id, universite_id, id]
        )

       if(results.rowCount && results.command === 'UPDATE'){
            res.status(200).send("Parrainage modifié avec succès !");
       } else {
            res.status(400).send("Erreur")
       }
        
    }
} 


//supprimer un Parrainage
module.exports.deleteParrainage = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(parrainageQueries.getParrainageById, [id])
    //console.log(results);

    const noParrainageFound = !results.rows.length;
    if (noParrainageFound) {
        res.send("Impossible de supprimer cette école car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(parrainageQueries.deleteParrainage, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Parrainage supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 