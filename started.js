const { exec } = require('child_process');

// Fonction pour démarrer l'application
function startApp() {
  console.log('Démarrage de l\'application...');
  const appProcess = exec('node index.js'); // Remplacez 'app.js' par le chemin de votre application
  appProcess.stdout.pipe(process.stdout);
  appProcess.stderr.pipe(process.stderr);

  appProcess.on('exit', (code, signal) => {
    console.error(`L'application s'est arrêtée avec le code ${code} et le signal ${signal}`);
    console.log('Redémarrage automatique de l\'application...');
    startApp(); // Redémarrer l'application en cas de sortie
  });
}

module.exports = { startApp };
