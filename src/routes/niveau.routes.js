const router = require('express').Router();
const niveauController = require('../controllers/niveau.controller');


/**
 * @swagger
 * /api/niveau/add:
 *   post:
 *     summary: Créer un nouveau niveau
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
 *       404:
 *         description: Pas de données.
 */
router.get('/', niveauController.getAllNiveaux);


/**
 * @swagger
 * /api/niveau/{id}:
 *   get:
 *     summary: Récupérer un niveau par son identifiant
 *     tags:
 *      - Niveau
 *     description: Renvoie un niveau en fonction de son identifiant.
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
 *     summary: Mettre à jour un niveau
 *     tags:
 *      - Niveau
 *     description: Met à jour un niveau en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveau à mettre à jour
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
 *         description: Données d'entrée non valide
*/
router.put('/:id', niveauController.updateNiveau);

/**
 * @swagger
 * /api/niveau/{id}:
 *   delete:
 *     summary: Supprimer un niveau
 *     tags:
 *      - Niveau
 *     description: Supprime un niveau en fonction de son identifiant.
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
 *       400:
 *         description: Niveau non trouvé.
 */

router.delete('/:id', niveauController.deleteNiveau);  


/**
 * @swagger
 * /api/niveau/type/{type}:
 *   get:
 *     summary: Récupérer la liste des classes par le nom du niveau
 *     tags:
 *      - Niveau
 *     description: Renvoie une liste des classes de son identifiant.
 *     parameters:
 *       - name: type
 *         in: path
 *         required: true
 *         description: Identifiant du niveau à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des classes récupéré avec succès.
 *       400:
 *         description: Pas de données.
 */
router.get('/type/:type', niveauController.getClassesByNiveau);


module.exports = router;