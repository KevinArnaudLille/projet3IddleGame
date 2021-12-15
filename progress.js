function MAIN_PROGRESSION(){
  switch (true){
    case STATES.checkpointProgress === 0 :
      addTextToNarrator([narratorData.phase0[0],narratorData.phase0[1]]);
      STATES.checkpointProgress++;
      break;
  }
}