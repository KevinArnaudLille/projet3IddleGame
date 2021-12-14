console.log("concept");

function $(selector) {
  return document.querySelector(selector);
}

let narratorTextPlace = $("#narratorTextPlace");
console.log(narratorTextPlace);
narratorTextPlace.textContent = "start"

function addText(){
    narratorTextPlace.insertAdjacentHTML("beforeend", "<br/> Sullivan le con")
    narratorTextPlace.scroll(0, 100000000000000000000000000000000000)
}
