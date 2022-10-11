// aqui hacemos el objeto validator

const validator = {
  isValid(creditCardNumber) {
    const arrayI = creditCardNumber.split("");
    const array_nuevo = [];
    //alert(arrayI);
    //console.log(`recibo del ${arrayI}`);

    for (let i = 0; i < arrayI.length; i++) {
      // confirm(arrayI[i]);
      if (i % 2 === 1) {
        // Ingresan los que son de posicion impar y el cero
        let suma = parseInt(arrayI[i]) * 2;
        if (suma >= 10) {
          array_nuevo.push(suma - 9);
        } else {
          array_nuevo.push(suma);
        }
        //console.log(`digito=${suma}:suma=${suma - 9}`);
      } else {
        array_nuevo.push(parseInt(arrayI[i]));
      }
    }
    // console.log(`arreglo nuevo ${array_nuevo}`);

    let result = 0;
    let sale;

    for (let x = 0; x < array_nuevo.length; x++) {
      result = result + array_nuevo[x];
    }
    //console.log(` es:${result}`);
    sale = result % 10 === 0 ? true : false;

    return sale;
  },

  maskify(creditCardNumber) {
    const cardValue = creditCardNumber.split("");
    const arr = [];
    for (let i = 0; i < cardValue.length; i++) {
      if (cardValue.length - i > 4) {
        arr.push("#");
      } else {
        arr.push(cardValue[i]);
      }
    }

    //alert(cardValue);
    return arr.join("");
  },
  franchise(creditCardNumber) {
    //Diner's Club / Carte Blanche 300 301 302 303 304 305 38
    //Diner's Club / enRoute 2014 2149
    //Diner's Club / International 36
    //JCB 1800 2131 31 32 33 35 39
    //American Express 34 37
    //Visa 4
    //MasterCard 51 52 53 54 55
    //Discover 6011
    let issuer;
    //ejemplo:1800122521
    let numero1 = creditCardNumber.charAt(0); // 1
    let numero2 = creditCardNumber.charAt(1); //8
    let numero12 = creditCardNumber.substring(1, 3); //80
    let numero123 = creditCardNumber.substring(1, 4); //800
    //console.log(creditCardNumber, numero1, numero2, numero12, numero123);

    if (numero1 == "3") {
      //empieza con 3
      if (numero2 == "4" || numero2 == "7") {
        issuer = "American Express";
      } else if (numero2 == "6") {
        issuer = "Diner's Club / International";
      } else if (numero2 == "8") {
        issuer = "Diner's Club / Carte Blanche";
      } else if (
        numero2 == "1" ||
        numero2 == "2" ||
        numero2 == "3" ||
        numero2 == "3" ||
        numero2 == "5" ||
        numero2 == "9"
      ) {
        issuer = "JCB";
      } else if (
        numero12 == "01" ||
        numero12 == "02" ||
        numero12 == "03" ||
        numero12 == "04" ||
        numero12 == "05"
      ) {
        issuer = "Diner's Club / Carte Blanche";
      } else {
        issuer = "";
      }
      //empieza con 4
    } else if (numero1 == "4") {
      issuer = "Visa";
      //empieza con 5
    } else if (numero1 == "5") {
      if (
        numero2 == "1" ||
        numero2 == "2" ||
        numero2 == "3" ||
        numero2 == "4" ||
        numero2 == "5"
      ) {
        issuer = "MasterCard";
      } else {
        issuer = "";
      }
      //cuando empieza con 2
    } else if (numero1 == "2") {
      if (numero123 == "014" || numero123 == "149") {
        issuer = "Diner's Club / enRoute";
      } else if (numero123 == "131") {
        issuer = "JCB";
      } else {
        issuer = "";
      }
      //empieza con 1
    } else if ((numero1 === "1") & (numero123 === "800")) {
      //console.log(numero123);
      issuer = "JCB";
    }
    //empieza con 6
    else if ((numero1 == "6") & (numero123 == "011")) {
      issuer = "Discover";
    } else {
      issuer = "";
    }
    return issuer;
  },
};

// al objeto  validator anteponemos export y default  para usarla como objeto por defecto cuando lo importemos.

export default validator;
