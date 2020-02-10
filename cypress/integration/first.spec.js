describe("My First Test", function() {
  it("First Page Action", function() {
    cy.visit("/");

    cy.get(".iddakdae-logo").click();
    cy.get(".ikakao-login-btn").click();
  });

  it("Join Page Action", function() {
    cy.get(".student-area > button").click();
    cy.get(".student-form > input").type("성남고등학교");
    cy.get(".submit").click();
  });

  it("Category Page Action", function() {
    cy.get(".category-item")
      .should("have.length", 5)
      .first()
      .click();
  });
});
