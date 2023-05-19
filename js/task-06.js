const inputElement = document.querySelector("#validation-input");
inputElement.addEventListener("blur", outputElement);
function outputElement(event) {
  if (event.target.value.length == inputElement.getAttribute("data-length")) {
    inputElement.classList.add("valid");
    if (inputElement.classList.contains("invalid")) {
      inputElement.classList.remove("invalid");
    }
  } else {
    if (inputElement.classList.contains("valid")) {
      inputElement.classList.remove("valid");
    }
    inputElement.classList.add("invalid");
  }
}
