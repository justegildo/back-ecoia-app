const getAllParrainages = "SELECT * FROM parrainage"; 

const getParrainageById = "SELECT * FROM parrainage WHERE id = $1 ";

const getParrainageByUtilisateurId = ""

const getParrainageByMaternelleId = ""

const getParrainageByPrimaireId = ""

const getParrainageByLyceeId = ""

const getParrainageByCollegeId = ""

const getParrainageByUniversiteId = ""

const addParrainage = "INSERT INTO parrainage (date_parrainage, utilisateur_id, maternelle_id, primaire_id, lycee_id, college_id, universite_id) VALUES ($1, $2, $3, $4, $5, $6, $7 )";

const deleteParrainage = "DELETE FROM parrainage WHERE id = $1";

const updateParrainage = "UPDATE parrainage SET date_parrainage = $1, utilisateur_id = $2, maternelle_id = $3, primaire_id = $4, lycee_id = $5, college_id = $6, universite_id = $7 WHERE id = $8";

module.exports = {
    getAllParrainages,
    getParrainageById,
    addParrainage,
    deleteParrainage,
    updateParrainage,
}