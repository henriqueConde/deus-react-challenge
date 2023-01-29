/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args);
});

Cypress.Commands.add('shouldRenderLanguageDropdown', () => {
  cy.getByDataCy('header').within(() => {
    cy.findByRole('heading', { name: /Home/i });
    cy.getByDataCy('lang-dropdown').select('pt');
    cy.wait(500);
  });
});

Cypress.Commands.add('shouldRenderHeader', () => {
  cy.getByDataCy('header').within(() => {
    cy.findByRole('heading', { name: /Home/i });
    cy.getByDataCy('lang-dropdown');
  });
});

Cypress.Commands.add('shouldRenderHomeSections', () => {
  cy.shouldRenderHeader();
  cy.findByRole('heading', { name: /The most recent posts/i });
  cy.findByRole('heading', { name: /The most recent posts/i });
  cy.findByRole('button', { name: /list/i });
  cy.findByLabelText(/Search posts/i);
  cy.findByRole('textbox', { name: /Search posts/i });
  cy.getByDataCy('posts-list');
  cy.findAllByRole('button', { name: /read article/i });
  cy.findByRole('button', { name: /load more posts/i });
});

Cypress.Commands.add('shouldRenderSinglePostSections', () => {
  cy.shouldRenderHeader();
  cy.getByDataCy('post-wrapper');
  cy.findByRole('heading', { name: /Blog post #20/i });
  cy.getByDataCy('post-content');
  cy.findByLabelText(/make a comment/i);
  cy.findByRole('textbox', { name: /make a comment/i });
  cy.findByLabelText(/name/i);
  cy.findByRole('textbox', { name: /name/i });
  cy.getByDataCy('comment-wrapper');
  cy.findByRole('button', { name: /submit comment/i });
  cy.findAllByRole('button', { name: /delete/i });
  cy.findAllByRole('button', { name: /edit/i });
  cy.findAllByRole('button', { name: /reply/i });
});

Cypress.Commands.add('createComment', () => {
  cy.findByRole('textbox', { name: /make a comment/i }).type(
    'this is a comment'
  );
  cy.findByRole('textbox', { name: /name/i }).type('Joao');
  cy.findByRole('button', { name: /submit comment/i }).click();
  cy.wait(2000);
});

Cypress.Commands.add('editComment', () => {
  cy.findAllByRole('button', { name: /edit/i }).first().click();
  cy.getByDataCy('edit-comment-form-textarea').type(' edited');
  cy.get(
    '[data-cy="edit-comment-form"] > [data-cy="comment-submit-btn"]'
  ).click();
});

Cypress.Commands.add('deleteComment', () => {
  cy.findAllByRole('button', { name: /delete/i }).first().click();
  cy.findAllByRole('button', { name: /confirm/i }).first().click();      
  cy.wait(2000);
});