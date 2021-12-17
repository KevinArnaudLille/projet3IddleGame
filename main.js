/* ====== Boards section ====== */
/* -- Statsboard part -- */
function updateStats() {
  clickMultiplicator.innerHTML = STATES.clickMultiplicator;
  clickIncrement.innerHTML = STATES.clickIncrement.toFixed(3);
  currentMoney.innerHTML = `$$$ ${STATES.currentMoney}`;
  cryptoAInStock.innerHTML = `${cryptoA.cryptoStock} ClickCoin`;
  cryptoBInStock.innerHTML = `${cryptoB.cryptoStock} TonyCoin`;
  cryptoCInStock.innerHTML = `${cryptoC.cryptoStock} KekCoin`;
  PCPower.innerHTML = `Pc Power ${STATES.PCPower}`;

  STATES.cryptoACurrentVal = cryptoA.cryptoVal;
  STATES.cryptoAInStock = cryptoA.cryptoStock;
  STATES.cryptoBCurrentVal = cryptoB.cryptoVal;
  STATES.cryptoBInStock = cryptoB.cryptoStock;
  STATES.cryptoCCurrentVal = cryptoC.cryptoVal;
  STATES.cryptoCInStock = cryptoC.cryptoStock;
}

/* -- Taskboard part -- */
function openTabs(evt, name) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabLinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

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
function generateTabBtnEvent(idBtn,idTab){
  let tabBtn = $(idBtn);
  tabBtn.addEventListener("click", (e) => openTabs(e, idTab));
  tabBtn.addEventListener("keypress", (e) => {
  e.preventDefault();
});
}

generateTabBtnEvent("#shopTabBtn",`Shop`);
generateTabBtnEvent("#cryptoTabBtn",`Crypto`);
generateTabBtnEvent("#taskTabBtn",`Task`);