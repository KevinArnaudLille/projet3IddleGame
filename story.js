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
      STATES.currentMoney += (shopItemsData[0].itemCurrentPrice*3);
      launchShopDisplay();
      launchProgressBarUpdateAuto();
      updatePCPower('item0');
      updateStats();
      break;
  }

  setTimeout(() => MAIN_PROGRESSION(), 10)
}