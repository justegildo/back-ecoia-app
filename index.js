const express = require('express');
const app =express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config({path: './src/config/.env'});
const userRoutes = require('../back/src/routes/utilisateur.routes')
const typeUserRoutes = require('../back/src/routes/typeUtilisateur.routes')
const niveauRoutes = require('../back/src/routes/niveau.routes')
const niveauPrimaireRoutes = require('../back/src/routes/niveau.primaire.routes')
const niveauMaternelleRoutes = require('../back/src/routes/niveau.maternelle.routes')
const niveauCollegeRoutes = require('../back/src/routes/niveau.college.routes')
const niveauLyceeRoutes = require('../back/src/routes/niveau.lycee.routes')
const niveauUniversiteRoutes = require('../back/src/routes/niveau.universite.routes')
const ecoleRoutes = require('../back/src/routes/ecole.routes')
const maternelleRoutes = require('../back/src/routes/maternelle.routes')
const primaireRoutes = require('../back/src/routes/primaire.routes')
const lyceeRoutes = require('../back/src/routes/lycee.routes')
const collegeRoutes = require('../back/src/routes/college.routes')
const universiteRoutes = require('../back/src/routes/universite.routes')
const filestoreRoutes = require('../back/src/routes/filestore.routes')
const parrainageRoutes = require('../back/src/routes/parrainage.routes')
const verifyAuthToken = require ('./src/middleware/middleware')

app.use(express.json());

var corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,',
    'preflightContinue': false 
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//gestion swagger 
app.use('/ecoia-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

//utilisateur
app.use('/api/user', userRoutes);

//type utilisateur
app.use('/api/type-user', verifyAuthToken, typeUserRoutes);


//niveau
app.use('/api/niveau', /*verifyAuthToken, */ niveauRoutes);

//les types niveaux
app.use('/api/niveau-maternelle', /*verifyAuthToken, */ niveauMaternelleRoutes);
app.use('/api/niveau-primaire', /*verifyAuthToken, */ niveauPrimaireRoutes);
app.use('/api/niveau-college', /*verifyAuthToken, */ niveauCollegeRoutes);
app.use('/api/niveau-lycee', /*verifyAuthToken, */ niveauLyceeRoutes);
app.use('/api/niveau-universite', /*verifyAuthToken, */ niveauUniversiteRoutes);


//ecole
app.use('/api/ecole', /*verifyAuthToken, */ ecoleRoutes);

//maternelle
app.use('/api/maternelle', /*verifyAuthToken, */ maternelleRoutes);

//primaire
app.use('/api/primaire', /*verifyAuthToken, */ primaireRoutes);

//lycee
app.use('/api/lycee', /*verifyAuthToken, */ lyceeRoutes);

//college
app.use('/api/college', /*verifyAuthToken, */ collegeRoutes);

//universite
app.use('/api/universite', /*verifyAuthToken, */ universiteRoutes);

//filestore
app.use('/api/file-upload', filestoreRoutes);

//filestore
app.use('/api/parrainage', parrainageRoutes);

//le port
app.listen(process.env.SERVEUR_PORT, () => 
    console.log(`Server started in port ${process.env.SERVEUR_PORT} && aller sur le swagger http://localhost:${process.env.SERVEUR_PORT}/ecoia-api-docs`
));
//startApp();
