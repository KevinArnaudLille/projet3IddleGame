/* ====== Boards section ====== */
/* -- Statsboard part -- */
function updateStats() {
  clickMultiplicator.innerHTML = STATES.clickMultiplicator;
  clickIncrement.innerHTML = STATES.clickIncrement;
  currentMoney.innerHTML = "$$$ " + STATES.currentMoney;
  cryptoAInStock.innerHTML = STATES.cryptoAInStock + " TonyCoin";
  cryptoBInStock.innerHTML = STATES.cryptoBInStock + " ClickCoin";
  cryptoCInStock.innerHTML = STATES.cryptoCInStock + " SullyCoin";
  PCPower.innerHTML = "Pc Power " + STATES.PCPower;
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