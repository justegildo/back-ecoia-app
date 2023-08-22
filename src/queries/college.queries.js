//const getAllColleges = "SELECT * FROM College"; 

const getAllColleges = "SELECT college.id, college.nom, college.prenoms, college.date_naissance, college.lieu_naissance, college.description, college.annee_academique, college.niveau_etude, ecole.nom AS ecole FROM college JOIN ecole ON college.ecole_id = ecole.id"

const getCollegeById = "SELECT college.id, college.nom, college.prenoms, college.date_naissance, college.lieu_naissance, college.description, college.annee_academique, college.niveau_etude, ecole.nom AS ecole FROM college JOIN ecole ON college.ecole_id = ecole.id WHERE college.id = $1 ";

const addCollege = "INSERT INTO college (nom, prenoms, date_naissance, lieu_naissance, description, annee_academique, sexe, niveau_etude, ecole_id, parrainages_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 )";

const deleteCollege = "DELETE FROM college WHERE id = $1";

const updateCollege = "UPDATE college SET nom = $1, prenoms = $2, date_naissance = $3, lieu_naissance = $4, description = $5, annee_academique = $6, sexe = $7, niveau_etude = $8, ecole_id = $9, parrainages_id = $10 WHERE id = $11";


module.exports = {
    getAllColleges,
    getCollegeById,
    addCollege,
    deleteCollege,
    updateCollege,
}