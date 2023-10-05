
import Login from '../PageObjects/LoginPageClass.cy.js'


describe("Test case for Dashboard panel",() => {

    
        

it("Verify that user is able to login ", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       
        const ln=new Login();   // ln is object reference variable
          
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clickLogin();
        ln.verifyLogin();
    
  
})
it("Verify that user Search box is working", ()=>{ 

    

      
       
       
        

       

})

})