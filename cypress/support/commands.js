// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import '@testing-library/cypress/add-commands';

import "cypress-mailosaur"

const password = Cypress.env("password")
const random = String(Math.floor(Math.random() * 1000))
const email = random + "@giloshz3.mailosaur.net"
const invalidPassword = Cypress.env("invalidPassword")
const invalidEmail = Cypress.env("invalidEmail")

Cypress.Commands.add("WithoutAgreeTerms", (password) => {

    cy.visit("https://miro.com")
    cy.get('[class="Box--8euad8 IconBase--1e6md70 SwitcherIcon--1v5mzlj eaZWWz"]').first().click({ force: true })
    cy.get('[class="Box--8euad8 IconBase--1e6md70 SwitcherIcon--1v5mzlj eaZWWz"]').first().click({ force: true })
    cy.contains('English').click()
    cy.contains("Sign up free").click()
    cy.get('[name="signup[name]"]').type('testing');
    cy.get('[type="email"]').type("testingMiro@giloshz3.mailosaur.net", { log: false })
    cy.get('[type="password"]').type(password, { log: false })
    cy.get("button[type='submit']").click({ force: true })
})

Cypress.Commands.add("LoginWithoutSignup", (email, password) => {

    cy.visit("https://miro.com")
    cy.get('[class="Box--8euad8 IconBase--1e6md70 SwitcherIcon--1v5mzlj eaZWWz"]').first().click({ force: true })
    cy.get('[class="Box--8euad8 IconBase--1e6md70 SwitcherIcon--1v5mzlj eaZWWz"]').first().click({ force: true })
    cy.contains('English').click()
    cy.contains("Sign up free").click()
    cy.get('[name="signup[name]"]').type('testing', { log: false })
    cy.get('[type="email"]').type(email, { log: false });
    cy.get('[type="password"]').type(password, { log: false })
    cy.get('[class="mr-checkbox-1__icon"]').eq(0).click({ force: true })
        // cy.get('[class="mr-checkbox-1__icon"]').eq(1).click()
    cy.get("button[type='submit']").click({ force: true })
})

Cypress.Commands.add("InvalidCredentials", (invalidEmail, invalidPassword) => {

    cy.visit("https://miro.com")
    cy.get('[class="Box--8euad8 IconBase--1e6md70 SwitcherIcon--1v5mzlj eaZWWz"]').first().click({ force: true })
    cy.get('[class="Box--8euad8 IconBase--1e6md70 SwitcherIcon--1v5mzlj eaZWWz"]').first().click({ force: true })
    cy.contains('English').click()
    cy.contains("Sign up free").click()
    cy.get('[name="signup[name]"]').type('testing', { log: false })
    cy.get('[type="email"]').type(invalidEmail, { log: false });
    cy.get('[type="password"]').type(invalidPassword, { log: false })
    cy.get('[class="mr-checkbox-1__icon"]').eq(0).click({ force: true })
        // cy.get('[class="mr-checkbox-1__icon"]').eq(1).click()
    cy.get("button[type='submit']").click({ force: true })
})