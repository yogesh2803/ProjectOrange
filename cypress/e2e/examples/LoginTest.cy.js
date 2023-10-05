

import Login from '../PageObjects/LoginPageClass.cy.js'


describe('FirstSuite', ()=>{

  // Test 1 
it('Verify Login Page - Positive',() => {

  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  cy.title().should('eq','OrangeHRM')

})

  // Test 2
  it('Verify Login Page - Negative',() => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should('eq','OrangeHRM123')
  
  })

  // Test 3

  it ('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
             
          // create object of Login page
        
          const ln=new Login();   // ln is object reference variable
          
          ln.setUserName("Admin");
          ln.setPassword("admin123");
          ln.clickLogin();
          ln.verifyLogin();
        
        
            })
        
        
        })