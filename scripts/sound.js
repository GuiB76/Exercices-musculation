//---------------------------------------------------------------------------\\
// GESTION DU VOLUME DU SON DU BIP

// Récupérer les éléments du DOM
const soundSettings = document.getElementById("sound-settings");
const toggleButton = document.getElementById("toggle-sound-settings");
const volumeControl = document.getElementById("volume");
const bipAudio = document.getElementById("bip-audio");
const muteCheckbox = document.getElementById("mute");
// Initialiser les paramètres de son
let volume = 0.5;
let isMuted = false;
// Fonction pour mettre à jour le volume
function updateVolume() 
{
    volume = volumeControl.value;
    bipAudio.volume = volume;
}
// Fonction pour activer/désactiver le bip
function updateMuteStatus() 
{
    isMuted = muteCheckbox.checked;
}
// Fonction pour jouer le bip
function playBip() 
{
    if (!isMuted) 
    {
        bipAudio.currentTime = 0;
        bipAudio.play();
    }
}
// Appeler les fonctions lors des changements de paramètres
volumeControl.addEventListener("input", updateVolume);
muteCheckbox.addEventListener("change", updateMuteStatus);
// Cacher les paramètres du son par défaut
soundSettings.classList.add("hide");
// Gérer l'affichage des paramètres du son lors du clic sur le bouton
toggleButton.addEventListener("click", function() 
{
    soundSettings.classList.toggle("hide");
});