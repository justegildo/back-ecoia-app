const db = require("../config/dbConfig");
const ecoleQueries = require('../queries/ecole.queries');


//afficher tous les Ecoles
module.exports.getAllEcoles = async (req, res) => {

    const results = await db.query(ecoleQueries.getAllEcoles)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un Ecole
module.exports.getEcoleById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(ecoleQueries.getEcoleById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette Ecole n'existe pas")
    }
} 

//env
module.exports.addEcole =  async (req, res) => {
    const { nom, programme_educatifs, activites, resultats, raison_sociale, niveau_id, classes, latitude, longitude } = req.body;

    //ajouter un Ecole
    const result = await db.query(ecoleQueries.addEcole, 
        [nom, programme_educatifs, activites, resultats, raison_sociale, niveau_id, classes, latitude, longitude]
    )

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Ecole créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un Ecole
module.exports.updateEcole = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nom, programme_educatifs, activites, resultats, raison_sociale, niveau_id, classes } = req.body;

    const result = await db.query(ecoleQueries.getEcoleById, [id])
    const noEcoleFound = !result.rows.length;
 
    if (noEcoleFound) {
        res.status(400).send("Impossible de modifier cette école car il n'existe pas dans la base de données.");
    } else {
        const results = await db.query(ecoleQueries.updateEcole, 
            [nom, programme_educatifs, activites, resultats, raison_sociale, niveau_id, classes, id]
        )

       if(results.rowCount && results.command === 'UPDATE'){
            res.status(200).send("Ecole modifié avec succès !");
       } else {
            res.status(400).send("Erreur")
       }
        
    }
} 


//supprimer un Ecole
module.exports.deleteEcole = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(ecoleQueries.getEcoleById, [id])
    //console.log(results);

    const noEcoleFound = !results.rows.length;
    if (noEcoleFound) {
        res.send("Impossible de supprimer cette école car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(ecoleQueries.deleteEcole, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Ecole supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 

//rechercher une école
module.exports.searchEcolesByPosition = async (req, res) => {
    const { latitude, longitude, distanceMax } = req.body;
    //console.log(req.body);

    const result = await db.query(ecoleQueries.searchByPosition, [latitude, longitude, distanceMax])
    //console.log(result);  

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }

  }