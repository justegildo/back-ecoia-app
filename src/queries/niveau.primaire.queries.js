const getAllNiveauPrimaires = "SELECT * FROM niveau_primaire"; 

const getNiveauPrimaireById = "SELECT * FROM niveau_primaire WHERE id = $1 ";

const addNiveauPrimaire = "INSERT INTO niveau_primaire (label, classe) VALUES ($1, $2)";

const deleteNiveauPrimaire = "DELETE FROM niveau_primaire WHERE id = $1";

const updateNiveauPrimaire = "UPDATE niveau_primaire SET label = $1, classe = $2 WHERE id = $3";



module.exports = {
    getAllNiveauPrimaires,
    getNiveauPrimaireById,
    addNiveauPrimaire,
    deleteNiveauPrimaire,
    updateNiveauPrimaire
}