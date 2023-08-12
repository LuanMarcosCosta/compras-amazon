Feature: Fazer um pedido de comida
  Eu como QA
  Desejo realizar pedidos de comida
  Para validar a funcionalidade

  Scenario: Realizar Cadastro Completo
    Given que estou no aplicativo de entrega de comida
    When me cadastro preenchendo os campos corretamente
    Then vejo cadastro realizado com sucesso

  Scenario: Fazer um pedido
    Given que estou no aplicativo de entrega de comida
    When escolho um restaurante disponível
    And adiciono o item ao meu pedido
    And forneço meu endereço para entrega
    And confirmo o pedido
    Then vejo uma confirmação de pedido
    But o estado do meu pedido deve ser "Pendente"

  Scenario: Fazer um pedido sem um item
    Given que estou no aplicativo de entrega de comida
    When escolho um restaurante disponível
    And não seleciono nenhum item do menu
    And forneço meu endereço para entrega
    And confirmo o pedido
    Then vejo mensagem de erro indicando que devo selecionar ao menos um item

  Scenario: Fazer um pedido sem fornecer o endereço de entrega
    Given que estou no aplicativo de entrega de comida
    When escolho um restaurante disponível
    And adiciono o item ao meu pedido
    And não forneço meu endereço de entrega
    And confirmo o pedido
    Then devo ver uma mensagem de erro indicando que devo fornecer um endereço de entrega

  Scenario: Fazer pedido irreal
    Given que estou no aplicativo de entrega de comida
    When escolho um restaurante disponível
    And adiciono 999 itens ao meu pedido
    And forneço endereço
    And confirmo pedido
    Then vejo mensagem de erro por número irreal no pedido

  Scenario: Fazer pedido com cupom promocional
    Given que estou no aplicativo de entrega de comida
    When escolho o restaurante "True-Cupom"
    And adciono 3 itens para habilitar o Cupom
    And aplico o cupom
    And forneço endereço
    And confirmo pedido
    Then vejo valor total do pedido com desconto

  Scenario: Validar Indisponibilidades
    Given que estou no aplicativo de entrega de comida
    When exploro o aplicativo no turno da manhã
    Then vejo restaurantes com coloração "cinza" e mensagem que indique estar fechado
    But posso encontrar itens de restaurantes como indisponíveis

  Scenario: Validar Integração com WhatsApp
    Given que estou no aplicativo de entrega de comida
    When configuro a permissão de receber atualização por WhatsApp
    And escolho um restaurante disponível
    And adiciono o item ao meu pedido
    And forneço meu endereço para entrega
    And confirmo o pedido
    Then recebo uma confirmação de pedido pelo WhatsApp

  Scenario: Validar formas de pagamento
    Given que estou no aplicativo de entrega de comida
    When escolho um restaurante disponível
    And adiciono o item ao meu pedido
    And forneço meu endereço para entrega
    And confirmo o pedido selecionando pagamento em cartão de credito
    Then recebo confirmação de pedido realizado com sucesso
    But posso selecionar as opções de pagamento no PIC, PicPay ou Cartão de Debito

  Scenario: Validar Filtros nos restaurantes
    Given que estou no aplicativo de entrega de comida
    When clico na opção de filtros e seleciono alguns
    Then vejo listagem de restaurantes de acordo com filtros realizados

