const router = require('express').Router();
const universiteController = require('../controllers/universite.controller');


/**
 * @swagger
 * /api/universite/add:
 *   post:
 *     summary: Créer un nouvel élève
 *     tags:
 *      - Universite
 *     description: Crée un nouvel élève avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Universite'
 *     responses:
 *       200:
 *         description: Elève créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", universiteController.addUniversite);


/**
 * @swagger
 * /api/universite/:
 *   get:
 *     summary: Récupérer tous les élèves
 *     tags:
 *      - Universite
 *     description: Renvoie une liste de tous les élèves.
 *     responses:
 *       200:
 *         description: Liste des élèves récupérés avec succès.
 */
router.get('/', universiteController.getAllUniversites);


/**
 * @swagger
 * /api/universite/{id}:
 *   get:
 *     summary: Récupérer un élève par son identifiant
 *     tags:
 *      - Universite
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
router.get('/:id', universiteController.getUniversiteById);


/**
 * @swagger
 * /api/universite/{id}:
 *   put:
 *     summary: Mettre à jour un élève
 *     tags:
 *      - Universite
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
 *             $ref: '#/components/schemas/Universite'
 *     responses:
 *       200:
 *         description: Elève mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', universiteController.updateUniversite);

/**
 * @swagger
 * /api/universite/{id}:
 *   delete:
 *     summary: Supprimer un élève
 *     tags:
 *      - Universite
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

router.delete('/:id', universiteController.deleteUniversite);  


module.exports = router;