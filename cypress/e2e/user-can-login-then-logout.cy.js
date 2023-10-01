describe("User can login to system", () => {
  //positive test case
  it("user can login with valid username and passord", () => {
    //arrange
    cy.visit("http://localhost:8000/");
    cy.get(":nth-child(2) > .form-control").clear("s");
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    cy.get(":nth-child(3) > .form-control").clear();
    cy.get(":nth-child(3) > .form-control").type("password");
    cy.get(".btn").click();
    cy.get(".nav-link > .d-sm-none").should("have.text", "Hi, SuperAdmin");
    cy.get(".navbar-right > :nth-child(2) > .nav-link").click();
    cy.get(".text-danger").click();
    cy.get("h4").should("be.visible");
    cy.get("h4").should("have.text", "Login");
    cy.get(".simple-footer").should("contain", "Copyright © Stisla 2018");
  });
});
