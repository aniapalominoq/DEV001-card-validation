import validator from "./validator.js";

const $button = document.getElementById("validar");
$button.addEventListener("click", inputvalue);

function inputvalue() {
  let creditCardNumber = document.getElementById("card_number").value;
  const $remplazar = document.getElementById("resultado");
  const $texto = document.getElementById("card_number");

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

/* para la ventana pequeña*/
const $cerrar = document.querySelector(".cerrar");
const $abrir = document.getElementById("validar");
const $ventana = document.querySelector(".ventana");
const $ventanaP = document.querySelector(".ventana-contenedor");

$abrir.addEventListener("click", function () {
  $ventanaP.style.opacity = "1";
  $ventanaP.style.visibility = "visible";
  $ventana.classList.toggle("ventana-cerrar");
});

$cerrar.addEventListener("click", function () {
  $ventana.classList.toggle("ventana-cerrar");

  setTimeout(function () {
    $ventanaP.style.opacity = "0";
    $ventanaP.style.visibility = "hidden";
  }, 500);
});
/*el siguiente es para que cuando haga click fuera de la ventana tambien se cerrara*/

window.addEventListener("click", function (e) {
  if (e.target == $ventanaP) {
    $ventana.classList.toggle("ventana-cerrar");

    setTimeout(function () {
      $ventanaP.style.opacity = "0";
      $ventanaP.style.visibility = "hidden";
    }, 500);
  }
});

/*const input = document.querySelector("input");
const log = document.getElementById("valores");

input.addEventListener("input", updateValue); 

function updateValue(e) {
  log.textContent = e.srcElement.value;}*/
