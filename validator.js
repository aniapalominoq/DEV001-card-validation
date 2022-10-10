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
};

// al objeto  validator anteponemos export y default  para usarla como objeto por defecto cuando lo importemos.

export default validator;
