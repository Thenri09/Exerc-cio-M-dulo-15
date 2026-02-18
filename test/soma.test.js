const chai = require("chai");
const expect = chai.expect;
const soma = require("../src/soma");

describe("Função Soma", function () {
    it("Deve somar dois números corretamente", function () {
        expect(soma(2, 3)).to.equal(5);
    });
});
