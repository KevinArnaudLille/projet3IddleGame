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
    STATES.cryptoBCurrentVal = Math.round(cryptoData[1].cryptoMinVal + ((cryptoData[1].cryptoMaxVal - cryptoData[1].cryptoMinVal) * Math.random()));
    UpdateCryptoVal();
  }, cryptoData[1].cryptoTimeInterval);

  // crypto C
  STATES.cryptoCCurrentVal = cryptoData[2].cryptoInitCurrentVal;
  setInterval(() => {
    STATES.cryptoCCurrentVal = Math.round(cryptoData[2].cryptoMinVal + ((cryptoData[2].cryptoMaxVal - cryptoData[2].cryptoMinVal) * Math.random()));
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
    addTextToNarrator(narratorData.error1)
  }
  updateStats();
}

function sellCryptoA() {
  if (STATES.cryptoAInStock > 0) {
    console.log(STATES.cryptoAInStock)
    STATES.cryptoAInStock -= 1;
    STATES.currentMoney += STATES.cryptoACurrentVal;
  } else {
    addTextToNarrator(narratorData.error2)
  }
  updateStats();
}

function buyCryptoB() {
  if (STATES.currentMoney >= STATES.cryptoBCurrentVal) {
    STATES.cryptoBInStock += 1;
    STATES.currentMoney -= STATES.cryptoBCurrentVal;
  } else {
    addTextToNarrator(narratorData.error1)
  }
  updateStats();
}

function sellCryptoB() {
  if (STATES.cryptoBInStock > 0) {
    STATES.cryptoBInStock -= 1;
    STATES.currentMoney += STATES.cryptoBCurrentVal;
  } else {
    addTextToNarrator(narratorData.error2);
  }
  updateStats();
}

function buyCryptoC() {
  if (STATES.currentMoney >= STATES.cryptoCCurrentVal) {
    STATES.cryptoCInStock += 1;
    STATES.currentMoney -= STATES.cryptoCCurrentVal;
  } else {
    addTextToNarrator(narratorData.error1)
  }
  updateStats();
}

function sellCryptoC() {
  if (STATES.cryptoCInStock > 0) {
    STATES.cryptoCInStock -= 1;
    STATES.currentMoney += STATES.cryptoCCurrentVal;
  } else {
    addTextToNarrator(narratorData.error2)
  }
  updateStats();
}