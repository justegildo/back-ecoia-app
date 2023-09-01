const router = require('express').Router();
const ecoleController = require('../controllers/ecole.controller');


/**
 * @swagger
 * /api/ecole/add:
 *   post:
 *     summary: Créer une nouvelle école
 *     tags:
 *      - Ecole
 *     description: Crée une nouvelle ecole avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ecole'
 *     responses:
 *       200:
 *         description: Ecole créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", ecoleController.addEcole);


/**
 * @swagger
 * /api/ecole/:
 *   get:
 *     summary: Récupérer toutes les écoles
 *     tags:
 *      - Ecole
 *     description: Renvoie une liste de toutes les écoles.
 *     responses:
 *       200:
 *         description: Liste des écoles récupérés avec succès.
 */
router.get('/', ecoleController.getAllEcoles);


/**
 * @swagger
 * /api/ecole/{id}:
 *   get:
 *     summary: Récupérer une école par son identifiant
 *     tags:
 *      - Ecole
 *     description: Renvoie une école en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'école à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ecole récupéré avec succès.
 *       404:
 *         description: Ecole non trouvé.
 */
router.get('/:id', ecoleController.getEcoleById);


/**
 * @swagger
 * /api/ecole/{id}:
 *   put:
 *     summary: Mettre à jour une école
 *     tags:
 *      - Ecole
 *     description: Met à jour une école en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'école à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ecole'
 *     responses:
 *       200:
 *         description: Ecole mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', ecoleController.updateEcole);

/**
 * @swagger
 * /api/ecole/{id}:
 *   delete:
 *     summary: Supprimer une école
 *     tags:
 *      - Ecole
 *     description: Supprime une école en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'école à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ecole supprimé avec succès.
 *       404:
 *         description: Ecole non trouvé.
 */

router.delete('/:id', ecoleController.deleteEcole);  


/**
 * @swagger
 * /api/ecole/recherche-ecoles:
 *   post:
 *     summary: Les écoles qui sont à proximité de l'utilisateur
 *     tags:
 *      - Ecole
 *     description: Rechercher des ecoles avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SearchEcoleByPosition'
 *     responses:
 *       200:
 *         description: Les écoles trouvées avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/recherche-ecoles-position", ecoleController.searchEcolesByPosition);


module.exports = router;