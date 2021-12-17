function MAIN_PROGRESSION() {

  switch (true) {
    // Phase 00
    case STATES.checkpointProgress === 0 && STATES.mainBarProgress >= storyProgressBarCheckpoint[0]:
      addTextToNarrator(narratorData.phase00);
      STATES.checkpointProgress++;
      updateStats();
      break;

    // Phase 01
    case STATES.checkpointProgress === 1 && STATES.mainBarProgress >= storyProgressBarCheckpoint[1]:
      addTextToNarrator(narratorData.phase01);
      STATES.checkpointProgress++;
      updateStats();
      break;

    // Phase 02
    case STATES.checkpointProgress === 2 && STATES.mainBarProgress >= storyProgressBarCheckpoint[2]:
      addTextToNarrator(narratorData.phase02);
      STATES.checkpointProgress++;
      updateStats();
      break;

    // Phase 10
    case STATES.checkpointProgress === 3 && STATES.mainBarProgress >= storyProgressBarCheckpoint[3]:
      addTextToNarrator(narratorData.phase10);
      STATES.checkpointProgress++;
      STATES.isAutoProgressEnable = true;
      STATES.currentMoney += (shopItemsData[0].itemCurrentPrice * 3);
      STATES.isPlayerPoor = true;
      launchShopDisplay();
      launchProgressBarUpdateAuto();
      updatePCPower('item0');
      updateStats();
      break;

    // Phase 20
    case STATES.checkpointProgress === 4 && STATES.mainBarProgress >= storyProgressBarCheckpoint[4]:
      addTextToNarrator(narratorData.phase20);
      STATES.checkpointProgress++;
      STATES.currentMoney += 1000;
      launchCryptoDisplay()
      launchCryptoRefresh()
      updateStats();
      break;

    case STATES.checkpointProgress === 5 && STATES.mainBarProgress >= storyProgressBarCheckpoint[5]:
      addTextToNarrator(narratorData.phase21);
      STATES.clickIncrement += 0.001;
      STATES.clickMultiplicator += 0.1;
      STATES.checkpointProgress++;
      updateStats();
      break;

    case STATES.checkpointProgress === 6 && STATES.mainBarProgress >= storyProgressBarCheckpoint[6]:
      addTextToNarrator(narratorData.phase30);
      STATES.checkpointProgress++;
      STATES.currentMoney += 1000;
      launchTaskDisplay()
      generateNewPackagingTask()
      updatePackagingNb()
      updateStats();
      break;

    case STATES.mainBarProgress >= 100:
      addTextToNarrator(narratorData.phase99);
      STATES.mainBarProgress = 100;
      STATES.clickIncrement = 0;
      STATES.clickMultiplicator = 0;
      STATES.autoProgressFactor = 0;
      STATES.autoProgressSpeed = 0;
      STATES.autoProgressVal = 0;
      $("#allBoards").style.display = "none";
      $("#Shop").style.display = "block";
      $("#cryptoStatsBox").style.display = "none";
      $("#cryptoTabBtn").style.display = "none";
      $("#taskTabBtn").style.display = "none";
      $("#statsTabBtn").style.display = "none";
      STATES.isGameEnded = true;
      updateStats();
      break;
  }

  if (STATES.currentMoney <= 10 && STATES.isPlayerPoor){
    console.log("lol");
    STATES.currentMoney += 200;
    STATES.isPlayerPoor = false;
    setTimeout(() => STATES.isPlayerPoor = true,10000);
    updateStats();
  }

  if (!STATES.isGameEnded){
    setTimeout(() => MAIN_PROGRESSION(), 10)
  }
}