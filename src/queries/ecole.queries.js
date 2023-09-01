const getAllEcoles = "SELECT e.id, e.nom, e.programme_educatifs, e.activites, e.resultats, e.classes, jsonb_build_object('id', n.id, 'label', n.label, 'type', n.type ) AS niveau FROM ecole AS e JOIN niveau AS n ON e.niveau_id = n.id";
 

//const getAllEcoles = "SELECT ecole.id, ecole.nom, ecole.programme_educatifs, ecole.activites, ecole.resultats, niveau.label AS niveau, ecole.classes FROM ecole JOIN niveau ON ecole.niveau_id = niveau.id"

const getEcoleById = "SELECT ecole.id, ecole.nom, ecole.programme_educatifs, ecole.activites, ecole.resultats, niveau.label AS niveau, ecole.classes FROM ecole JOIN niveau ON ecole.niveau_id = niveau.id WHERE ecole.id = $1 ";

const addEcole = "INSERT INTO ecole (nom, programme_educatifs, activites, resultats, raison_sociale, niveau_id, classes, geom ) VALUES ($1, $2, $3, $4, $5, $6, $7, ST_SetSRID(ST_MakePoint($8, $9), 4326) )";

const deleteEcole = "DELETE FROM ecole WHERE id = $1";

const updateEcole = "UPDATE ecole SET nom = $1, programme_educatifs = $2, activites = $3, resultats = $4, raison_sociale = $5, niveau_id = $6, classes = $7 WHERE id = $8";

const searchByPosition = "SELECT id, nom, CONCAT(ROUND((ST_Distance(geom::geography, ST_SetSRID(ST_MakePoint(6.366600, 2.420200), 4326)::geography) / 1000)::numeric, 1), ' km') AS distance FROM ecole WHERE (ST_Distance(geom::geography, ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography) / 1000) <= $3 ORDER BY distance;"

module.exports = {
    getAllEcoles,
    getEcoleById,
    addEcole,
    deleteEcole,
    updateEcole,
    searchByPosition
}