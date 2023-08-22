const router = require('express').Router();
const niveauPrimaireController = require('../controllers/niveau.primaire.controller');


/**
 * @swagger
 * /api/niveau-primaire/add:
 *   post:
 *     summary: Créer une nouvelle classe
 *     tags:
 *      - Niveau primaire
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
router.post("/add", niveauPrimaireController.addNiveauPrimaire);


/**
 * @swagger
 * /api/niveau-primaire/:
 *   get:
 *     summary: Récupérer toutes les classes
 *     tags:
 *      - Niveau primaire
 *     description: Renvoie une liste de toutes les classes.
 *     responses:
 *       200:
 *         description: Liste des classes récupérés avec succès.
 */
router.get('/', niveauPrimaireController.getAllNiveauPrimaires);


/**
 * @swagger
 * /api/niveau-primaire/{id}:
 *   get:
 *     summary: Récupérer une classe par son identifiant
 *     tags:
 *      - Niveau primaire
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
router.get('/:id', niveauPrimaireController.getNiveauPrimaireById);


/**
 * @swagger
 * /api/niveau-primaire/{id}:
 *   put:
 *     summary: Mettre à jour une classe
 *     tags:
 *      - Niveau primaire
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
router.put('/:id', niveauPrimaireController.updateNiveauPrimaire);

/**
 * @swagger
 * /api/niveau-primaire/{id}:
 *   delete:
 *     summary: Supprimer une cl○7sse
 *     tags:
 *      - Niveau primaire
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

router.delete('/:id', niveauPrimaireController.deleteNiveauPrimaire);  


module.exports = router;