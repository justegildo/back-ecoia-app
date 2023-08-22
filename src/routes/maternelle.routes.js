const router = require('express').Router();
const maternelleController = require('../controllers/maternelle.controller');


/**
 * @swagger
 * /api/maternelle/add:
 *   post:
 *     summary: Créer un nouvel élève
 *     tags:
 *      - Maternelle
 *     description: Crée un nouvel élève avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Maternelle'
 *     responses:
 *       200:
 *         description: Elève créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", maternelleController.addMaternelle);


/**
 * @swagger
 * /api/maternelle/:
 *   get:
 *     summary: Récupérer tous les élèves
 *     tags:
 *      - Maternelle
 *     description: Renvoie une liste de tous les élèves.
 *     responses:
 *       200:
 *         description: Liste des élèves récupérés avec succès.
 */
router.get('/', maternelleController.getAllMaternelles);


/**
 * @swagger
 * /api/maternelle/{id}:
 *   get:
 *     summary: Récupérer un élève par son identifiant
 *     tags:
 *      - Maternelle
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
router.get('/:id', maternelleController.getMaternelleById);


/**
 * @swagger
 * /api/maternelle/{id}:
 *   put:
 *     summary: Mettre à jour un élève
 *     tags:
 *      - Maternelle
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
 *             $ref: '#/components/schemas/Maternelle'
 *     responses:
 *       200:
 *         description: Elève mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', maternelleController.updateMaternelle);

/**
 * @swagger
 * /api/maternelle/{id}:
 *   delete:
 *     summary: Supprimer un élève
 *     tags:
 *      - Maternelle
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

router.delete('/:id', maternelleController.deleteMaternelle);  


module.exports = router;