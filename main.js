// ====== Global functions ======
function $(selector) {
  return document.querySelector(selector);
}

function randn_bm() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
  return num
}

/* ====== Title section ====== */


/* ====== ProgressBar section ====== */
let progressBarBorder = $("#progressBarBorder");
let progressBarContent = $("#progressBarContent");
let progressText = $("#progressText");

progressBarContent.style.cssText = `
  width:${STATES.mainBarProgress}%`;
progressText.innerHTML = `
  ${STATES.mainBarProgress.toFixed(3)}%`;


function progressBarUpdateByClick() {
  STATES.mainBarProgress += (STATES.clickMultiplicator * STATES.clickIncrement);
  progressBarContent.style.cssText = `
  width:${STATES.mainBarProgress}%`;
  progressText.innerHTML = `
  ${STATES.mainBarProgress.toFixed(3)}%`;
};

function progressBarUpdateAuto() {
  // console.log(idle);
  // progressBarContent.style.cssText = `
  // width:${currentWidth += idle}%`
  // progressText.innerHTML = `
  // ${currentWidth.toFixed(3)}%`
};

/* ====== Narrator Textbox section ====== */
// function addTextToNarrator(text) {
//   let narratorTextPlace = $("#narratorTextPlace");
//   narratorTextPlace.insertAdjacentHTML(
//     "beforeend",
//     `${text}<br/>`
//   );
//   narratorTextPlace.scroll(0, Math.pow(10, 10));
// }
async function addTextToNarrator(textList) {
  for (text of textList) {
    let narratorTextPlace = $("#narratorTextPlace");
    narratorTextPlace.insertAdjacentHTML(
      "beforeend",
      `${text}<br/>`
    )
    narratorTextPlace.scroll(0, Math.pow(10, 10));
    await new Promise(r => setTimeout(r, 1000));
  }
}


/* ====== Boards section ====== */
/* -- Statsboard part -- */
function updateStats() {
  clickMultiplicator.innerHTML = STATES.clickMultiplicator;
  clickIncrement.innerHTML = STATES.clickIncrement;
  currentMoney.innerHTML = STATES.currentMoney;
  cryptoAInStock.innerHTML = STATES.cryptoAInStock;
  cryptoBInStock.innerHTML = STATES.cryptoBInStock;
  cryptoCInStock.innerHTML = STATES.cryptoCInStock;
  PCPower.innerHTML = STATES.PCPower;
}

/* -- Taskboard part -- */
function openTabs(evt, cityName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tabLinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* Shop tab */

/* Crypto tab */

// Crypto current price update
function launchCryptoRefresh() {
  // crypto A
  STATES.cryptoACurrentVal = cryptoData[0].cryptoInitCurrentVal;
  setInterval(() => {
    STATES.cryptoACurrentVal = Math.round(cryptoData[0].cryptoMinVal + ((cryptoData[0].cryptoMaxVal - cryptoData[0].cryptoMinVal) * Math.random()));
    UpdateCryptoVal();
  }, cryptoData[0].cryptoTimeInterval);

  // crypto B
  STATES.cryptoBCurrentVal = cryptoData[1].cryptoInitCurrentVal;
  setInterval(() => {
    STATES.cryptoBCurrentVal = Math.round(cryptoData[1].cryptoMinVal + ((cryptoData[1].cryptoMaxVal - cryptoData[1].cryptoMinVal) * randn_bm()));
    UpdateCryptoVal();
  }, cryptoData[1].cryptoTimeInterval);

  // crypto C
  STATES.cryptoCCurrentVal = cryptoData[2].cryptoInitCurrentVal;
  setInterval(() => {
    STATES.cryptoCCurrentVal = Math.round(cryptoData[2].cryptoMinVal + ((cryptoData[2].cryptoMaxVal - cryptoData[2].cryptoMinVal) * randn_bm()));
    UpdateCryptoVal();
  }, cryptoData[2].cryptoTimeInterval);
}

function UpdateCryptoVal() {
  $(`#cryptoACurrentVal`).innerHTML = STATES.cryptoACurrentVal;
  $(`#cryptoBCurrentVal`).innerHTML = STATES.cryptoBCurrentVal;
  $(`#cryptoCCurrentVal`).innerHTML = STATES.cryptoCCurrentVal;
}

// Crypto Buy and Sell functions
function buyCryptoA() {
  if (STATES.currentMoney >= STATES.cryptoACurrentVal) {
    STATES.cryptoAInStock += 1;
    STATES.currentMoney -= STATES.cryptoACurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
  updateStats();
}

function sellCryptoA() {
  if (STATES.cryptoAInStock > 0) {
    console.log(STATES.cryptoAInStock)
    STATES.cryptoAInStock -= 1;
    STATES.currentMoney += STATES.cryptoACurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
  updateStats();
}

function buyCryptoB() {
  if (STATES.currentMoney >= STATES.cryptoBCurrentVal) {
    STATES.cryptoBInStock += 1;
    STATES.currentMoney -= STATES.cryptoBCurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
  updateStats();
}

function sellCryptoB() {
  if (STATES.cryptoBInStock > 0) {
    STATES.cryptoBInStock -= 1;
    STATES.currentMoney += STATES.cryptoBCurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
  updateStats();
}

function buyCryptoC() {
  if (STATES.currentMoney >= STATES.cryptoCCurrentVal) {
    STATES.cryptoCInStock += 1;
    STATES.currentMoney -= STATES.cryptoCCurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
  updateStats();
}

function sellCryptoC() {
  if (STATES.cryptoCInStock > 0) {
    STATES.cryptoCInStock -= 1;
    STATES.currentMoney += STATES.cryptoCCurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
  updateStats();
}

/* Task tab */
function updatePackagingNb() {
  $("#packagingItemsCurrentNb").innerHTML = `
  ${STATES.cardboardCurrentNb} ${packagingItemsData[0].itemName} //
  ${STATES.bubbleWrapCurrentNb} ${packagingItemsData[1].itemName} //
  ${STATES.canCurrentNb} ${packagingItemsData[2].itemName} //
  ${STATES.bottleCurrentNb} ${packagingItemsData[3].itemName} //-//
  ${STATES.boxCurrentNb} ${packagingItemsData[4].itemName} //
  ${STATES.caseCurrentNb} ${packagingItemsData[5].itemName}`
};

function buyCardboard() {
  if (STATES.currentMoney >= packagingItemsData[0].itemVal) {
    STATES.cardboardCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[0].itemVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
  updatePackagingNb();
  updateStats();
}

function buyBubbleWrap() {
  if (STATES.currentMoney >= packagingItemsData[1].itemVal) {
    STATES.bubbleWrapCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[1].itemVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
  updatePackagingNb();
  updateStats();
}

function buyCan() {
  if (STATES.currentMoney >= packagingItemsData[2].itemVal) {
    STATES.canCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[2].itemVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
  updatePackagingNb();
  updateStats();
}

function buyBottle() {
  if (STATES.currentMoney >= packagingItemsData[3].itemVal) {
    STATES.bottleCurrentNb += 1;
    STATES.currentMoney -= packagingItemsData[3].itemVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  };
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
    // Le narrateur dit un truc
    console.log("nop");
  };
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
    // Le narrateur dit un truc
    console.log("nop");
  };
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
    }
    STATES.boxCurrentNb -= currentPackagingTask.nbOfBoxesRequired;
    STATES.caseCurrentNb -= currentPackagingTask.nbOfCasesRequired;
    generateNewPackagingTask();
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  }
  updatePackagingNb();
  updateStats();
}