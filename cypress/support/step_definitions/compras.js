/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import compras from "../pages/compras"

Given("esteja no site amazon", () =>{
    compras.homeAmazon()
}),

When("pesquiso livros para comprar", () => {
    compras.compraLivros()
}),

When("valido a imagem via API", () =>{
    compras.getImagem()
 }),

Then("valido quantidade produtos no carrinho de compras", () =>{
   compras.validaCompra()
})


