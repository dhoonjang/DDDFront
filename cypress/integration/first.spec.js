describe("My First Test", function() {
  it("First Page Action", function() {
    cy.visit("/");

    cy.get(".iddakdae-logo").click();
    cy.get(".ikakao-login-btn").click();

    cy.get('label[for="id_email_2"]').click();
    cy.get("#id_email_2").type("dhoonjang@gmail.com");
    cy.get('label[for="id_password_3"]').click();
    cy.get("#id_password_3").type("wkdgkgk123");

    cy.get(".wrap_btn > button.btn_confirm.submit").click();
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
