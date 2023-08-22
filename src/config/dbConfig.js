const { Client } = require('pg');
 
const db = new Client({
  user: 'devteam',
  host: 'localhost',
  database: 'ecoia_db',
  password: '12345678',
  port: 5438
});

db.connect();

module.exports = db;