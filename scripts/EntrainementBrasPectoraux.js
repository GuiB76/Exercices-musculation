
      //---------------------------------------------------------------------------\\
      // Les Tableaux d'Exercices

      var exerciseTime1 = 
      [
        { name: "Curl Biceps - Préparation",      duration: 5,        image: "des-exercices-detirement.png" },
        { name: "Série 1",                        duration: 6,        image: "curl-biceps-avec-halteres-alterne.gif" },
        { name: "Repos 1",                        duration: 6,        image: "drink-water.png" },
        { name: "Série 2",                        duration: 6,        image: "curl-biceps-avec-halteres-alterne.gif" },
        { name: "Repos 2",                        duration: 6,        image: "drink-water.png" },
        { name: "Série 3",                        duration: 6,        image: "curl-biceps-avec-halteres-alterne.gif" },
        { name: "Repos 3",                        duration: 6,        image: "drink-water.png" },
        { name: "Série 4",                        duration: 6,        image: "curl-biceps-avec-halteres-alterne.gif" },
        { name: "Récupération",                   duration: 15,       image: "drink-water.png" }
      ];

      var exerciseTime2 = 
      [
        { name: "Développé Couché - Préparation",     duration: 5,    image: "des-exercices-detirement.png" },
        { name: "Série 1",                            duration: 6,    image: "developpe-couche-halteres-exercice-musculation.gif" },
        { name: "Repos 1",                            duration: 6,    image: "drink-water.png" },
        { name: "Série 2",                            duration: 6,    image: "developpe-couche-halteres-exercice-musculation.gif" },
        { name: "Repos 2",                            duration: 6,    image: "drink-water.png" },
        { name: "Série 3",                            duration: 6,    image: "developpe-couche-halteres-exercice-musculation.gif" },
        { name: "Repos 3",                            duration: 6,    image: "drink-water.png" },
        { name: "Série 4",                            duration: 6,    image: "developpe-couche-halteres-exercice-musculation.gif" },
        { name: "Récupération",                       duration: 15,   image: "drink-water.png" }
      ];

      var exerciseTime3 = 
      [
        { name: "Curl en Prise Marteau - Préparation",      duration: 5,    image: "des-exercices-detirement.png" },
        { name: "Série 1",                                  duration: 6,    image: "curl-haltere-prise-neutre.gif" },
        { name: "Repos 1",                                  duration: 6,    image: "drink-water.png" },
        { name: "Série 2",                                  duration: 6,    image: "curl-haltere-prise-neutre.gif" },
        { name: "Repos 2",                                  duration: 6,    image: "drink-water.png" },
        { name: "Série 3",                                  duration: 6,    image: "curl-haltere-prise-neutre.gif" },
        { name: "Repos 3",                                  duration: 6,    image: "drink-water.png" },
        { name: "Série 4",                                  duration: 6,    image: "curl-haltere-prise-neutre.gif" },
        { name: "Récupération",                             duration: 15,   image: "drink-water.png" }
      ];

      var exerciseTime4 = 
      [
        { name: "Pompes Resserées - Préparation",             duration: 5,    image: "des-exercices-detirement.png" },
        { name: "Série 1",                                    duration: 6,    image: "pompe-musculation.gif" },
        { name: "Repos 1",                                    duration: 6,    image: "drink-water.png" },
        { name: "Série 2",                                    duration: 6,    image: "pompe-musculation.gif" },
        { name: "Repos 2",                                    duration: 6,    image: "drink-water.png" },
        { name: "Série 3",                                    duration: 6,    image: "pompe-musculation.gif" },
        { name: "Repos 3",                                    duration: 6,    image: "drink-water.png" },
        { name: "Série 4",                                    duration: 6,    image: "pompe-musculation.gif" },
        { name: "Récupération",                               duration: 15,   image: "drink-water.png" }
      ];

      var exerciseTime5 = 
      [
        { name: "Waiter Curls - Préparation",         duration: 5,    image: "des-exercices-detirement.png" },
        { name: "Série 1",                            duration: 6,    image: "waiter-curl.gif" },
        { name: "Repos 1",                            duration: 6,    image: "drink-water.png" },
        { name: "Série 2",                            duration: 6,    image: "waiter-curl.gif" },
        { name: "Repos 2",                            duration: 6,    image: "drink-water.png" },
        { name: "Série 3",                            duration: 6,    image: "waiter-curl.gif" },
        { name: "Repos 3",                            duration: 6,    image: "drink-water.png" },
        { name: "Série 4",                            duration: 6,    image: "waiter-curl.gif" },
        { name: "Récupération",                       duration: 15,   image: "drink-water.png" }
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
            currentSetElement.textContent = exerciseTime[exerciseIndex].name;
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


      function changeExercise() 
      {
        if (exerciseTime === exerciseTime1) 
        {
          exerciseTime = exerciseTime2;
        }
        else if (exerciseTime === exerciseTime2) 
        {
          exerciseTime = exerciseTime3;
        }
        else if (exerciseTime === exerciseTime3) 
        {
          exerciseTime = exerciseTime4;
        }
        else if (exerciseTime === exerciseTime4) 
        {
          exerciseTime = exerciseTime5;
        }
        else if (exerciseTime === exerciseTime5) 
        {
          exerciseTime = exerciseTime1;
        } 
        else 
        {
          exerciseTime = exerciseTime1;
        }
        resetTimer();
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
