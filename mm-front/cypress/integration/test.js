describe('Test', () => {
    it('Selects the first phone and go back to the list', function() {
        cy.server();
        cy.route('/phones').as('getPhones');
        cy.visit('/');
        cy.wait('@getPhones');
        cy.get('#phone-detail-0').within(() => {
            cy.get('.mobile-img').click();
        });
        cy.wait(500);
        cy.get('.back-button').click();
    });
});