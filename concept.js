console.log("concept");

function $(selector) {
  return document.querySelector(selector);
}

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
