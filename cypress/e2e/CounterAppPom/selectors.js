/// <reference types="Cypress" />

export default class selectors {
  mainPageTitle() {
    return cy.contains("h1", "CounterApp");
  }

  increase() {
    return cy.xpath("//button[normalize-space()='+1']");
  }

  decrease() {
    return cy.xpath("//button[normalize-space()='-1']");
  }

  reset() {
    return cy.contains("button", "Reset");
  }

  number() {
    return cy.get("h2");
  }
}
