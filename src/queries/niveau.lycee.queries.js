const getAllNiveauLycees = "SELECT * FROM niveau_lycee"; 

const getNiveauLyceeById = "SELECT * FROM niveau_lycee WHERE id = $1 ";

const addNiveauLycee = "INSERT INTO niveau_lycee (label, classe) VALUES ($1, $2)";

const deleteNiveauLycee = "DELETE FROM niveau_lycee WHERE id = $1";

const updateNiveauLycee = "UPDATE niveau_lycee SET label = $1, classe = $2 WHERE id = $3";



module.exports = {
    getAllNiveauLycees,
    getNiveauLyceeById,
    addNiveauLycee,
    deleteNiveauLycee,
    updateNiveauLycee
}