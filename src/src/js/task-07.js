const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", sizeText);
function sizeText(event) {
  textSpan.style.fontSize = `${event.target.value}px`;
}
