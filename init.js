// TEST FIELD
STATES.currentMoney = 400;
updateStats();

/* Crypto tab init */
for (let crypto of cryptoData) {
  $(`#${crypto.cryptoId}Name`).innerHTML = crypto.cryptoName;
  $(`#${crypto.cryptoId}CurrentVal`).innerHTML = crypto.cryptoInitCurrentVal;
  $(`#${crypto.cryptoId}MinVal`).innerHTML = crypto.cryptoMinVal;
  $(`#${crypto.cryptoId}MedVal`).innerHTML = crypto.cryptoMedVal;
  $(`#${crypto.cryptoId}MaxVal`).innerHTML = crypto.cryptoMaxVal;
}