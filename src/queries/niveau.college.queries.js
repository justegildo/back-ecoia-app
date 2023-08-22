const getAllNiveauColleges = "SELECT * FROM niveau_college"; 

const getNiveauCollegeById = "SELECT * FROM niveau_college WHERE id = $1 ";

const addNiveauCollege = "INSERT INTO niveau_college (label, classe) VALUES ($1, $2)";

const deleteNiveauCollege = "DELETE FROM niveau_college WHERE id = $1";

const updateNiveauCollege = "UPDATE niveau_college SET label = $1, classe = $2 WHERE id = $3";



module.exports = {
    getAllNiveauColleges,
    getNiveauCollegeById,
    addNiveauCollege,
    deleteNiveauCollege,
    updateNiveauCollege
}