// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from "../src/validator";

describe("validator", () => {
  it("debería ser un objeto", () => {
    expect(typeof validator).toBe("object");
  });

  describe("validator.isValid", () => {
    it("debería ser una función", () => {
      expect(typeof validator.isValid).toBe("function");
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid("4083952015263")).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid("79927398713")).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid("1234567890")).toBe(false);
    });
    it('debería retornar false para "378282246310005"', () => {
      expect(validator.isValid("378282246310005")).toBe(true);
    });
  });

  describe("validator.maskify", () => {
    it("debería ser una función", () => {
      expect(typeof validator.maskify).toBe("function");
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify("4556364607935616")).toBe("############5616");
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify("1")).toBe("1");
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify("helloworld")).toBe("######orld");
    });
  });

  describe("validator.franchise", () => {
    it("debería ser una función", () => {
      expect(typeof validator.maskify).toBe("function");
    });

    it('Debería retornar "Visa" para "4556364607935616"', () => {
      expect(validator.franchise("4556364607935616")).toBe("Visa");
    });
    it('Debería retornar "" para "7776364607"', () => {
      expect(validator.franchise("7776364607")).toBe("");
    });
    it('Debería retornar "JCB" para "18003646072541"', () => {
      expect(validator.franchise("18003646072541")).toBe("JCB");
    });
    it('Debería retornar "Diner\'s Club / Carte Blanche" para "3046072545121741"', () => {
      expect(validator.franchise("3046072545121741")).toBe(
        "Diner's Club / Carte Blanche"
      );
    });
    it('Debería retornar "American Express" para "37460728765554"', () => {
      expect(validator.franchise("37460728765554")).toBe("American Express");
    });

    it('Debería retornar "MasterCard" para "55854254857578"', () => {
      expect(validator.franchise("55854254857578")).toBe("MasterCard");
    });
    it('Debería retornar "Discover" para "601152544887441"', () => {
      expect(validator.franchise("601152544887441")).toBe("Discover");
    });
    it('Debería retornar "Diner\'s Club / enRoute" para "2014525484587445"', () => {
      expect(validator.franchise("2014525484587445")).toBe(
        "Diner's Club / enRoute"
      );
    });
    it('Debería retornar "Diner\'s Club / International" para "3612598561225"', () => {
      expect(validator.franchise("3612598561225")).toBe(
        "Diner's Club / International"
      );
    });
    it('Debería retornar "JCB" para "3378541254215444"', () => {
      expect(validator.franchise("3378541254215444")).toBe("JCB");
    });

    it('Debería retornar "Diner\'s Club / Carte Blanche" para "38251254896356221"', () => {
      expect(validator.franchise("38251254896356221")).toBe(
        "Diner's Club / Carte Blanche"
      );
    });

    it('Debería retornar "JCB" para "21318548754296"', () => {
      expect(validator.franchise("21318548754296")).toBe("JCB");
    });
  });
});
