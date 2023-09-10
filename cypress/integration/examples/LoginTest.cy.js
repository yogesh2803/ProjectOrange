

import Login from '../PageObjects/LoginPageClass.cy.js'


describe('pom', ()=>{



    it.only ('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
             
          // create object of Login page
        
          const ln=new Login();   // ln is object reference variable
          
          ln.setUserName("Admin");
          ln.setPassword("admin123");
          ln.clickLogin();
          ln.verifyLogin();
        
        
            })
        
        
        })