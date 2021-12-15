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

function progressBarUpdateAuto(idle) {
  console.log(idle);
  progressBarContent.style.cssText = `
  width:${currentWidth += idle}%`
  progressText.innerHTML = `
  ${currentWidth.toFixed(3)}%`
};

/* ====== Narrator Textbox section ====== */
let narratorTextPlace = $("#narratorTextPlace");
console.log(narratorTextPlace);
narratorTextPlace.textContent = "start";

function addText() {
  narratorTextPlace.insertAdjacentHTML(
    "beforeend",
    "<br/> Un chasseur sachant chasser sans son chien est un bon chasseur"
  );
  narratorTextPlace.scroll(0, Math.pow(10, 10));
}

/* ====== Boards section ====== */
/* -- Statsboard part -- */
const testNumbers10 = 10;
function addNumbersStats() {
  numberTest1.innerHTML = (parseInt(numberTest1.innerHTML) + 10).toString();
  numberTest2.innerHTML = (parseInt(numberTest2.innerHTML) + 10).toString();
  numberTest3.innerHTML = (parseInt(numberTest3.innerHTML) + 10).toString();
  numberTest4.innerHTML = (parseInt(numberTest4.innerHTML) + 10).toString();
  numberTest5.innerHTML = (parseInt(numberTest5.innerHTML) + 10).toString();
  numberTest6.innerHTML = (parseInt(numberTest6.innerHTML) + 10).toString();
  numberTest7.innerHTML = (parseInt(numberTest7.innerHTML) + 10).toString();
}
console.log((parseInt(numberTest1.innerHTML) + 10).toString());

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

/* Crypto tab */

// Current price update
function launchCryptoRefresh(){
  STATES.cryptoACurrentVal = cryptoData[0].cryptoInitCurrentVal;
 setInterval(()=>{
   STATES.cryptoACurrentVal = cryptoData[0].cryptoMedVal * Math.random();
   updateStats();
 },cryptoData[0].cryptoTimeInterval)
}
// $(`#cryptoACurrentPrice`).innerHTML = cryptoACurrentPrice;
// $(`#cryptoBCurrentPrice`).innerHTML = cryptoBCurrentPrice;
// $(`#cryptoCCurrentPrice`).innerHTML = cryptoCCurrentPrice;
// $(`#cryptoDCurrentPrice`).innerHTML = cryptoDCurrentPrice;

// Crypto Buy and Sell functions
function buyCryptoA() {
  if (STATES.currentMoney >= STATES.cryptoACurrentVal) {
    STATES.cryptoAInStock += 1;
    STATES.currentMoney -= STATES.cryptoACurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  }
}

function sellCryptoA() {
  if (STATES.cryptoAInStock < 0) {
    STATES.cryptoAInStock -= 1;
    STATES.currentMoney += STATES.cryptoACurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  }
}

function buyCryptoB() {
  if (STATES.currentMoney >= STATES.cryptoBCurrentVal) {
    STATES.cryptoBInStock += 1;
    STATES.currentMoney -= STATES.cryptoBCurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  }
}

function sellCryptoB() {
  if (STATES.cryptoBInStock < 0) {
    STATES.cryptoBInStock -= 1;
    STATES.currentMoney += STATES.cryptoBCurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  }
}

function buyCryptoC() {
  if (STATES.currentMoney >= STATES.cryptoCCurrentVal) {
    STATES.cryptoCInStock += 1;
    STATES.currentMoney -= STATES.cryptoCCurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  }
}

function sellCryptoC() {
  if (STATES.cryptoCInStock < 0) {
    STATES.cryptoCInStock -= 1;
    STATES.currentMoney += STATES.cryptoCCurrentVal;
  } else {
    // Le narrateur dit un truc
    console.log("nop");
  }
}

/* -- Formular part -- */