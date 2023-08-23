const router = require('express').Router();
const niveauMaternelleController = require('../controllers/niveau.Maternelle.controller');


/**
 * @swagger
 * /api/niveau-maternelle/add:
 *   post:
 *     summary: Créer une nouvelle classe
 *     tags:
 *      - Niveau maternelle
 *     description: Crée une nouvelle avec les informations fournies.
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
router.post("/add", niveauMaternelleController.addNiveauMaternelle);


/**
 * @swagger
 * /api/niveau-maternelle/:
 *   get:
 *     summary: Récupérer toutes  les classes
 *     tags:
 *      - Niveau maternelle
 *     description: Renvoie une liste de toutes les classes.
 *     responses:
 *       200:
 *         description: Liste des classes récupérés avec succès.
 *       400:
 *         description: Liste des classes récupérés avec succès.
 */
router.get('/', niveauMaternelleController.getAllNiveauMaternelles);


/**
 * @swagger
 * /api/niveau-maternelle/{id}:
 *   get:
 *     summary: Récupérer une classe par son identifiant
 *     tags:
 *      - Niveau maternelle
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
router.get('/:id', niveauMaternelleController.getNiveauMaternelleById);


/**
 * @swagger
 * /api/niveau-maternelle/{id}:
 *   put:
 *     summary: Mettre à jour une classe
 *     tags:
 *      - Niveau maternelle
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
router.put('/:id', niveauMaternelleController.updateNiveauMaternelle);

/**
 * @swagger
 * /api/niveau-maternelle/{id}:
 *   delete:
 *     summary: Supprimer une classe
 *     tags:
 *      - Niveau maternelle
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

router.delete('/:id', niveauMaternelleController.deleteNiveauMaternelle);  


module.exports = router;