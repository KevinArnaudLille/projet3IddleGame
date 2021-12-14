function $(selector) {
  return document.querySelector(selector);
}

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