const db = require('../config/dbConfig');
const filestoreQueries = require ('../queries/filestore.queries');
const uuid = require('uuid');



module.exports.getFilestoreByUuid =(req, res) =>{
    const id = req.params.uuid;
    //console.log(id);
    const query = 'SELECT * FROM document WHERE uuid = $1';
    db.query(query, [id], (err, result) => {
        if (err) {
            //console.error(err);
            res.status(500).send('Erreur serveur');
            return;
        }
        else if (result.rowCount === 0) {
            res.status(404).send('Image non trouvée');
            return;

        } else {
            //console.log(result.rows[0]);
            const imageBuffer = Buffer.from(result.rows[0].file, 'binary');
            res.writeHead(200, {
                'Content-Type': result.rows[0].mimetype,
                'Content-Length': imageBuffer.length,
            });
            res.end(imageBuffer);
        }
    });
}


module.exports.addFilestore = async (req, res) =>{
    const  file = req.files?.file;
    console.log(file);
    const imageUUID = uuid.v4();

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('Aucun fichier téléchargé.');

    } else {

        const values = [
            file.data,
            file.name,
            file.mimetype,
            new Date(),
            imageUUID,
        ];

        try {
            db.query(filestoreQueries.addFilestore, values, (error, results) => {
                res.status(201).send('Fichier uploadé avec succès!');
                // res.status(200).send(`Image uploadé avec succès et son id est: ${res.rows[0].id}`)
            })

        } catch (err) {
            //console.error(err);
            res.status(400).send(err);
        }
    } 
}

