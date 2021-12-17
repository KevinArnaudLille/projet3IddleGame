/* Crypto tab */
function Crypto(crypto, cryptoVal, cryptoStock) {

  this.cryptoStock = cryptoStock;
  this.cryptoVal = cryptoVal;

  this.refresh = () => {
    this.cryptoVal = crypto.cryptoInitCurrentVal;
    setInterval(() => {
      this.cryptoVal = Math.round(crypto.cryptoMinVal + ((crypto.cryptoMaxVal - crypto.cryptoMinVal) * Math.random()));
      UpdateCryptoVal();
    }, crypto.cryptoTimeInterval);
  };

  this.update = () => {
    $(`#${crypto.cryptoId}CurrentVal`).innerHTML = this.cryptoVal;
  };

  this.buy = () => {
    if (STATES.currentMoney >= this.cryptoVal) {
      this.cryptoStock += 1;
      STATES.currentMoney -= this.cryptoVal;
    } else {
      addTextToNarrator(narratorData.error1)
    }
    updateStats();
  };

  this.sell = () => {
    if (this.cryptoStock > 0) {
      this.cryptoStock -= 1;
      STATES.currentMoney += this.cryptoVal;
    } else {
      addTextToNarrator(narratorData.error2)
    }
    updateStats();
  };

  let cryptoBuyBtn = $(`#${crypto.cryptoId}BuyButton`);
  cryptoBuyBtn.addEventListener("click", () => this.buy());
  cryptoBuyBtn.addEventListener("keypress", (e) => {
    e.preventDefault();
  });

  let cryptoSellBtn = $(`#${crypto.cryptoId}SellButton`);
  cryptoSellBtn.addEventListener("click", () => this.sell());
  cryptoSellBtn.addEventListener("keypress", (e) => {
    e.preventDefault();
  });
}

let cryptoA = new Crypto(cryptoData[0], STATES.cryptoACurrentVal, STATES.cryptoAInStock);

let cryptoB = new Crypto(cryptoData[1], STATES.cryptoBCurrentVal, STATES.cryptoBInStock);

let cryptoC = new Crypto(cryptoData[2], STATES.cryptoCCurrentVal, STATES.cryptoCInStock);

function launchCryptoRefresh() {
  cryptoA.refresh();
  cryptoB.refresh();
  cryptoC.refresh();
}

function UpdateCryptoVal(){
  cryptoA.update();
  cryptoB.update();
  cryptoC.update();
}