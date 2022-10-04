const validator = {
  isValid(creditCardNumber) {
    const arrayI = creditCardNumber.split("");
    const array_nuevo = [];
    //alert(arrayI);
    for (let i = 0; i < arrayI.length; i++) {
      // confirm(arrayI[i]);
      if (i % 2 == 0 || i == 0) {
        // Ingresan los que son par y el cero
        let suma = arrayI[i] * 2;
        if (suma >= 10) {
          array_nuevo.push((suma % 10) + Math.trunc(suma / 10));
          console.log(suma);
        } else {
          array_nuevo.push(suma);
        }
      } else {
        array_nuevo.push(`${arrayI[i]}`);
      }
    }
    console.log(array_nuevo);
    // alert(array_nuevo);
    let result = 0;
    let sale;
    for (let x = 0; x < array_nuevo.length; x++) {
      result = result + parseInt(array_nuevo[x]);
    }
    console.log(result);
    // alert(result);
    if (result % 10 === 0) {
      sale = true;
    } else {
      sale = false;
    }
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
