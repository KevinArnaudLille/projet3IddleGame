function MAIN_PROGRESSION() {

  switch (true) {
    // Phase 0.0
    case STATES.checkpointProgress === 0 && STATES.mainBarProgress >= 0:
      addTextToNarrator([narratorData.phase0[0], narratorData.phase0[1]]);
      STATES.checkpointProgress++;
      updateStats();
      break;

    // Phase 0.1
    case STATES.checkpointProgress === 1 && STATES.mainBarProgress >= 0.01:
      addTextToNarrator([narratorData.phase1[0], narratorData.phase1[1]]);
      STATES.checkpointProgress++;
      updateStats();
      break;
  }

  setTimeout(()=>MAIN_PROGRESSION(),10)
}