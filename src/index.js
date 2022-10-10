import validator from "./validator.js";

//guardo mis input del DOM
const $numeroTarjeta = document.getElementById("card_number");
const $nombre = document.getElementById("card_nombre");
const $fechaVencimiento = document.getElementById("card_fecha");
const $ccv = document.getElementById("card_ccv");
const $boton = document.getElementById("validar");

// mis eventos:n
window.addEventListener("load", function () {
  document.getElementById("mensaje").style.visibility = "hidden";
  document.getElementById("mensaje1").style.visibility = "hidden";
  document.getElementById("mensaje2").style.visibility = "hidden";
  document.getElementById("mensaje3").style.visibility = "hidden";
});

$numeroTarjeta.addEventListener("blur", validaNumero);
$fechaVencimiento.addEventListener("blur", validaFecha);
$ccv.addEventListener("blur", validaCcv);
$nombre.addEventListener("blur", validaNombre);
$boton.addEventListener("click", resultado);

//funcion para limpiar mis valores de los input
/*
function limpiarInputs() {
  $numeroTarjeta.value == "";
  $nombre.value == "";
  $fechaVencimiento.value == "";
  $ccv.value == "";
}*/

//funcion para validar entradas en los input
//1.VALIDA NUMEROS
function validaNumero() {
  let creditCardNumber = $numeroTarjeta.value;
  const $remplazar = document.getElementById("resultado");

  let valoresAceptados = /^[0-9]+$/;
  if (creditCardNumber.match(valoresAceptados)) {
    document.getElementById("mensaje").style.visibility = "hidden";

    //alert("Es numérico");
    // busca,mos el resultado con validator--------------------------------------------------------
    if (validator.isValid(creditCardNumber)) {
      document.getElementById("numero_tarjeta").innerHTML = creditCardNumber;
      $numeroTarjeta.value = validator.maskify(creditCardNumber);
      $remplazar.outerHTML =
        '<p id="resultado">✔️CORRECTO,la tarjeta es valida</p>';
      document.getElementById("resultado").style.backgroundColor = "#198754";

      // lo esscribo en la tarjeta
    } else {
      document.getElementById("numero_tarjeta").innerHTML = creditCardNumber;
      $numeroTarjeta.value = validator.maskify(creditCardNumber);
      $remplazar.outerHTML =
        '<p id="resultados">❌INCORRECTO,la tarjeta NO es valida</p>';
      document.getElementById("resultados").style.backgroundColor = "#dc3545";
      document.getElementById("mensaje").style.visibility = "visible";
    }

    //------------------------------------------------------------
  } else {
    document.getElementById("card_number").value = "";

    document.getElementById("mensaje").innerHTML =
      " ⚠️Valor no permitido,acepta solo números";
    document.getElementById("mensaje").style.visibility = "visible";
    //alert("No es numérico");
  }
}

//2.VALIDA FECHAS

function validaFecha() {
  let creditCardDate = $fechaVencimiento.value;
  let reg = new RegExp(
    "(((0[123456789]|10|11|12)/(([1][9][0-9][0-9])|([2][0-9][0-9][0-9]))))"
  );

  if (reg.test(creditCardDate)) {
    document.getElementById("mensaje2").style.visibility = "hidden";
    // alert("soy fecha");
    document.getElementById("fecha").innerHTML = creditCardDate;
  } else {
    document.getElementById("card_fecha").value = "";

    document.getElementById("mensaje2").innerHTML =
      " ⚠️Valor No permitido. Ejem: MM/YYYY";

    document.getElementById("mensaje2").style.visibility = "visible";
    //alert("no soy fecha");
  }
}

//NOMBRE

//3.VALIDAR CVV
function validaCcv() {
  let creditCardCcv = $ccv.value;
  let valoresAceptados = /^[1-9]+$/;
  if (creditCardCcv.match(valoresAceptados)) {
    document.getElementById("mensaje3").style.visibility = "hidden";
    document.getElementById("ccv").innerHTML = creditCardCcv;

    //alert("correcto");
  } else {
    document.getElementById("card_ccv").value = "";
    document.getElementById("mensaje3").innerHTML =
      " ⚠️Valor No permitido,acepta solo números";
    document.getElementById("mensaje3").style.visibility = "visible";
    //alert("incorrecto");
  }
}

//4.VALIDAR NOMBRE CLIENTE
function validaNombre() {
  let creditCardName = $nombre.value;
  let valoresAceptados = /[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)/;
  if (creditCardName.match(valoresAceptados)) {
    document.getElementById("mensaje1").style.visibility = "hidden";
    document.getElementById("nombre_cliente").innerHTML = creditCardName;

    //alert("correcto");
  } else {
    document.getElementById("nombre_cliente").value = "";
    document.getElementById("mensaje1").innerHTML =
      " ⚠️Valor invalido.Ejem: Melania Palomino";
    document.getElementById("mensaje1").style.visibility = "visible";
    //alert("incorrecto");
  }
}

function resultado() {
  // declaro variables para manejar otra ventana
  const $cerrar = document.querySelector(".cerrar");
  const $abrir = document.getElementById("validar");
  const $ventana = document.querySelector(".ventana");
  const $ventanaP = document.querySelector(".ventana-contenedor");

  $abrir.addEventListener("click", function () {
    $ventanaP.style.opacity = "1";
    $ventanaP.style.visibility = "visible";
    // para que lo carge de nuevo
    $ventana.classList.toggle("ventana-cerrar");
  });

  $cerrar.addEventListener("click", function () {
    // para que lo carge de nuevo
    $ventana.classList.toggle("ventana-cerrar");

    setTimeout(function () {
      $ventanaP.style.opacity = "0";
      $ventanaP.style.visibility = "hidden";
    }, 500);
    /*
      location.reload();
      $numeroTarjeta.value == "";
      $nombre.value == "";
      $fechaVencimiento.value == "";
      $ccv.value == "";
      */
  });
  //el siguiente es para que cuando haga click fuera de la ventana tambien se cerrara

  window.addEventListener("click", function (e) {
    if (e.target == $ventanaP) {
      $ventana.classList.toggle("ventana-cerrar");

      setTimeout(function () {
        $ventanaP.style.opacity = "0";
        $ventanaP.style.visibility = "hidden";
      }, 500);
    }
    //location.reload();
  });
}
// ----------------llamo al objeto validator------------------

//cod:ascci
//a-z:97-122
//A-Z:65-90
//0-9:48-57
//ñ:164 Ñ:165
//espacio:32
// balla inclinada(/):47

//isNaN(valor)intenta convertir el valor pasado a un número. Si el  valor no se puede convertir, devuelve true; en caso contrario, devuelve false
//isNaN(NaN); //devuelve true
//isNaN("string"); //devuelve true
//isNaN("12"); //devuelve false
//isNaN(12); //devuelve false
/*
  console.log(typeof creditCardNumber);
  console.log(parseInt(creditCardNumber));
  console.log(creditCardNumber);

  console.log(typeof creditCardNumber * 1);
  console.log(parseInt(creditCardNumber * 1));
  console.log(creditCardNumber * 1);
}*/

//onkeyup:ejecuta cuandoun usuario suelta la tecla
//onkeydown:Ejecuta cuando un usuario presiona una tecla
//onkeypress:El evento onkeypress ocurre cuando el usuario presiona una tecla (en el teclado)
//onblur:Ejecute un JavaScript cuando un usuario abandone un campo de entrada
//onfocus:Ejecute un JavaScript cuando un campo de entrada obtenga el foco
//onfocusout:Ejecuta un JavaScript cuando un campo de entrada esté a punto de perder el foco
//oninput:Ejecute un JavaScript cuando un usuario escriba algo en un campo <input>
//oninvalid:Alerta algún texto si un campo de entrada no es válido
//onload:Ejecute un JavaScript inmediatamente después de que se haya cargado una página
//onselect:Ejecute un JavaScript cuando se haya seleccionado algún texto:
//ontoggle:Ejecute un JavaScript cuando se abra o cierre un elemento <details>
//onsubmit: Ejecute un JavaScript cuando se envíe un formulario
//event.key: Obtenga el botón del teclado que se presionó cuando ocurrió un evento clave
//event.target:Obtenga el elemento que desencadenó un evento específico
