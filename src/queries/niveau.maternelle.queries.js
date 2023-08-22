const getAllNiveauMaternelles = "SELECT * FROM niveau_maternelle"; 

const getNiveauMaternelleById = "SELECT * FROM niveau_maternelle WHERE id = $1 ";

const addNiveauMaternelle = "INSERT INTO niveau_maternelle (label, classe) VALUES ($1, $2)";

const deleteNiveauMaternelle = "DELETE FROM niveau_maternelle WHERE id = $1";

const updateNiveauMaternelle = "UPDATE niveau_maternelle SET label = $1, classe = $2 WHERE id = $3";



module.exports = {
    getAllNiveauMaternelles,
    getNiveauMaternelleById,
    addNiveauMaternelle,
    deleteNiveauMaternelle,
    updateNiveauMaternelle
}