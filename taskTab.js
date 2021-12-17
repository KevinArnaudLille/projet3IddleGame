// A REFACTORISER !!

/* Task tab */
function updatePackagingNb() {
  $("#packagingItemsCurrentNb").innerHTML = `You have 
  ${STATES.cardboardCurrentNb} ${packagingItemsData[0].itemName} //
  ${STATES.bubbleWrapCurrentNb} ${packagingItemsData[1].itemName} //
  ${STATES.canCurrentNb} ${packagingItemsData[2].itemName} //
  ${STATES.bottleCurrentNb} ${packagingItemsData[3].itemName} //-//
  ${STATES.boxCurrentNb} ${packagingItemsData[4].itemName} //
  ${STATES.caseCurrentNb} ${packagingItemsData[5].itemName}`
}

function buyCardboard() {
  if (STATES.currentMoney >= packagingItemsData[0].itemVal) {
    STATES.cardboardCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[0].itemVal;
  } else {
    addTextToNarrator(narratorData.error1)
  }

  updatePackagingNb();
  updateStats();
}

function buyBubbleWrap() {
  if (STATES.currentMoney >= packagingItemsData[1].itemVal) {
    STATES.bubbleWrapCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[1].itemVal;
  } else {
    addTextToNarrator(narratorData.error1)
  }

  updatePackagingNb();
  updateStats();
}

function buyCan() {
  if (STATES.currentMoney >= packagingItemsData[2].itemVal) {
    STATES.canCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[2].itemVal;
  } else {
    addTextToNarrator(narratorData.error1)
  }

  updatePackagingNb();
  updateStats();
}

function buyBottle() {
  if (STATES.currentMoney >= packagingItemsData[3].itemVal) {
    STATES.bottleCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[3].itemVal;
  } else {
    addTextToNarrator(narratorData.error1)
  }

  updatePackagingNb();
  updateStats();
}

function buyBox() {
  if (STATES.currentMoney >= packagingItemsData[4].itemVal && STATES.cardboardCurrentNb >= packagingItemsData[4].nbOfCarboardsRequired && STATES.bubbleWrapCurrentNb >= packagingItemsData[4].nbOfBubbleWrapsRequired) {
    STATES.boxCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[4].itemVal;
    STATES.cardboardCurrentNb -= packagingItemsData[4].nbOfCarboardsRequired;
    STATES.bubbleWrapCurrentNb -= packagingItemsData[4].nbOfBubbleWrapsRequired;
  } else {
    addTextToNarrator(narratorData.error2);
  }
  updatePackagingNb();
  updateStats();
}

function buyCase() {
  if (STATES.currentMoney >= packagingItemsData[5].itemVal && STATES.canCurrentNb >= packagingItemsData[5].nbOfCanRequired && STATES.bottleCurrentNb >= packagingItemsData[5].nbOfBottleRequired) {
    STATES.caseCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[5].itemVal;
    STATES.canCurrentNb -= packagingItemsData[5].nbOfCanRequired;
    STATES.bottleCurrentNb -= packagingItemsData[5].nbOfBottleRequired;
  } else {
    addTextToNarrator(narratorData.error2);
  }
  updatePackagingNb();
  updateStats();
}

function generateNewPackagingTask() {
  console.log("New task generated");

  let newPackagingTask = packagingTaskData[Math.floor(Math.random() * packagingTaskData.length)];
  $("#merchendisesToSendDescription").innerHTML = newPackagingTask.taskText;

  $("#sendMerchendisesBtn").innerHTML = `SEND ${newPackagingTask.nbOfBoxesRequired} Boxes + ${newPackagingTask.nbOfCasesRequired} Cases`;

  $("#taskReward").innerHTML = `Reward - ${newPackagingTask.rewardVal} ${newPackagingTask.rewardType}`
  STATES.currentPackagingTask = newPackagingTask.taskId
}

function sendMerchendises() {
  let currentPackagingTask = packagingTaskData[STATES.currentPackagingTask]

  if (STATES.boxCurrentNb >= currentPackagingTask.nbOfBoxesRequired && STATES.caseCurrentNb >= currentPackagingTask.nbOfCasesRequired) {
    switch (currentPackagingTask.rewardType) {
      case "money":
        STATES.currentMoney += currentPackagingTask.rewardVal
        break;

      case "Click Power":
        STATES.clickIncrement += currentPackagingTask.rewardVal;
        break;

      case "Click Factor":
        STATES.clickMultiplicator += currentPackagingTask.rewardVal;
        break;
    }

    STATES.boxCurrentNb -= currentPackagingTask.nbOfBoxesRequired;
    STATES.caseCurrentNb -= currentPackagingTask.nbOfCasesRequired;
    generateNewPackagingTask();

  } else {
    addTextToNarrator(["You don't have the requiered packaging!"]);
  }

  updatePackagingNb();
  updateStats();
}

// Events
let sendMerchendisesBtn = $("#sendMerchendisesBtn");
sendMerchendisesBtn.addEventListener("click", () => sendMerchendises());
sendMerchendisesBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});

let cardboardBtn = $("#cardboardBtn");
cardboardBtn.addEventListener("click", () => buyCardboard());
cardboardBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});

let bubbleWrapBtn = $("#bubbleWrapBtn");
bubbleWrapBtn.addEventListener("click", () => buyBubbleWrap());
bubbleWrapBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});

let canBtn = $("#canBtn");
canBtn.addEventListener("click", () => buyCan());
canBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});

let bottleBtn = $("#bottleBtn");
bottleBtn.addEventListener("click", () => buyBottle());
bottleBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});

let boxBtn = $("#boxBtn");
boxBtn.addEventListener("click", () => buyBox());
boxBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});

let caseBtn = $("#caseBtn");
caseBtn.addEventListener("click", () => buyCase());
caseBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});