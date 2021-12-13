console.log("test");

// Global functions
function $(selector) {
  return document.querySelector(selector)
};

let progressBarBorder = $("#progressBarBorder");
let progressBarContent = $("#progressBarContent");
let progressText = $("#progressText");

let currentWidth = 0;
progressBarContent.style.cssText = `
  width:${currentWidth}%`
progressText.innerHTML = `
  ${currentWidth}%`


function progressBarUpdate(idle) {
  console.log(idle);
  progressBarContent.style.cssText = `
  width:${currentWidth += idle}%`
  progressText.innerHTML = `
  ${currentWidth.toFixed(3)}%`
};

let idleBtn = $("#idleBtn");
console.log(idleBtn);
idleBtn.addEventListener('click', () => {
  progressBarUpdate(1);
});

setInterval(() => progressBarUpdate(0.01), 10);