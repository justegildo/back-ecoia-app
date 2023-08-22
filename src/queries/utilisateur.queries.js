const getAllUtilisateurs = "SELECT nom, prenoms, email, telephone, sexe FROM utilisateur"; 

const getUser = "SELECT CONCAT(nom, ' ', prenoms) AS name, email, password, is_active FROM utilisateur WHERE email = $1";

const getUtilisateurById = "SELECT nom, prenoms, email, telephone, sexe FROM utilisateur WHERE id = $1 ";

const checkEmailExists = "SELECT * FROM utilisateur WHERE email = $1 ";

const addUtilisateur = "INSERT INTO utilisateur (nom, prenoms, sexe, email, telephone, password, roles) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const deleteUtilisateur = "DELETE FROM utilisateur WHERE id = $1";

const updateUtilisateur = "UPDATE utilisateur SET nom = $1, prenoms = $2, sexe = $3, email = $4, telephone = $5, roles = $6 WHERE id = $7";

const updatePassword = "UPDATE utilisateur SET password = $1 WHERE email = $2";

const reset = "UPDATE utilisateur SET password = '' WHERE email = $1";

const insertCodeConfirm = "UPDATE utilisateur SET code_confirmation = $1";

const activeCompte = "UPDATE utilisateur SET is_active = true WHERE id = $1";

const desactiveCompte = "UPDATE utilisateur SET is_active = false WHERE id = $1"

module.exports = {
    getAllUtilisateurs,
    getUtilisateurById,
    checkEmailExists,
    addUtilisateur,
    deleteUtilisateur,
    updateUtilisateur,
    updatePassword,
    insertCodeConfirm,
    activeCompte,
    desactiveCompte,
    getUser,
    reset,
}