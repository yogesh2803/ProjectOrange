
//this is the Page object class and we are linking or exporting this class to LoginTest.js
// here we are just defined the methods for elements of usernname, password and login button
class Login
{

    setUserName(username)
    {
        cy.get ("input[placeholder='Username']").type(username)
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password)
    }

    clickLogin()
    {
        cy.get("button[type='submit']").click()
    }

    verifyLogin()
    { 
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    }

     
    

}
    export default Login;