const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config({path: './src/config/.env'});


const swaggerDefinition = {
  openapi: '3.0.3',
  //basePath: '../back/src/components/schemas',
  info: {
    title: 'API REST',
    version: '1.0.11',
    description: 'API of EcoiaApp',
    license: {
      name: "ECOIA",
      url: "https://spdx.org/licenses/JDG.html",
    },

    contact: {
      name: "Juste Gildo",
      url: "https://juste-gildo.com",
      email: "dossousedjrogildas@gmail.com",
    },
  },

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "apiKey",
        in: "Bearer",
        name: "Authorization",
      },

      OpenID: {
        type: "openIdConnect",
        openIdConnectUrl: 'https://example.com/.well-known/openid-configuration'
      }
    },

    security: [
      {
        bearerAuth: []
      }
    ],

    schemas: {
      Utilisateur: {
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "prenoms": {
            "type": "string"
          },
          "sexe": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "telephone": {
            "type": "string",
            "format": "number"
          },
          "password": {
            "type": "string"
          },
          "typeUtilisateurId": {
            "type": "number",
            //"format": "number"
          },
        },
        "required": [
          "nom", "prenom", "email", "password"
        ]
      },

      UpdateUtilisateur: {
         "type": "object",
         "properties": {
           "nom" : {
               "type": "string"
           },
           "prenoms": {
               "type": "string"
           }, 
           "sexe":{
               "type": "string"
           },
           "email": {
             "type": "string",
             "format": "email"
           },
           "telephone": {
             "type": "string",
             "format": "number"
           }
           },
           "required": [ 
             "nom", "prenom", "email"
           ]
       },

      Authentification: {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "email"
          },
          "password": {
            "type": "string"
          }
        },
        "required": [
          "email", "password"
        ]
      },

      UpdatePassword: {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "email"
          },
          "oldPassword": {
            "type": "string"
          }
          ,
          "newPassword": {
            "type": "string"
          }
        },
        "required": [
          "email", "oldPassword", "newPassword"
        ]
      },

      ResetPassword: {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "email"
          }
        },
        "required": [
          "email"
        ]
      },

      TypeUtilisateur: {
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          },
          "role": {
            "type": "string"
          }
        },
        "required": [
          "label", "role"
        ]
      },

      Niveau: {
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "label", "type"
        ]
      },

      NiveauType: {
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          },
          "classe": {
            "type": "string"
          }
        },
        "required": [
          "label", "classe"
        ]
      },

      Ecole:{
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "programme_educatifs": {
            "type": "string"
          },
          "activites": {
            "type": "string"
          },
          "resultats": {
            "type": "string"
          },
          "raison_sociale": {
            "type": "string"
          },
          "niveau_id": {
            "type": "string"
          },
          "classes": {
            "type": "array",
          }
        },
        "required": [
          "nom", "programme_educatifs", "activites", "resultats", "raison_sociale", "niveau_id", "classes"
        ]
      },

      Maternelle:{
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "prenoms": {
            "type": "string"
          },
          "date_naissance": {
            "type": "string"
          },
          "lieu_naissance": {
            "type": "string"
          },
          "sexe": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "annee_academique": {
            "type": "string"
          },
          "niveau_etude": {
            "type": "string"
          },
          "ecole_id": {
            "type": "string"
          },
          "parrainages_id": {
            "type": "string"
          }
        },
        "required": [
          "nom", "prenoms", "date_naissance", "lieu_naissance", "sexe", "niveau_etude", "ecole_id"
        ]
      },

      Primaire:{
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "prenoms": {
            "type": "string"
          },
          "date_naissance": {
            "type": "string"
          },
          "lieu_naissance": {
            "type": "string"
          },
          "sexe": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "annee_academique": {
            "type": "string"
          },
          "niveau_etude": {
            "type": "string"
          },
          "filiere": {
            "type": "string"
          },
          "ecole_id": {
            "type": "string"
          },
          "parrainages_id": {
            "type": "string"
          }
        },
        "required": [
          "nom", "prenoms", "date_naissance", "lieu_naissance", "sexe", "niveau_etude", "ecole_id"
        ]
      },

      Lycee:{
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "prenoms": {
            "type": "string"
          },
          "date_naissance": {
            "type": "string"
          },
          "lieu_naissance": {
            "type": "string"
          },
          "sexe": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "annee_academique": {
            "type": "string"
          },
          "niveau_etude": {
            "type": "string"
          },
          "ecole_id": {
            "type": "string"
          },
          "parrainages_id": {
            "type": "string"
          }
        },
        "required": [
          "nom", "prenoms", "date_naissance", "lieu_naissance", "sexe", "niveau_etude", "ecole_id"
        ]
      },

      College:{
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "prenoms": {
            "type": "string"
          },
          "date_naissance": {
            "type": "string"
          },
          "lieu_naissance": {
            "type": "string"
          },
          "sexe": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "annee_academique": {
            "type": "string"
          },
          "niveau_etude": {
            "type": "string"
          },
          "ecole_id": {
            "type": "string"
          },
          "parrainages_id": {
            "type": "string"
          }
        },
        "required": [
          "nom", "prenoms", "date_naissance", "lieu_naissance", "sexe", "niveau_etude", "ecole_id"
        ]
      },

      Universite:{
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "prenoms": {
            "type": "string"
          },
          "date_naissance": {
            "type": "string"
          },
          "lieu_naissance": {
            "type": "string"
          },
          "sexe": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "annee_academique": {
            "type": "string"
          },
          "niveau_etude": {
            "type": "string"
          },
          "ecole_id": {
            "type": "string"
          },
          "parrainages_id": {
            "type": "string"
          }
        },
        "required": [
          "nom", "prenoms", "date_naissance", "lieu_naissance", "sexe", "niveau_etude", "ecole_id"
        ]
      }

      


    }
  },
  servers: [
    {
      url: `http://localhost:${process.env.SERVEUR_PORT}`,
      description: 'Local server',
    },
  ],
};


const options = {
  swaggerDefinition,
  apis: ['../back/src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;