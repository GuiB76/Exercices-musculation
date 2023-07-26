  //---------------------------------------------------------------------------\\
  // Menu Déroulant Explications Exercices

  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
    dropdownBtns.forEach(function(btn) 
    {
      btn.addEventListener("click", function() 
      {
        const content = this.nextElementSibling;
        content.style.display = (content.style.display === "block") ? "none" : "block";
        // Cacher les autres contenus affichés
        const otherContents = document.querySelectorAll(".dropdown-content");
        otherContents.forEach(function(otherContent) 
        {
          if (otherContent !== content) 
          {
            otherContent.style.display = "none";
          }
        });
      });
    });


  //---------------------------------------------------------------------------\\
  // Les Tableaux d'Exercices

  var training20mins = 
  [
    { name: "Biceps - Préparation",                      duration: 3,          image: "img/illustrations/haltères4.jpg" },
    { name: "Biceps - Curls",                            duration: 5,          image: "img/curl-biceps-avec-halteres-alterne.gif" },
    { name: "Biceps - Repos",                            duration: 5,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Biceps - Prise Marteau",                    duration: 5,          image: "img/curl-haltere-prise-neutre.gif" },
    { name: "Biceps - Repos",                            duration: 5,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Biceps - Curls Supination",                 duration: 5,          image: "img/curl-zottman.gif" },
    { name: "Pectoraux - Préparation",                   duration: 3,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Pectoraux - Développé Couché",              duration: 5,          image: "img/developpe-couche-halteres-exercice-musculation.gif" },
    { name: "Pectoraux - Repos",                         duration: 5,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Pectoraux - Ecarté Couché",                 duration: 5,          image: "img/ecarte-couche-haltere.gif" },
    { name: "Pectoraux - Repos",                         duration: 5,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Pectoraux - Développé Couché Resserré",     duration: 5,          image: "img/developpe-couche-serre-avec-halteres.gif" },
    { name: "Jambes - Préparation",                      duration: 3,          image: "iimg/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Jambes - Squats Goblet",                    duration: 45,          image: "img/squat-goblet-exercice-musculation.gif" },
    { name: "Jambes - Repos",                            duration: 15,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Jambes - Squats Overhead",                  duration: 45,          image: "img/squat-overhead-halteres.gif" },
    { name: "Jambes - Repos",                            duration: 15,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Jambes - Squats Front",                     duration: 45,          image: "img/squat-front-avec-halteres.gif" },
    { name: "Epaules - Préparation",                     duration: 30,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Epaules - Elevations Frontales",            duration: 45,          image: "img/elevations-frontales-exercice-musculation.gif" },
    { name: "Epaules - Repos",                           duration: 15,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Epaules - Elevations Latérales",            duration: 45,          image: "img/elevations-frontales-exercice-musculation.gif" },
    { name: "Epaules - Repos",                           duration: 15,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Epaules - Développé Epaules",               duration: 45,          image: "img/developpe-epaules-halteres-debout.gif" },
    { name: "Dos - Préparation",                         duration: 30,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Dos - Rowing Bras Droit",                   duration: 45,          image: "img/rowing-haltere-un-bras.gif" },
    { name: "Dos - Repos",                               duration: 15,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Dos - Rowing Bras Gauche",                  duration: 45,          image: "img/rowing-haltere-un-bras.gif" },
    { name: "Dos - Repos",                               duration: 15,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Dos - Shrugs",                              duration: 45,          image: "img/shrugs-avec-halteres.gif" },
    { name: "Abdominaux - Préparation",                  duration: 30,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Abdominaux - Planche",                      duration: 45,          image: "img/planche-abdos.gif" },
    { name: "Abdominaux - Repos",                        duration: 15,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Abdominaux - Planche Inversée",             duration: 45,          image: "img/planche-inversee.gif" },
    { name: "Abdominaux - Repos",                        duration: 15,          image: "img/illustrations/boire-de-l-eau-2.jpg" },
    { name: "Abdominaux - Mountain Climber",             duration: 45,          image: "img/mountain-climber-exercice-musculation.gif" },
    { name: "Entrainement - Terminé",                    duration: 30,          image: "img/illustrations/haltères4.jpg" }
  ];


  //---------------------------------------------------------------------------\\
  // Les Variables

  var exerciseIndex = 0;
  var exerciseTime = training20mins;
  var secondsRemaining = exerciseTime[exerciseIndex].duration;
  var intervalId;

  var timerElement = document.getElementById("timer");
  var startButton = document.getElementById("start");
  var pauseButton = document.getElementById("pause");
  var resetButton = document.getElementById("reset");
  var exerciseNameElement = document.getElementById("exercise-name");
  var currentSetElement = document.getElementById("current-set");
  var exerciseImageElement = document.getElementById("exercise-image");
  var changeExerciseButton = document.getElementById("change-exercise");

  var nextExerciseIndex = 1;
  var nextExerciseNameElement = document.getElementById("next-exercise-name");
  var nextSetElement = document.getElementById("next-set");
  var nextExerciseImageElement = document.getElementById("next-exercise-image");


  //---------------------------------------------------------------------------\\
  // LES FONCTIONS

  function updateTimer() 
  {
    var minutes = Math.floor(secondsRemaining / 60);
    var seconds = secondsRemaining % 60;

    timerElement.textContent = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

    secondsRemaining--;

    if (seconds <= 5) 
    {
      timerElement.style.color = "green";
    } 
    else 
    {
      timerElement.style.color = "white";
    }

    if (seconds <= 3) 
    {
      playCountdownSound();
    } 

    if (secondsRemaining < 0) 
    {
      clearInterval(intervalId);
      exerciseIndex++;
      if (exerciseIndex < exerciseTime.length) 
      {
        secondsRemaining = exerciseTime[exerciseIndex].duration;
        currentSetElement.textContent = exerciseTime[exerciseIndex].name.split(" - ")[1];
        exerciseNameElement.textContent = exerciseTime[exerciseIndex].name.split(" - ")[0];
        startTimer();
        updateExerciseImage();
        nextExerciseIndex = exerciseIndex + 1; 
        previewNextExercise(); 
        //appel du wake lock --> lancé
        if (!wakeLock) { wakeLock = requestWakeLock(); }
      } 
      else 
      {
        timerElement.textContent = "Terminé !";
        startButton.disabled = true;
        pauseButton.disabled = true;
        //fermeture du wake lock --> fin
        if (wakeLock) { releaseWakeLock(wakeLock); wakeLock = null; }
      }
    }

  }


  function previewNextExercise() 
  {
    if (nextExerciseIndex < exerciseTime.length) 
    {
      nextExerciseNameElement.textContent = exerciseTime[nextExerciseIndex].name.split(" - ")[0];
      nextSetElement.textContent = exerciseTime[nextExerciseIndex].name.split(" - ")[1];
      var imagePath = exerciseTime[nextExerciseIndex].image;
      nextExerciseImageElement.src = imagePath;
    } 
    else 
    {
      nextExerciseNameElement.textContent = "Entrainement terminé";
      nextSetElement.textContent = "";
      nextExerciseImageElement.src = "img/illustrations/haltères4.jpg";
    }
  }


  function startTimer() 
  {
    intervalId = setInterval(updateTimer, 1000);
    startButton.disabled = true;
    pauseButton.disabled = false;
  }


  function pauseTimer() 
  {
    clearInterval(intervalId);
    startButton.disabled = false;
    pauseButton.disabled = true;
  }


  function resetTimer() 
  {
    clearInterval(intervalId);
    exerciseIndex = 0;
    secondsRemaining = exerciseTime[exerciseIndex].duration;
    exerciseNameElement.textContent = exerciseTime[exerciseIndex].name.split(" - ")[0];
    currentSetElement.textContent = "Préparation";
    timerElement.textContent = "00:00";
    startButton.disabled = false;
    pauseButton.disabled = true;
    updateExerciseImage();
    nextExerciseIndex = exerciseIndex + 1; 
    previewNextExercise();
  }


  function updateExerciseImage() 
  {
    var imagePath = exerciseTime[exerciseIndex].image;
    exerciseImageElement.src = imagePath;
  }


  function playCountdownSound() 
  {
    var countdownSound = document.getElementById("countdownSound");
    countdownSound.play();
  }


  //---------------------------------------------------------------------------\\
  // Evènements

  startButton.addEventListener("click", startTimer);
  startButton.addEventListener("click", hideH1Exercise);
  pauseButton.addEventListener("click", pauseTimer);
  resetButton.addEventListener("click", resetTimer);
  resetButton.addEventListener("click", showH1Exercise);
  changeExerciseButton.addEventListener("click", changeExercise);
  document.addEventListener("DOMContentLoaded", previewNextExercise);


  //---------------------------------------------------------------------------\\
  // Cacher le H1 au lancement de l'entrainement

  // Récupérer la référence de l'élément h1-exercise
  const h1ExerciseElement = document.getElementById("h1");
  // Fonction pour cacher le titre h1-exercise
  function hideH1Exercise() { h1ExerciseElement.style.display = "none"; }
  // Fonction pour afficher le titre h1-exercise
  function showH1Exercise() { h1ExerciseElement.style.display = "block"; }
  // Événement pour cacher le titre lorsque l'entrainement est lancé (au clic sur le bouton "Démarrer")
  document.getElementById("start").addEventListener("click", () => { hideH1Exercise(); });
  // Événement pour afficher le titre lorsque l'entrainement est réinitialisé (au clic sur le bouton "Réinitialiser")
  document.getElementById("reset").addEventListener("click", () => { showH1Exercise();});


  //---------------------------------------------------------------------------\\
  // L'Appel des fonctions

  resetTimer();
