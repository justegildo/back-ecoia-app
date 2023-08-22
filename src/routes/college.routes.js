const router = require('express').Router();
const collegeController = require('../controllers/college.controller');


/**
 * @swagger
 * /api/college/add:
 *   post:
 *     summary: Créer un nouvel élève
 *     tags:
 *      - College
 *     description: Crée un nouvel élève avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/College'
 *     responses:
 *       200:
 *         description: Elève créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", collegeController.addCollege);


/**
 * @swagger
 * /api/college/:
 *   get:
 *     summary: Récupérer tous les élèves
 *     tags:
 *      - College
 *     description: Renvoie une liste de tous les élèves.
 *     responses:
 *       200:
 *         description: Liste des élèves récupérés avec succès.
 */
router.get('/', collegeController.getAllColleges);


/**
 * @swagger
 * /api/college/{id}:
 *   get:
 *     summary: Récupérer un élève par son identifiant
 *     tags:
 *      - College
 *     description: Renvoie un élève en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'élève à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Elève récupéré avec succès.
 *       404:
 *         description: Elève non trouvé.
 */
router.get('/:id', collegeController.getCollegeById);


/**
 * @swagger
 * /api/college/{id}:
 *   put:
 *     summary: Mettre à jour un élève
 *     tags:
 *      - College
 *     description: Met à jour un élève en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'élève à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/College'
 *     responses:
 *       200:
 *         description: Elève mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', collegeController.updateCollege);

/**
 * @swagger
 * /api/college/{id}:
 *   delete:
 *     summary: Supprimer un élève
 *     tags:
 *      - College
 *     description: Supprime un élève en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'élève à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Elève supprimé avec succès.
 *       404:
 *         description: Elève non trouvé.
 */

router.delete('/:id', collegeController.deleteCollege);  


module.exports = router;