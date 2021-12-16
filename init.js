// TEST FIELD
updateStats();

// Tabs display init
$("#allBoards").style.display = "none";
$("#Shop").style.display = "block";
$("#cryptoStatsBox").style.display = "none";
$("#cryptoTabBtn").style.display = "none";
$("#taskTabBtn").style.display = "none";
$("#statsTabBtn").style.display = "none";

// A METTRE DANS LA STORY

// launchTaskDisplay()
// generateNewPackagingTask()
// updatePackagingNb()

/* Progress bar init */
let progressBarBorder = $("#progressBarBorder");
let progressBarContent = $("#progressBarContent");
let progressText = $("#progressText");

progressBarContent.style.cssText = `
  width:${STATES.mainBarProgress}%`;
progressText.innerHTML = `
  ${STATES.mainBarProgress.toFixed(3)}%`;

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
for (let item of packagingItemsData) {
  $(`#${item.itemId}Btn`).innerHTML = `${item.itemName} - ${item.itemVal}$`;
}
$(`#boxBtn`).insertAdjacentHTML("beforeend", ` + ${packagingItemsData[4].nbOfCarboardsRequired} ${packagingItemsData[0].itemName} + ${packagingItemsData[4].nbOfBubbleWrapsRequired} ${packagingItemsData[1].itemName}`);

$(`#caseBtn`).insertAdjacentHTML("beforeend", ` + ${packagingItemsData[5].nbOfCanRequired} ${packagingItemsData[2].itemName} + ${packagingItemsData[5].nbOfBottleRequired} ${packagingItemsData[3].itemName}`);

// LET'S GO
MAIN_PROGRESSION()