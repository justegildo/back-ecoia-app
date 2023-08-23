const router = require('express').Router();
const niveauCollegeController = require('../controllers/niveau.College.controller');


/**
 * @swagger
 * /api/niveau-college/add:
 *   post:
 *     summary: Créer une nouvelle classe
 *     tags:
 *      - Niveau college
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
router.post("/add", niveauCollegeController.addNiveauCollege);


/**
 * @swagger
 * /api/niveau-college/:
 *   get:
 *     summary: Récupérer toutes les classes
 *     tags:
 *      - Niveau college
 *     description: Renvoie une liste de tous les niveauColleges.
 *     responses:
 *       200:
 *         description: Liste des types utilisateurs récupérés avec succès.
 *       400:
 *         description: Liste des classes récupérés avec succès.
 */
router.get('/', niveauCollegeController.getAllNiveauColleges);


/**
 * @swagger
 * /api/niveau-college/{id}:
 *   get:
 *     summary: Récupérer une classe par son identifiant
 *     tags:
 *      - Niveau college
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
 *         description: Niveau college non trouvé.
 */
router.get('/:id', niveauCollegeController.getNiveauCollegeById);


/**
 * @swagger
 * /api/niveau-college/{id}:
 *   put:
 *     summary: Mettre à jour une classee
 *     tags:
 *      - Niveau college
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
router.put('/:id', niveauCollegeController.updateNiveauCollege);

/**
 * @swagger
 * /api/niveau-college/{id}:
 *   delete:
 *     summary: Supprimer une classe 
 *     tags:
 *      - Niveau college
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
 *         description: Pas de données.
 */

router.delete('/:id', niveauCollegeController.deleteNiveauCollege);  


module.exports = router;