const router = require('express').Router();
const lyceeController = require('../controllers/lycee.controller');


/**
 * @swagger
 * /api/lycee/add:
 *   post:
 *     summary: Créer un nouvel élève
 *     tags:
 *      - Lycee
 *     description: Crée un nouvel élève avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lycee'
 *     responses:
 *       200:
 *         description: Elève créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", lyceeController.addLycee);


/**
 * @swagger
 * /api/lycee/:
 *   get:
 *     summary: Récupérer tous les élèves
 *     tags:
 *      - Lycee
 *     description: Renvoie une liste de tous les élèves.
 *     responses:
 *       200:
 *         description: Liste des élèves récupérés avec succès.
 */
router.get('/', lyceeController.getAllLycees);


/**
 * @swagger
 * /api/lycee/{id}:
 *   get:
 *     summary: Récupérer un élève par son identifiant
 *     tags:
 *      - Lycee
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
router.get('/:id', lyceeController.getLyceeById);


/**
 * @swagger
 * /api/lycee/{id}:
 *   put:
 *     summary: Mettre à jour un élève
 *     tags:
 *      - Lycee
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
 *             $ref: '#/components/schemas/Lycee'
 *     responses:
 *       200:
 *         description: Elève mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', lyceeController.updateLycee);

/**
 * @swagger
 * /api/lycee/{id}:
 *   delete:
 *     summary: Supprimer un élève
 *     tags:
 *      - Lycee
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

router.delete('/:id', lyceeController.deleteLycee);  


module.exports = router;