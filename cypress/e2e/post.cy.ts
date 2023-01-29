/// <reference path="../support/index.d.ts" />

describe('Post Page', () => {
    it('Should render single post sections', () => {
        cy.visit('/posts/20/blog-post-20');
        cy.shouldRenderSinglePostSections();
    });

    it('Should add new comment', () => {
        cy.visit('/posts/20/blog-post-20');
        cy.createComment()
        cy.findAllByText(/this is a comment/i);
        cy.findAllByText(/joao/i);
    });

    it('Should edit comment', () => {
        cy.visit('/posts/20/blog-post-20');
        cy.editComment()
        cy.findByText(/this is a comment edited/i);
    });

    it('Should delete comment', () => {
        cy.visit('/posts/20/blog-post-20');
        cy.deleteComment();
        cy.findByText(/this is a comment edited/i).should('not.exist');
    });
});