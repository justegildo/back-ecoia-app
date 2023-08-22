const getAllNiveaux = "SELECT * FROM niveau"; 

const getNiveauById = "SELECT * FROM niveau WHERE id = $1 ";

const addNiveau = "INSERT INTO niveau (label, type) VALUES ($1, $2)";

const deleteNiveau = "DELETE FROM niveau WHERE id = $1";

const updateNiveau = "UPDATE niveau SET label = $1, type = $2 WHERE id = $3";

const getAllNiveauPrimaires = "SELECT label, classe FROM niveau_primaire";

const getAllNiveauUniversites = "SELECT label, classe FROM niveau_universite"; 

const getAllNiveauLycees = "SELECT label, classe FROM niveau_lycee"; 

const getAllNiveauMaternelles = "SELECT label, classe FROM niveau_universite"; 

const getAllNiveauColleges = "SELECT label, classe FROM niveau_universite"; 

module.exports = {
    getAllNiveaux,
    getNiveauById,
    addNiveau,
    deleteNiveau,
    updateNiveau,
    getAllNiveauPrimaires,
    getAllNiveauColleges,
    getAllNiveauLycees,
    getAllNiveauMaternelles,
    getAllNiveauUniversites,
}