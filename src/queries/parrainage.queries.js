const getAllParrainages = "SELECT * FROM parrainage"; 

const getParrainageById = "SELECT * FROM parrainage WHERE id = $1 ";

const getParrainageByUtilisateurId = ""

const getParrainageByMaternelleId = ""

const getParrainageByPrimaireId = ""

const getParrainageByLyceeId = ""

const getParrainageByCollegeId = ""

const getParrainageByUniversiteId = ""

const addParrainage = "INSERT INTO parrainage ( utilisateur_id, maternelle_id, primaire_id, lycee_id, college_id, universite_id) VALUES ($1, $2, $3, $4, $5, $6 )";

const deleteParrainage = "DELETE FROM parrainage WHERE id = $1";

const updateParrainage = "UPDATE parrainage SET utilisateur_id = $1, maternelle_id = $2, primaire_id = $3, lycee_id = $4, college_id = $5, universite_id = $6 WHERE id = $7";

module.exports = {
    getAllParrainages,
    getParrainageById,
    addParrainage,
    deleteParrainage,
    updateParrainage,
}