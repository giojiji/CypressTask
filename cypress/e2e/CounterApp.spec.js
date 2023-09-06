/// <reference types="Cypress" />

import methods from "./CounterAppPom/methods";
const method = new methods();

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Check main page Title", () => {
    method.checkMainPageTitle();
  });

  it("increase the number by one", () => {
    method.checkNumber(10);
    method.clickIncrease(1);
    method.checkNumber(11);
  });

  it("decrease the number by one", () => {
    method.checkNumber(10);
    method.clickDecrease(1);
    method.checkNumber(9);
  });

  it("reset increased number", () => {
    method.clickIncrease(5);
    method.checkNumber(15);
    method.clickResset();
    method.checkNumber(10);
  });

  it("reset decreased number", () => {
    method.clickDecrease(5);
    method.checkNumber(5);
    method.clickResset();
    method.checkNumber(10);
  });

  it("check if each click inceases by one", () => {
    method.checkNumber(10);
    method.clickIncrease(1);
    method.checkNumber(11);
    method.clickIncrease(1);
    method.checkNumber(12);
  });

  it("check if each click decreases by one", () => {
    method.checkNumber(10);
    method.clickDecrease(1);
    method.checkNumber(9);
    method.clickDecrease(1);
    method.checkNumber(8);
  });

  it("check if value can be 0", () => {
    method.checkNumber(10);
    method.clickDecrease(10);
    method.checkNumber(0);
  });

  it("check if value can be negative", () => {
    method.checkNumber(10);
    method.clickDecrease(11);
    method.checkNumber(-1);
  });

  it("after increase and decrease number should be the same", () => {
    method.checkNumber(10);
    method.clickIncrease(1);
    method.clickDecrease(1);
    method.checkNumber(10);
  });

  it("after decrease and increase number should be the same", () => {
    method.checkNumber(10);
    method.clickDecrease(1);
    method.clickIncrease(1);
    method.checkNumber(10);
  });

  it("check if value can be more than 100", () => {
    method.checkNumber(10);
    method.clickIncrease(91);
    method.checkNumber(101);
  });
});
