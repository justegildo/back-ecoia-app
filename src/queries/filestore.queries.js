const getFilestoreByUuid = "SELECT * FROM document WHERE uuid = $1 ";

const addFilestore = " INSERT INTO document (file, filename, mimetype, submission_date, uuid) VALUES ($1, $2, $3, $4, $5) RETURNING id"


module.exports = {
    getFilestoreByUuid,
    addFilestore
}