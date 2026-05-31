describe('Pagina de login', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode: 400, }).as('stubPost')
    });

  it('Deve exibir mensagens de erro para credenciais inválidas', () => {   
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
  });
it('Deve falhar mesmos que os campos sejam preechidos corretamente', () => {

    cy.login('joao.lucas@example.com', 'Senha123');
    cy.wait('@stubPost').its('response.statusCode').should('eq', 400);
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
      });});