const router = require('express').Router();
const niveauController = require('../controllers/niveau.controller');


/**
 * @swagger
 * /api/niveau/add:
 *   post:
 *     summary: Créer un nouveau Niveau
 *     tags:
 *      - Niveau
 *     description: Crée un nouveau Niveau avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Niveau'
 *     responses:
 *       200:
 *         description: niveau créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", niveauController.addNiveau);


/**
 * @swagger
 * /api/niveau/:
 *   get:
 *     summary: Récupérer tous les niveaux
 *     tags:
 *      - Niveau
 *     description: Renvoie une liste de tous les niveaux.
 *     responses:
 *       200:
 *         description: Liste des types utilisateurs récupérés avec succès.
 */
router.get('/', niveauController.getAllNiveaux);


/**
 * @swagger
 * /api/niveau/{id}:
 *   get:
 *     summary: Récupérer un Niveau par son identifiant
 *     tags:
 *      - Niveau
 *     description: Renvoie un Niveau en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du Niveau à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau récupéré avec succès.
 *       404:
 *         description: Niveau non trouvé.
 */
router.get('/:id', niveauController.getNiveauById);


/**
 * @swagger
 * /api/niveau/{id}:
 *   put:
 *     summary: Mettre à jour un Niveau
 *     tags:
 *      - Niveau
 *     description: Met à jour un Niveau en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du Niveau à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Niveau'
 *     responses:
 *       200:
 *         description: Niveau mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', niveauController.updateNiveau);

/**
 * @swagger
 * /api/niveau/{id}:
 *   delete:
 *     summary: Supprimer un Niveau
 *     tags:
 *      - Niveau
 *     description: Supprime un Niveau en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du Niveau à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau supprimé avec succès.
 *       404:
 *         description: Niveau non trouvé.
 */

router.delete('/:id', niveauController.deleteNiveau);  


/**
 * @swagger
 * /api/niveau/{id}:
 *   get:
 *     summary: Récupérer un Niveau par son identifiant
 *     tags:
 *      - Niveau
 *     description: Renvoie un Niveau en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du Niveau à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau récupéré avec succès.
 *       404:
 *         description: Niveau non trouvé.
 */
router.get('/type/:type', niveauController.getClassesByNiveau);


module.exports = router;