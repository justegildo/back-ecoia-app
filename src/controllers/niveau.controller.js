const db = require("../config/dbConfig");
const niveauQueries = require('../queries/niveau.queries');
const niveauPrimaireQueries = require('./niveau.primaire.controller');

//afficher tous les niveaus
module.exports.getAllNiveaux = async (req, res) => {

    const results = await db.query(niveauQueries.getAllNiveaux)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(404).send("Pas de données disponible")
    }
}

// récupérer un niveau
module.exports.getNiveauById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauQueries.getNiveauById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(404).send("Ce niveau n'existe pas")
    }
} 

//env
module.exports.addNiveau =  async (req, res) => {
    const { label, type } = req.body;

    //ajouter un niveau
    const result = await db.query(niveauQueries.addNiveau, [label, type])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(200).send("Niveau créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un niveau
module.exports.updateNiveau = async (req, res) => {
    const id = parseInt(req.params.id);
    const { label, type } = req.body;

    const result = await db.query(niveauQueries.getNiveauById, [id])
    const noNiveauFound = !result.rows.length;

    if (noNiveauFound) {
        res.status(400).send("Impossible de modifier ce niveau car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauQueries.updateNiveau, [label, type, id])

       if(results.rowCount && results.command === 'UPDATE')
        res.status(200).send("Niveau modifié avec succès !");
    }
} 


//supprimer un niveau
module.exports.deleteNiveau = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(niveauQueries.getNiveauById, [id])
    //console.log(results);

    const noNiveauFound = !results.rows.length;
    if (noNiveauFound) {
        res.status(400).send("Impossible de supprimer ce niveau car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(niveauQueries.deleteNiveau, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Niveau supprimé avec succès");
        } else {

        }
    }
} 


//afficher la liste des classes
module.exports.getClassesByNiveau = async(req, res) =>{
    const typeRecup = req.params.type.toUpperCase();;

    const type = typeRecup.replace(/['"]/g, '');

    //console.log(type);

    const result1 = await db.query(niveauQueries.getAllNiveauPrimaires)

    const result2 = await db.query(niveauQueries.getAllNiveauMaternelles)

    const result3 = await db.query(niveauQueries.getAllNiveauLycees)

    const result4 = await db.query(niveauQueries.getAllNiveauUniversites)

    const result5 = await db.query(niveauQueries.getAllNiveauColleges)

    const results = {
        'PRIMAIRE': result1.rows,
        'MATERNELLE': result2.rows,
        'LYCEE': result3.rows,
        'UNIVERSITE': result4.rows,
        'COLLEGE': result5.rows
    };

    if (results.hasOwnProperty(type)) {

        res.status(200).json(results[type]);

    } else {
        
        res.status(400).json({ error: 'Type non valide' });
    } 
} 
