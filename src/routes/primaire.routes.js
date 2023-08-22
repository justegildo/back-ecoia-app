const router = require('express').Router();
const primaireController = require('../controllers/primaire.controller');


/**
 * @swagger
 * /api/primaire/add:
 *   post:
 *     summary: Créer un nouvel élève
 *     tags:
 *      - Primaire
 *     description: Crée un nouvel élève avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Primaire'
 *     responses:
 *       200:
 *         description: Elève créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", primaireController.addPrimaire);


/**
 * @swagger
 * /api/primaire/:
 *   get:
 *     summary: Récupérer tous les élèves
 *     tags:
 *      - Primaire
 *     description: Renvoie une liste de tous les élèves.
 *     responses:
 *       200:
 *         description: Liste des élèves récupérés avec succès.
 */
router.get('/', primaireController.getAllPrimaires);


/**
 * @swagger
 * /api/primaire/{id}:
 *   get:
 *     summary: Récupérer un élève par son identifiant
 *     tags:
 *      - Primaire
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
router.get('/:id', primaireController.getPrimaireById);


/**
 * @swagger
 * /api/primaire/{id}:
 *   put:
 *     summary: Mettre à jour un élève
 *     tags:
 *      - Primaire
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
 *             $ref: '#/components/schemas/Primaire'
 *     responses:
 *       200:
 *         description: Elève mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', primaireController.updatePrimaire);

/**
 * @swagger
 * /api/primaire/{id}:
 *   delete:
 *     summary: Supprimer un élève
 *     tags:
 *      - Primaire
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

router.delete('/:id', primaireController.deletePrimaire);  


module.exports = router;