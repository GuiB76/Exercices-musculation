      //---------------------------------------------------------------------------\\
      // WAKE LOCK pour garder le téléphone allumé lors des exercices de l'entrainement

      var wakeLock = null;

      // Fonction pour demander le Wake Lock
      async function requestWakeLock() 
      {
        try 
        {
          const wakeLock = await navigator.wakeLock.request("screen");
          console.log("Wake Lock activé !");
          return wakeLock;
        } 
        catch (err) 
        {
          console.error("Impossible d'activer le Wake Lock : ", err);
        }
      }

      // Fonction pour relâcher le Wake Lock
      async function releaseWakeLock(wakeLock) 
      {
        try 
        {
          await wakeLock.release();
          console.log("Wake Lock relâché !");
        } 
        catch (err) 
        {
          console.error("Erreur lors du relâchement du Wake Lock : ", err);
        }
      }
