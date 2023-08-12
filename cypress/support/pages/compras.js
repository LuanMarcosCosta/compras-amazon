/// <reference types="cypress" />


export default {

   //Home
   navPrincipal: '#navbar-main',
   campoPesquisa: '#twotabsearchtextbox',
   botaoPesquisar: '#nav-search-submit-button',

   // Pesquisa de livros, melhorar! 
   livro: '[data-asin="8578607597"] > .sg-col-inner',
   tituloLivro: '#productTitle',

   // Livro
   quantidadeLivro: '#quantity',
   botaoAdicionaCarrinho: '#add-to-cart-button',
   tituloSucessoAdicionar: '#NATC_SMART_WAGON_CONF_MSG_SUCCESS',
   botaoIrParaCarrinho: '#sw-gtc',

   //Carrinho 
   produtoCarrinho: '#activeCartViewForm',


   homeAmazon() {
      cy.get(this.navPrincipal).should('be.visible')
      cy.get(this.campoPesquisa).should('be.visible')
      cy.get(this.botaoPesquisar).should('be.visible')

      
   },

   compraLivros() {
      cy.get(this.campoPesquisa)
         .get(this.campoPesquisa).type('a ultima noite do mundo cs lewis');

      cy.get(this.botaoPesquisar)
         .get(this.botaoPesquisar).should('be.visible')

      cy.get(this.botaoPesquisar).click()

      cy.get(this.livro)
         .get(this.livro).should('be.visible')
         .get(this.livro).click()

      cy.get(this.tituloLivro).should('be.visible')

      cy.get(this.quantidadeLivro).select('3')

   },

   validaCompra() {
      cy.get(this.botaoAdicionaCarrinho).click()

      cy.get(this.tituloSucessoAdicionar)
         .get(this.tituloSucessoAdicionar).should('be.visible')

      cy.get(this.botaoIrParaCarrinho).click()

      cy.get(this.produtoCarrinho)
         .get(this.produtoCarrinho).should('be.visible')
   },


   getImagem() {
      // Pega a imagem no site da Amazon e salva numa pasta para conferência 
      cy.request({
         url: 'https://m.media-amazon.com/images/I/914xMrEylUL._AC_AA180_.jpg', 
         encoding: 'base64', // Faz o Cypress interpretar a resposta como dados binários
       }).then(response => {
         cy.writeFile('cypress/fixtures/imagem.png', response.body, 'base64');
      
       });
   }

}



