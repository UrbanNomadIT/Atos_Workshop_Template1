/* global given, then, and */
const variables = {
  // REGISTER
  Facebook: "http://facebook.com/",
};

Given("I am in the page {string}", Facebook => {
  Facebook = variables[Facebook];
  cy.visit(Facebook);
  cy.wait(2000);
});

Then("I click {string}", clickEvent => {
  clickEvent = variables[clickEvent];
  cy.xpath(clickEvent).click({ force: true });
  cy.wait(1000);
});

When("I click {string}", clickEvent => {
  clickEvent = variables[clickEvent];
  cy.xpath(clickEvent).click({ force: true });
  cy.wait(1000);
});

And("I click {string}", clickEvent => {
  clickEvent = variables[clickEvent];
  cy.xpath(clickEvent).click({ force: true });
  cy.wait(1000);
});

Cypress.on(
  "uncaught:exception",
  (err, runnable) =>
    // returning false here prevents Cypress from
    // failing the test
    false
);
