// TEST FIELD
STATES.currentMoney = 40000;
updateStats();
launchCryptoRefresh();
updatePackagingNb()
generateNewPackagingTask()
MAIN_PROGRESSION()

/* Shop tab init */
for (let item of shopItemsData) {
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

// Packaging task init
for (let item of packagingItemsData){
  console.log(item)
  $(`#${item.itemId}Btn`).innerHTML = `${item.itemName} - ${item.itemVal}$`;
}
$(`#boxBtn`).insertAdjacentHTML("beforeend",` + ${packagingItemsData[4].nbOfCarboardsRequired} ${packagingItemsData[0].itemName} + ${packagingItemsData[4].nbOfBubbleWrapsRequired} ${packagingItemsData[1].itemName}`);

$(`#caseBtn`).insertAdjacentHTML("beforeend",` + ${packagingItemsData[5].nbOfCanRequired} ${packagingItemsData[2].itemName} + ${packagingItemsData[5].nbOfBottleRequired} ${packagingItemsData[3].itemName}`);
