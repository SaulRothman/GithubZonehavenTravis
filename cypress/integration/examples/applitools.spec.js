/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/window')
  })

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Kitchen Sink')
  })
})
describe("AppTest", () => {

  it(`ultraFastTest`, function () {
      // Navigate to the url we want to test
      // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
      // but then change the above URL to https://demo.applitools.com/index_v2.html
      // (for the 2nd run)
      cy.visit('https://demo.applitools.com');

      // Call Open on eyes to initialize a test session
      cy.eyesOpen({
          appName: 'Demo Apps',
          testName: 'Ultrafast grid demo',
      })

      // check the login page with fluent api, see more info here
      // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
      cy.eyesCheckWindow({
          tag: "Login Window",
          target: 'window',
          fully: true
      });

      cy.get('#log-in').click()

      // Check the app page
      cy.eyesCheckWindow({
          tag: "App Window",
          target: 'window',
          fully: true
      });

      // Call Close on eyes to let the server know it should display the results
      cy.eyesClose()
  });

});