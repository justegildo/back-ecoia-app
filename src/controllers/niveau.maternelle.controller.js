const db = require("../config/dbConfig");
const niveauMaternelleQueries = require('../queries/niveau.maternelle.queries');

//afficher tous les NiveauMaternelles
module.exports.getAllNiveauMaternelles = async (req, res) => {

    const results = await db.query(niveauMaternelleQueries.getAllNiveauMaternelles)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un NiveauMaternelle
module.exports.getNiveauMaternelleById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauMaternelleQueries.getNiveauMaternelleById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette classe n'existe pas")
    }
} 

//env
module.exports.addNiveauMaternelle =  async (req, res) => {
    const { label, classe } = req.body;

    //ajouter un NiveauMaternelle
    const result = await db.query(niveauMaternelleQueries.addNiveauMaternelle, [label, classe])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Classe créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un NiveauMaternelle
module.exports.updateNiveauMaternelle = async (req, res) => {
    const id = parseInt(req.params.id);
    const { label, classe } = req.body;

    const result = await db.query(niveauMaternelleQueries.getNiveauMaternelleById, [id])
    const noNiveauMaternelleFound = !result.rows.length;

    if (noNiveauMaternelleFound) {
        res.send("Impossible de modifier cette classe car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauMaternelleQueries.updateNiveauMaternelle, [label, classe, id])

       if(results.rowCount && results.command === 'UPDATE')
        res.status(200).send("Classe modifié avec succès !");
    }
} 


//supprimer un NiveauMaternelle
module.exports.deleteNiveauMaternelle = async(req, res) => {
    const id = parseInt(req.params.id);

    const results = await db.query(niveauMaternelleQueries.getNiveauMaternelleById, [id])
    //console.log(results);

    const noNiveauMaternelleFound = !results.rows.length;
    if (noNiveauMaternelleFound) {
        res.send("Impossible de supprimer classe car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(niveauMaternelleQueries.deleteNiveauMaternelle, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Classe supprimé avec succès");
        } else {

        }
    }
} 
