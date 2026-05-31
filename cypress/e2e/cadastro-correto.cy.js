describe('Pagina de cadastro', () => {
  it('Deve cadastrar um novo usuario com sucesso', () => {
    cy.Cadastro('Joao Lucas', 'joao.lucas@example.com', 'Senha123', 'Senha123');
    
  }) 
})