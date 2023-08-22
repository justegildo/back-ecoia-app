//const getAllEcoles = "SELECT * FROM ecole"; 

const getAllEcoles = "SELECT ecole.nom, ecole.programme_educatifs, activites, resultats, niveau.label AS niveau, classes FROM ecole JOIN niveau ON ecole.niveau_id = niveau.id"

const getEcoleById = "SELECT * FROM ecole WHERE id = $1 ";

const addEcole = "INSERT INTO ecole (nom, programme_educatifs, activites, resultats, raison_sociale, niveau_id, classes) VALUES ($1, $2, $3, $4, $5, $6, $7 )";

const deleteEcole = "DELETE FROM ecole WHERE id = $1";

const updateEcole = "UPDATE ecole SET nom = $1, programme_educatifs = $2, activites = $3, resultats = $4, raison_sociale = $5, niveau_id = $6, classes = $7 WHERE id = $8";

module.exports = {
    getAllEcoles,
    getEcoleById,
    addEcole,
    deleteEcole,
    updateEcole,
}