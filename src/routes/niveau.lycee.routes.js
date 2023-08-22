const router = require('express').Router();
const niveauLyceeController = require('../controllers/niveau.Lycee.controller');


/**
 * @swagger
 * /api/niveau-lycee/add:
 *   post:
 *     summary: Créer une enouvelle classe
 *     tags:
 *      - Niveau lycee
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
router.post("/add", niveauLyceeController.addNiveauLycee);


/**
 * @swagger
 * /api/niveau-lycee/:
 *   get:
 *     summary: Récupérer toutes les classes
 *     tags:
 *      - Niveau lycee
 *     description: Renvoie une liste de toutes les classes.
 *     responses:
 *       200:
 *         description: Liste des classes récupérés avec succès.
 */
router.get('/', niveauLyceeController.getAllNiveauLycees);


/**
 * @swagger
 * /api/niveau-lycee/{id}:
 *   get:
 *     summary: Récupérer une classe par son identifiant
 *     tags:
 *      - Niveau lycee
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
 *         description: Pas de données.
 */
router.get('/:id', niveauLyceeController.getNiveauLyceeById);


/**
 * @swagger
 * /api/niveau-lycee/{id}:
 *   put:
 *     summary: Mettre à jour une classe
 *     tags:
 *      - Niveau lycee
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
router.put('/:id', niveauLyceeController.updateNiveauLycee);

/**
 * @swagger
 * /api/niveau-lycee/{id}:
 *   delete:
 *     summary: Supprimer une classe
 *     tags:
 *      - Niveau lycee
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

router.delete('/:id', niveauLyceeController.deleteNiveauLycee);  


module.exports = router;