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
    let anyString = creditCardNumber;

    const arra4 = ["1800", "2014", "2131", "2149", "6011"];
    const arra3 = ["300", "301", "302", "303", "304", "305"];
    const arra2 = ["34", "36", "37", "38", "51", "52", "53", "54", "55"];
    const arra1 = ["3", "4"];

    //para los que empiezan en 4 cifras 1800 2014 2131 2149
    for (let index = 0; index < arra4.length; index++) {
      if (anyString.substring(0, 4) === arra4[index]) {
      }
    }

    //para los que empiezan en 3 cifras 300-305

    //para los que  empiezan en dos cifras34 36 37 38 51 52 53 54 55
    //para los que empiezan en una cifra 3 4
  },
};
// al objeto  validator anteponemos export y default  para usarla como objeto por defecto cuando lo importemos.

validator.isValid("4213550123670241");
export default validator;
