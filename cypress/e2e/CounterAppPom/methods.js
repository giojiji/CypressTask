/// <reference types="Cypress" />

import selectors from "./selectors";
const selector = new selectors();

export default class methods {
  checkMainPageTitle() {
    selector.mainPageTitle().should("be.visible");
  }

  clickIncrease(num) {
    for (let i = 0; i < num; i++) {
      selector.increase().click();
    }
  }

  clickDecrease(num) {
    for (let i = 0; i < num; i++) {
      selector.decrease().click();
    }
  }

  checkNumber(number) {
    selector
      .number()
      .invoke("text")
      .then((value) => {
        let val = parseInt(value.trim());
        expect(val).to.eq(number);
      });
  }

  clickResset() {
    selector.reset().click();
  }
}
