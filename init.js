// TEST FIELD
STATES.currentMoney = 400;
updateStats();
launchCryptoRefresh();
MAIN_PROGRESSION()

/* Shop tab init */
for (let item of shopItemStats) {
  $(`#${item.itemId}`).innerHTML = item.itemName + item.itemInitPrice;
}

/* Crypto tab init */
for (let crypto of cryptoData) {
  $(`#${crypto.cryptoId}Name`).innerHTML = crypto.cryptoName;
  $(`#${crypto.cryptoId}CurrentVal`).innerHTML = crypto.cryptoInitCurrentVal;
  $(`#${crypto.cryptoId}MinVal`).innerHTML = crypto.cryptoMinVal;
  $(`#${crypto.cryptoId}MedVal`).innerHTML = crypto.cryptoMedVal;
  $(`#${crypto.cryptoId}MaxVal`).innerHTML = crypto.cryptoMaxVal;
}