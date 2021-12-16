// ====== Global functions ======
function $(selector) {
  return document.querySelector(selector);
}

function randn_bm() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5;
  if (num > 1 || num < 0) return randn_bm()
  return num
}

/* ====== Title section ====== */


/* ====== ProgressBar section ====== */
function progressBarUpdateByClick() {
  STATES.mainBarProgress += (STATES.clickMultiplicator * STATES.clickIncrement);
  progressBarVisualUpdate()
};

function launchProgressBarUpdateAuto() {
  STATES.mainBarProgress += STATES.autoProgressFactor * STATES.autoProgressVal;
  progressBarVisualUpdate()
  setTimeout(() => launchProgressBarUpdateAuto(), STATES.autoProgressSpeed);
};

function progressBarVisualUpdate() {
  progressBarContent.style.cssText = `
  width:${STATES.mainBarProgress}%`;
  progressText.innerHTML = `
  ${STATES.mainBarProgress.toFixed(3)}%`;
}

/* ====== Narrator Textbox section ====== */
async function addTextToNarrator(textList) {
  for (text of textList) {
    let narratorTextPlace = $("#narratorTextPlace");
    narratorTextPlace.insertAdjacentHTML(
      "beforeend",
      `${text} . . . <br/>`
    )
    narratorTextPlace.scroll(0, Math.pow(10, 10));
    await new Promise(r => setTimeout(r, (80 * text.length)));
  }
}

// Events
let clickIdleBtn = $("#clickIdleBtn");
clickIdleBtn.addEventListener("click", progressBarUpdateByClick);