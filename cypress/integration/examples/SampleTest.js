 /// <reference types="Cypress" />

 describe('My first TestSuite',function()
 {
     it('My first TestCase',function(){
         
         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // selenium get hit URL in the browser, cypress get acts like findelement of selenium
        
 
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //Parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('sf')
        })
         
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
         
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
            cy.wrap($el).find('button').click()
        }
        })
         
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
 
        
 
 //fixture
 
     }
 )
 })
 
 