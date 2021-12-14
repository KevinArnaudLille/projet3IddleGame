// ====== Global functions ======
function $(selector) {
  return document.querySelector(selector);
}

/* ====== Title section ====== */


/* ====== ProgressBar section ====== */
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
idleBtn.addEventListener('click', () => {
  progressBarUpdate(1);
});

setInterval(() => progressBarUpdate(0.01), 10);

/* ====== Narrator Textbox section ====== */
let narratorTextPlace = $("#narratorTextPlace");
console.log(narratorTextPlace);
narratorTextPlace.textContent = "start";

function addText() {
  narratorTextPlace.insertAdjacentHTML(
    "beforeend",
    "<br/> Un chasseur sachant chasser sans son chien est un bon chasseur"
  );
  narratorTextPlace.scroll(0, Math.pow(10, 10));
}

/* ====== Boards section ====== */
/* -- Statsboard part -- */
const testNumbers10 = 10;
function addNumbersStats() {
  numberTest1.innerHTML = (parseInt(numberTest1.innerHTML) + 10).toString();
  numberTest2.innerHTML = (parseInt(numberTest2.innerHTML) + 10).toString();
  numberTest3.innerHTML = (parseInt(numberTest3.innerHTML) + 10).toString();
  numberTest4.innerHTML = (parseInt(numberTest4.innerHTML) + 10).toString();
  numberTest5.innerHTML = (parseInt(numberTest5.innerHTML) + 10).toString();
  numberTest6.innerHTML = (parseInt(numberTest6.innerHTML) + 10).toString();
  numberTest7.innerHTML = (parseInt(numberTest7.innerHTML) + 10).toString();
}
console.log((parseInt(numberTest1.innerHTML) + 10).toString());

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

/* -- Formular part -- */