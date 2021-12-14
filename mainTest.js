console.log("test");

// Global functions ==============================
function $(selector) {
  return document.querySelector(selector)
};

// Progress Bar ===================================
let progressBarBorder = $("#progressBarBorder");
let progressBarContent = $("#progressBarContent");
let progressText = $("#progressText");

let currentWidth = 0;
progressBarContent.style.cssText = `
  width:${currentWidth}%`
progressText.innerHTML = `
  ${currentWidth}%`


function progressBarUpdate(idle) {
  console.log(idle);
  progressBarContent.style.cssText = `
  width:${currentWidth += idle}%`
  progressText.innerHTML = `
  ${currentWidth.toFixed(3)}%`
};

let idleBtn = $("#idleBtn");
idleBtn.addEventListener('click', () => {
  progressBarUpdate(1);
});

setInterval(() => progressBarUpdate(0.01), 10);


//Tabs Generation ==================================
function openTabs(evt, cityName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

console.log(allTabsContents);
let tabsButtons = $("#tabsButtons");
let tabsContents = $("#tabsContents");
function addTony(){
  tabsButtons.insertAdjacentHTML("beforeend" ,allTabsContents[0].tabBtnHTML);
  tabsContents.insertAdjacentHTML("beforeend", allTabsContents[0].tabContentHTML);
};



// CRYPTO TRADING =================================
let cryptoAStock = 0, cryptoBStock = 0, cryptoCStock = 0, cryptoDStock = 0;

let cryptoACurrentPrice = 20, cryptoBCurrentPrice = 20, cryptoCCurrentPrice = 20, cryptoDCurrentPrice = 20;

let money = 1000;

// Crypto table init =============================
for (let crypto of initCryptoData){
  $(`#${crypto.cryptoId}Name`).innerHTML = crypto.cryptoName;
  $(`#${crypto.cryptoId}MinPrice`).innerHTML = crypto.cryptoMinVal;
  $(`#${crypto.cryptoId}MinPrice`).innerHTML = crypto.cryptoMinVal;
  $(`#${crypto.cryptoId}MedPrice`).innerHTML = crypto.cryptoMedVal;
  $(`#${crypto.cryptoId}MaxPrice`).innerHTML = crypto.cryptoMaxVal;
}

$(`#cryptoACurrentPrice`).innerHTML = cryptoACurrentPrice;
$(`#cryptoBCurrentPrice`).innerHTML = cryptoBCurrentPrice;
$(`#cryptoCCurrentPrice`).innerHTML = cryptoCCurrentPrice;
$(`#cryptoDCurrentPrice`).innerHTML = cryptoDCurrentPrice;

function buyCryptoA(){
  cryptoAStock += 1;
  money -= cryptoACurrentPrice;
  console.log(`Vous avez ${cryptoAStock} ${initCryptoData[0].cryptoName} et il vous reste ${money} de tunasse`)
}

function sellCryptoA(){
  cryptoAStock -= 1;
  money += cryptoACurrentPrice;
  console.log(`Vous avez ${cryptoAStock} ${initCryptoData[0].cryptoName} et il vous reste ${money} de tunasse`)
}