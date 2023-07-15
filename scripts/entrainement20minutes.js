      //---------------------------------------------------------------------------\\
      // Les Tableaux d'Exercices

      var exerciseTime1 = 
      [
        { name: "Biceps - Préparation",                      duration: 3,        image: "img/des-exercices-detirement.png" },
        { name: "Biceps - Curls",                            duration: 2,        image: "img/curl-biceps-avec-halteres-alterne.gif" },
        { name: "Biceps - Repos",                            duration: 2,        image: "img/drink-water.png" },
        { name: "Biceps - Prise Marteau",                    duration: 2,        image: "img/curl-biceps-avec-halteres-alterne.gif" },
        { name: "Biceps - Repos",                            duration: 2,        image: "img/drink-water.png" },
        { name: "Biceps - Pronation",                        duration: 2,        image: "img/curl-zottman.gif" },
        { name: "Pectoraux - Préparation",                   duration: 2,        image: "img/des-exercices-detirement.png" },
        { name: "Pectoraux - Développé Couché",              duration: 2,        image: "img/developpe-couche-halteres-exercice-musculation.gif" },
        { name: "Pectoraux - Repos",                         duration: 2,        image: "img/drink-water.png" },
        { name: "Pectoraux - Ecarté Couché",                 duration: 2,        image: "img/ecarte-couche-haltere.gif" },
        { name: "Pectoraux - Repos",                         duration: 2,        image: "img/drink-water.png" },
        { name: "Pectoraux - Développé Couché Resserré",     duration: 2,        image: "img/developpe-couche-serre-avec-halteres.gif" },
        { name: "Jambes - Préparation",                      duration: 2,        image: "img/des-exercices-detirement.png" },
        { name: "Jambes - Squats Goblet",                    duration: 2,        image: "img/squat-goblet-exercice-musculation.gif" },
        { name: "Jambes - Repos",                            duration: 2,        image: "img/drink-water.png" },
        { name: "Jambes - Squats Overhead",                  duration: 2,        image: "img/squat-overhead-halteres.gif" },
        { name: "Jambes - Repos",                            duration: 2,        image: "img/drink-water.png" },
        { name: "Jambes - Squats Front",                     duration: 2,        image: "img/squat-front-avec-halteres.gif" },
        { name: "Epaules - Préparation",                     duration: 2,        image: "img/des-exercices-detirement.png" },
        { name: "Epaules - Elevations Frontales",            duration: 2,        image: "img/elevations-frontales-exercice-musculation.gif" },
        { name: "Epaules - Repos",                           duration: 2,        image: "img/drink-water.png" },
        { name: "Epaules - Elevations Latérales",            duration: 2,        image: "img/elevations-frontales-exercice-musculation.gif" },
        { name: "Epaules - Repos",                           duration: 2,        image: "img/drink-water.png" },
        { name: "Epaules - Développé Epaules",               duration: 2,        image: "img/developpe-epaules-halteres-debout.gif" },
        { name: "Dos - Préparation",                         duration: 2,        image: "img/drink-water.png" },
        { name: "Dos - Rowing Bras Droit",                   duration: 2,        image: "img/rowing-haltere-un-bras.gif" },
        { name: "Dos - Repos",                               duration: 2,        image: "img/drink-water.png" },
        { name: "Dos - Rowing Bras Gauche",                  duration: 2,        image: "img/rowing-haltere-un-bras.gif" },
        { name: "Dos - Repos",                               duration: 2,        image: "img/drink-water.png" },
        { name: "Dos - Shrugs",                              duration: 2,        image: "img/shrugs-avec-halteres.gif" },
        { name: "Abdominaux - Préparation",                  duration: 2,        image: "img/drink-water.png" },
        { name: "Abdominaux - Planche",                      duration: 2,        image: "img/planche-abdos.gif" },
        { name: "Abdominaux - Repos",                        duration: 2,        image: "img/drink-water.png" },
        { name: "Abdominaux - Planche Inversée",             duration: 2,        image: "img/planche-inversee.gif" },
        { name: "Abdominaux - Repos",                        duration: 2,        image: "img/drink-water.png" },
        { name: "Abdominaux - Mountain Climber",             duration: 2,        image: "img/mountain-climber-exercice-musculation.gif" },
      ];

      //---------------------------------------------------------------------------\\
      // Les Variables

      var exerciseIndex = 0;
      var exerciseTime = exerciseTime1;
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


      //---------------------------------------------------------------------------\\
      // LES FONCTIONS

      var explanationDivs = ["curls-biceps-explanation",
                              "developpe-couche-explanation", 
                              "curls-biceps-marteau-explanation", 
                              "pompes-explanation", 
                              "waiter-curls-explanation"];
      var currentExplanationDivIndex = 0;

      function changeExplanationDiv() 
      {
        var currentExplanationDiv = document.getElementById(explanationDivs[currentExplanationDivIndex]);

        currentExplanationDiv.style.display = "none";
        currentExplanationDivIndex++;

        if (currentExplanationDivIndex >= explanationDivs.length) 
        {
          currentExplanationDivIndex = 0;
        }

        var nextExplanationDiv = document.getElementById(explanationDivs[currentExplanationDivIndex]);
        nextExplanationDiv.style.display = "inline-block";
      }

      
      function updateTimer() 
      {
        var minutes = Math.floor(secondsRemaining / 60);
        var seconds = secondsRemaining % 60;

        timerElement.textContent = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

        secondsRemaining--;

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
          } 
          else 
          {
            timerElement.textContent = "Terminé !";
            startButton.disabled = true;
            pauseButton.disabled = true;
          }
        }

        if (seconds <= 5) 
        {
          timerElement.style.color = "green";
        } 
        else 
        {
          timerElement.style.color = "white";
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
      }


      function updateExerciseImage() 
      {
        var imagePath = exerciseTime[exerciseIndex].image;
        exerciseImageElement.src = imagePath;
      }


      startButton.addEventListener("click", startTimer);
      pauseButton.addEventListener("click", pauseTimer);
      resetButton.addEventListener("click", resetTimer);
      changeExerciseButton.addEventListener("click", changeExercise);

      //---------------------------------------------------------------------------\\
      // L'Appel des fonctions

      resetTimer();