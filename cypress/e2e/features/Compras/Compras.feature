Feature: Compras
Eu como QA
Desejo comprar na amazon
Para receber meu protudo 

  Scenario: Selecao de Produto - Validando Processo ate p carrinho de compras
    Given esteja no site amazon
    When pesquiso livros para comprar
    And valido a imagem via API
    Then valido quantidade produtos no carrinho de compras
