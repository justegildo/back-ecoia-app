const db = require("../config/dbConfig");
const niveauCollegeQueries = require('../queries/niveau.College.queries');

//afficher tous les NiveauColleges
module.exports.getAllNiveauColleges = async (req, res) => {

    const results = await db.query(niveauCollegeQueries.getAllNiveauColleges)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un NiveauCollege
module.exports.getNiveauCollegeById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauCollegeQueries.getNiveauCollegeById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette classe n'existe pas")
    }
} 

//env
module.exports.addNiveauCollege =  async (req, res) => {
    const { label, name } = req.body;

    //ajouter un NiveauCollege
    const result = await db.query(niveauCollegeQueries.addNiveauCollege, [label, name])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(200).send("Classe créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un NiveauCollege
module.exports.updateNiveauCollege = async (req, res) => {
    const id = parseInt(req.params.id);
    const { label, name } = req.body;

    const result = await db.query(niveauCollegeQueries.getNiveauCollegeById, [id])
    const noNiveauCollegeFound = !result.rows.length;

    if (noNiveauCollegeFound) {
        res.send("Impossible de modifier ce NiveauCollege car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauCollegeQueries.updateNiveauCollege, [label, name, id])

       if(results.rowCount && results.command === 'UPDATE')
        res.status(200).send("Classe modifié avec succès !");
    }
} 


//supprimer un NiveauCollege
module.exports.deleteNiveauCollege = async(req, res) => {
    const id = parseInt(req.params.id);

    const results = await db.query(niveauCollegeQueries.getNiveauCollegeById, [id])
    //console.log(results);

    const noNiveauCollegeFound = !results.rows.length;
    if (noNiveauCollegeFound) {
        res.send("Impossible de supprimer classe car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(niveauCollegeQueries.deleteNiveauCollege, [id])
       // console.log(result);
        if (result) {
            res.status(200).send("Classe supprimé avec succès");
        } else {

        }
    }
} 
