//const getAllMaternelles = "SELECT * FROM Maternelle"; 

const getAllMaternelles = "SELECT maternelle.id, maternelle.nom, maternelle.prenoms, maternelle.date_naissance, maternelle.lieu_naissance, maternelle.description, maternelle.annee_academique, maternelle.niveau_etude, ecole.nom AS ecole FROM maternelle JOIN ecole ON maternelle.ecole_id = ecole.id"

const getMaternelleById = "SELECT maternelle.id, maternelle.nom, maternelle.prenoms, maternelle.date_naissance, maternelle.lieu_naissance, maternelle.description, maternelle.annee_academique, maternelle.niveau_etude, ecole.nom AS ecole FROM maternelle JOIN ecole ON maternelle.ecole_id = ecole.id WHERE maternelle.id = $1 ";

const addMaternelle = "INSERT INTO maternelle (nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 )";

const deleteMaternelle = "DELETE FROM maternelle WHERE id = $1";

const updateMaternelle = "UPDATE maternelle SET nom = $1, prenoms = $2, date_naissance = $3, lieu_naissance = $4, description = $5, annee_academique = $6, sexe = $7, niveau_etude = $8, ecole_id = $9, parrainages_id = $10 WHERE id = $11";

module.exports = {
    getAllMaternelles,
    getMaternelleById,
    addMaternelle,
    deleteMaternelle,
    updateMaternelle,
}