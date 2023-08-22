//const getAllLycees = "SELECT * FROM Lycee"; 

const getAllLycees = "SELECT lycee.id, lycee.nom, lycee.prenoms, lycee.date_naissance, lycee.lieu_naissance, lycee.description, lycee.annee_academique, lycee.niveau_etude, ecole.nom AS ecole FROM lycee JOIN ecole ON lycee.ecole_id = ecole.id"

const getLyceeById = "SELECT lycee.id, lycee.nom, lycee.prenoms, lycee.date_naissance, lycee.lieu_naissance, lycee.description, lycee.annee_academique, lycee.niveau_etude, ecole.nom AS ecole FROM lycee JOIN ecole ON lycee.ecole_id = ecole.id WHERE lycee.id = $1 ";

const addLycee = "INSERT INTO lycee (nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 )";

const deleteLycee = "DELETE FROM lycee WHERE id = $1";

const updateLycee = "UPDATE lycee SET nom = $1, prenoms = $2, date_naissance = $3, lieu_naissance = $4, description = $5, annee_academique = $6, sexe = $7, niveau_etude = $8, ecole_id = $9, parrainages_id = $10 WHERE id = $11";

module.exports = {
    getAllLycees,
    getLyceeById,
    addLycee,
    deleteLycee,
    updateLycee,
}