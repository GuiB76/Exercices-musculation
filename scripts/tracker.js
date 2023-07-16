function getAdresseIP() 
{
    // Effectuer une requête HTTP GET à ipify pour obtenir l'adresse IP
    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => 
    {
        const adresseIP = data.ip;
        console.log('Adresse IP du visiteur :', adresseIP);
        // Utilisez l'adresse IP ici ou appelez une fonction pour la traiter
    })
    .catch(error => 
    {
        console.error('Erreur lors de la récupération de l\'adresse IP :', error);
    });
}
  

function enregistrerUtilisateur() 
{
    // Récupérer l'adresse IP du visiteur
    const adresseIP = getAdresseIP();
    // Obtenir la date et l'heure actuelles
    const date = new Date();
    const heure = date.toLocaleTimeString();
    // Autres informations sur l'utilisateur (à compléter selon vos besoins)
    const navigateur = navigator.userAgent;
    const langueNavigateur = navigator.language;
    // Créer un objet contenant les informations de l'utilisateur
    const utilisateur = 
    {
      adresseIP: adresseIP,
      heure: heure,
      navigateur: navigateur,
      langueNavigateur: langueNavigateur
    };
    // Convertir l'objet utilisateur en JSON
    const utilisateurJSON = JSON.stringify(utilisateur);
    // Envoyer les données JSON à un serveur ou les stocker localement
    // À titre d'exemple, nous allons les stocker localement dans un fichier 'utilisateurs.json'
    // Assurez-vous que le fichier 'utilisateurs.json' existe et est accessible en écriture
    const fs = require('fs');
    fs.appendFile('utilisateurs.json', utilisateurJSON + '\n', 'utf8', (err) => 
    {
      if (err) 
      {
        console.error('Erreur lors de l\'enregistrement des informations utilisateur :', err);
      } 
      else 
      {
        console.log('Informations utilisateur enregistrées avec succès.');
      }
    });
}
  
// Exécution de la fonction d'enregistrement lorsqu'un utilisateur se connecte
enregistrerUtilisateur();
  