const router = require('express').Router();
const parrainageController = require('../controllers/parrainage.controller');


/**
 * @swagger
 * /api/parrainage/add:
 *   post:
 *     summary: Créer une nouvelle parrainage
 *     tags:
 *      - Parrainage
 *     description: Crée une nouvelle Parrainage avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Parrainage'
 *     responses:
 *       200:
 *         description: Parrainage créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", parrainageController.addParrainage);


/**
 * @swagger
 * /api/parrainage/:
 *   get:
 *     summary: Récupérer toutes les parrainages
 *     tags:
 *      - Parrainage
 *     description: Renvoie une liste de toutes les parrainages.
 *     responses:
 *       200:
 *         description: Liste des parrainages récupérés avec succès.
 */
router.get('/', parrainageController.getAllParrainages);


/**
 * @swagger
 * /api/parrainage/{id}:
 *   get:
 *     summary: Récupérer une parrainage par son identifiant
 *     tags:
 *      - Parrainage
 *     description: Renvoie une parrainage en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'parrainage à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Parrainage récupéré avec succès.
 *       404:
 *         description: Parrainage non trouvé.
 */
router.get('/:id', parrainageController.getParrainageById);


/**
 * @swagger
 * /api/parrainage/{id}:
 *   put:
 *     summary: Mettre à jour une parrainage
 *     tags:
 *      - Parrainage
 *     description: Met à jour une parrainage en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'parrainage à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Parrainage'
 *     responses:
 *       200:
 *         description: Parrainage mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', parrainageController.updateParrainage);

/**
 * @swagger
 * /api/parrainage/{id}:
 *   delete:
 *     summary: Supprimer une parrainage
 *     tags:
 *      - Parrainage
 *     description: Supprime une parrainage en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'parrainage à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Parrainage supprimé avec succès.
 *       404:
 *         description: Parrainage non trouvé.
 */

router.delete('/:id', parrainageController.deleteParrainage);  


module.exports = router;