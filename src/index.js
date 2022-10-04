import validator from "./validator.js";

const $button = document.getElementById("validar");
$button.addEventListener("click", inputvalue);

function inputvalue() {
  let creditCardNumber = document.getElementById("card_number").value;
  const $remplazar = document.getElementById("resultado");
  const $texto = document.getElementById("card_number");

  //let expReg = /^[0-9]*(\.?)[ 0-9]+$/;

  if (validator.isValid(creditCardNumber) == true) {
    $texto.value = validator.maskify(creditCardNumber);
    $remplazar.outerHTML =
      '<p id="resultado">CORRECTO,la tarjeta es valida</p>';
  } else {
    $texto.value = validator.maskify(creditCardNumber);
    $remplazar.outerHTML =
      '<p id="resultado">INCORRECTO,la tarjeta NO es valida</p>';
  }
}

/*const input = document.querySelector("input");
const log = document.getElementById("valores");

input.addEventListener("input", updateValue); 

function updateValue(e) {
  log.textContent = e.srcElement.value;}*/
