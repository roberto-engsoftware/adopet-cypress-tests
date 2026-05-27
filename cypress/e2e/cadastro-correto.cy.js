describe('Pagina de cadastro', () => {
  it('Deve cadastrar um novo usuario com sucesso', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Joao Lucas');
    cy.get('[data-test="input-email"]').type('joao.lucas@example.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();

  }) 
})