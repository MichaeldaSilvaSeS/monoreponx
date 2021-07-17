import { getGreeting } from '../support/app.po';

describe('workflow', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.get('[name=senha]').type('michael');
    cy.get('[name=usuario]').type('senha');
    cy.get('.ui-login-button').click();

    // Function helper example, see `../support/app.po.ts` file
    cy.get('h5').contains('OLA2');
  });
});
