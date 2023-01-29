/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByDataCy(selector: string): Chainable<JQuery<HTMLElement> | Element>;
    shouldRenderLanguageDropdown(): Chainable<Element>;
    shouldRenderHomeSections(): Chainable<Element>;
    shouldRenderHeader(): Chainable<Element>;
    shouldRenderSinglePostSections(): Chainable<Element>;
    createComment(): Chainable<Element>;
    editComment(): Chainable<Element>;
    deleteComment(): Chainable<Element>;
  }
}
