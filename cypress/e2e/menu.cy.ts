describe("menu page spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("redirects to menu page", () => {
    cy.url().should("include", "/menu");
  });

  it("clicking on sub nav links takes me to part of menu", () => {
    cy.url().should("include", "/menu");

    cy.get('[data-cy="pizza-link"]').click();
    cy.url().should("include", "#pizza");

    cy.get('[data-cy="sides-link"]').click();
    cy.url().should("include", "#sides");

    cy.get('[data-cy="desserts-link"]').click();
    cy.url().should("include", "#desserts");

    cy.get('[data-cy="drinks-link"]').click();
    cy.url().should("include", "#drinks");
  });

  it("check allergy info and click on link", () => {
    cy.get("[data-cy='allergy-content'").should("not.visible");

    cy.get("[data-cy='allergy-open-button'").click();

    cy.get("[data-cy='allergy-content'").should("be.visible");

    cy.get("[data-cy='allergy-content']")
      .find("a")
      .first()
      .should("have.attr", "target", "_blank")
      .and(
        "have.attr",
        "href",
        "https://corporate.dominos.co.uk/Media/Default/Corporate%20Responsibility/Food/Dominos%20Ingredients%20and%20Allergens.pdf?v=7505"
      );
  });

  it("click of allergy info, read it and close it", () => {
    cy.get("[data-cy='allergy-content'").should("not.visible");

    cy.get("[data-cy='allergy-open-button'").click();

    cy.get("[data-cy='allergy-content'").should("be.visible");

    cy.get("[data-cy='allergy-open-button'").click();

    cy.get("[data-cy='allergy-content'").should("not.visible");
  });

  it("pizza speciality pizzas dietary modal info, open and close", () => {
    const dietaryButtons = [
      { button: "vegetarian-dietary-button", name: "Vegetarian" },
      { button: "plant-based-dietary-button", name: "Plant-Based" },
      { button: "gluten free-dietary-button", name: "Gluten free" },
    ];

    dietaryButtons.forEach(({ button, name }) => {
      cy.get("[data-cy='pizza-link']").click();
      cy.get("[data-cy='header_title']").should("not.exist");
      cy.get(
        `[data-cy='speciality pizzas-sub-section'] [data-cy='${button}']`
      ).click();
      cy.get("[data-cy='header_title']").should("exist").and("be.visible");
      cy.get("[data-cy='header_title']").should("contain.text", name);
      cy.get("[data-cy='dietary-modal-sm-close-btn']").click();
      cy.get("[data-cy='header_title']").should("not.exist");
    });
  });

  it.only("check pizza extra info modal", () => {
    cy.get("[data-cy='pizza-link']").click();
    cy.get("[data-cy='menu-item-info-btn']").first().click();
  });
});
