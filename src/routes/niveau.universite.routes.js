const router = require('express').Router();
const niveauUniversiteController = require('../controllers/niveau.universite.controller');


/**
 * @swagger
 * /api/niveau-universite/add:
 *   post:
 *     summary: Créer une nouvelle classe
 *     tags:
 *      - Niveau universite
 *     description: Crée une nouvelle classe avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NiveauType'
 *     responses:
 *       200:
 *         description: Classe créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", niveauUniversiteController.addNiveauUniversite);


/**
 * @swagger
 * /api/niveau-universite/:
 *   get:
 *     summary: Récupérer toutes les classes
 *     tags:
 *      - Niveau universite
 *     description: Renvoie une liste de toutes les classes.
 *     responses:
 *       200:
 *         description: Liste des classes récupérés avec succès.
 *       400:
 *         description: Liste des classes récupérés avec succès.
 */
router.get('/', niveauUniversiteController.getAllNiveauUniversites);


/**
 * @swagger
 * /api/niveau-universite/{id}:
 *   get:
 *     summary: Récupérer une classe par son identifiant
 *     tags:
 *      - Niveau universite
 *     description: Renvoie une classe en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de la classe à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Classe récupéré avec succès.
 *       404:
 *         description: Classe non trouvé.
 */
router.get('/:id', niveauUniversiteController.getNiveauUniversiteById);


/**
 * @swagger
 * /api/niveau-universite/{id}:
 *   put:
 *     summary: Mettre à jour une classe
 *     tags:
 *      - Niveau universite
 *     description: Met à jour une classe en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de la classe à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NiveauType'
 *     responses:
 *       200:
 *         description: Classe mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', niveauUniversiteController.updateNiveauUniversite);

/**
 * @swagger
 * /api/niveau-universite/{id}:
 *   delete:
 *     summary: Supprimer une classe
 *     tags:
 *      - Niveau universite
 *     description: Supprime une classe en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de la classe à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Classe supprimé avec succès.
 *       404:
 *         description: Classe non trouvé.
 */

router.delete('/:id', niveauUniversiteController.deleteNiveauUniversite);  


module.exports = router;