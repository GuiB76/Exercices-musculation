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

function envoyerEmail() 
{
  // Récupérer les informations de l'utilisateur
  const adresseIP = getAdresseIP();
  const date = new Date().toLocaleDateString();
  const heure = new Date().toLocaleTimeString();
  const navigateur = navigator.userAgent;
  const langueNavigateur = navigator.language;
  const informationsUtilisateur = `
    Adresse IP: ${adresseIP}
    Date: ${date}
    Heure: ${heure}
    Navigateur: ${navigateur}
    Langue du navigateur: ${langueNavigateur}
  `;
  // Configurer les paramètres de l'e-mail
  const email = 
  {
    Host : "smtp.elasticemail.com",
    Username : "lepetitboulevard@gmail.com",
    Password : "3D994C04400CE2DFB0F110370157133DAC69",
    To: 'guilermob27370@gmail.com',
    From: 'lepetitboulevard@gmail.com',
    Subject: 'Informations sur l\'utilisateur',
    Body: informationsUtilisateur
  };
  // Envoyer l'e-mail en utilisant l'API SMTPJS
  Email.send(email)
  .then(() => 
  {
    console.log('E-mail envoyé avec succès !');
  })
  .catch(error => 
  {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
  });
}
  
// Appel de la fonction pour envoyer l'e-mail
envoyerEmail();