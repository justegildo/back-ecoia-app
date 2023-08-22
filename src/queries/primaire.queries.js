//const getAllPrimaires = "SELECT * FROM Primaire"; 

const getAllPrimaires = "SELECT primaire.id, primaire.nom, primaire.prenoms, primaire.date_naissance, primaire.lieu_naissance, primaire.description, primaire.annee_academique, primaire.niveau_etude, ecole.nom AS ecole FROM primaire JOIN ecole ON primaire.ecole_id = ecole.id"

const getPrimaireById = "SELECT primaire.id, primaire.nom, primaire.prenoms, primaire.date_naissance, primaire.lieu_naissance, primaire.description, primaire.annee_academique, primaire.niveau_etude, ecole.nom AS ecole FROM primaire JOIN ecole ON primaire.ecole_id = ecole.id WHERE primaire.id = $1 ";

const addPrimaire = "INSERT INTO primaire (nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 )";

const deletePrimaire = "DELETE FROM primaire WHERE id = $1";

const updatePrimaire = "UPDATE primaire SET nom = $1, prenoms = $2, date_naissance = $3, lieu_naissance = $4, description = $5, annee_academique = $6, sexe = $7, niveau_etude = $8, ecole_id = $9, parrainages_id = $10 WHERE id = $11";

module.exports = {
    getAllPrimaires,
    getPrimaireById,
    addPrimaire,
    deletePrimaire,
    updatePrimaire,
}