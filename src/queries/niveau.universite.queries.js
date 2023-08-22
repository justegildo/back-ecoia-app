const getAllNiveauUniversites = "SELECT * FROM niveau_universite"; 

const getNiveauUniversiteById = "SELECT * FROM niveau_universite WHERE id = $1 ";

const addNiveauUniversite = "INSERT INTO niveau_universite (label, classe) VALUES ($1, $2)";

const deleteNiveauUniversite = "DELETE FROM niveau_universite WHERE id = $1";

const updateNiveauUniversite = "UPDATE niveau_universite SET label = $1, classe = $2 WHERE id = $3";



module.exports = {
    getAllNiveauUniversites,
    getNiveauUniversiteById,
    addNiveauUniversite,
    deleteNiveauUniversite,
    updateNiveauUniversite
}