/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/');
    cy.shouldRenderHomeSections();
  });

  it('should change translations when selecting dropdown language', () => {
    cy.visit('/');
    cy.findByRole('heading', { name: /The most recent posts/i });
    cy.shouldRenderLanguageDropdown();
    cy.findByRole('heading', { name: /Os Posts Mais Recentes/i });
  });

  it('should change view layout when clicking grid/list button', () => {
    cy.visit('/');
    cy.findByRole('button', { name: /list/i }).click();
    cy.wait(500);
    cy.findByRole('button', { name: /grid/i });
  });

  it('should load more posts when clicking load more button', () => {
    cy.visit('/');
    cy.findByRole('button', { name: /load more posts/i }).click();
    cy.getByDataCy('post-preview').should('have.length.at.least', 5);
    cy.wait(500);
    cy.getByDataCy('post-preview').should('have.length.at.least', 10);
  });

  it('should load search results', () => {
    cy.visit('/');
    cy.findByRole('textbox', { name: /Search posts/i }).type('Natum');
    cy.wait(2000);
    cy.getByDataCy('post-preview').contains('Natum');
  });
});
