/* ====== Boards section ====== */
/* -- Statsboard part -- */
function updateStats() {
  clickMultiplicator.innerHTML = STATES.clickMultiplicator;
  clickIncrement.innerHTML = STATES.clickIncrement.toFixed(3);
  currentMoney.innerHTML = `$$$ ${STATES.currentMoney}`;
  cryptoAInStock.innerHTML = `${STATES.cryptoAInStock} ClickCoin`;
  cryptoBInStock.innerHTML = `${STATES.cryptoBInStock} TonyCoin`;
  cryptoCInStock.innerHTML = `${STATES.cryptoCInStock} KekCoin`;
  PCPower.innerHTML = `Pc Power ${STATES.PCPower}`;
}

/* -- Taskboard part -- */
function openTabs(evt, name) {
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
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

function launchShopDisplay() {
  $("#allBoards").style.display = "flex";
  $("#Shop").style.display = "block";
}

function launchCryptoDisplay() {
  $("#cryptoStatsBox").style.display = "block";
  $("#cryptoTabBtn").style.display = "inline";
}

function launchTaskDisplay() {
  $("#taskTabBtn").style.display = "inline";
}

// Events
let shopTabBtn = $("#shopTabBtn");
shopTabBtn.addEventListener("click", (e) => openTabs(e, `Shop`));
shopTabBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});

let cryptoTabBtn = $("#cryptoTabBtn");
cryptoTabBtn.addEventListener("click", (e) => openTabs(e, `Crypto`));
cryptoTabBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});

let taskTabBtn = $("#taskTabBtn");
taskTabBtn.addEventListener("click", (e) => openTabs(e, `Task`));
taskTabBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});

let statsTabBtn = $("#statsTabBtn");
statsTabBtn.addEventListener("click", (e) => openTabs(e, `Stats`));
statsTabBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});