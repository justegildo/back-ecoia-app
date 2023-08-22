//const getAllUniversites = "SELECT * FROM Universitege"; 

const getAllUniversites = "SELECT universite.id, universite.nom, universite.prenoms, universite.date_naissance, universite.lieu_naissance, universite.description, universite.annee_academique, universite.niveau_etude, universite.filiere, ecole.nom AS ecole FROM universite JOIN ecole ON universite.ecole_id = ecole.id"

const getUniversiteById = "SELECT universite.id, universite.nom, universite.prenoms, universite.date_naissance, universite.lieu_naissance, universite.description, universite.annee_academique, universite.niveau_etude, universite.filiere, ecole.nom AS ecole FROM universite JOIN ecole ON universite.ecole_id = ecole.id WHERE universite.id = $1 ";

const addUniversite = "INSERT INTO universite (nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, filiere, ecole_id, parrainages_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";

const deleteUniversite = "DELETE FROM universite WHERE id = $1";

const updateUniversite = "UPDATE universite SET nom = $1, prenoms = $2, date_naissance = $3, lieu_naissance = $4, description = $5, annee_academique = $6, sexe = $7, niveau_etude = $8, filiere = $9, ecole_id = $10, parrainages_id = $11 WHERE id = $12";

module.exports = {
    getAllUniversites,
    getUniversiteById,
    addUniversite,
    deleteUniversite,
    updateUniversite,
}