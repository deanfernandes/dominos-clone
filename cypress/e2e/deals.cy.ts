describe("deals page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("a", "Deals").click();
  });

  it("scroll down to deals and sort alphabetical ascending order", () => {
    cy.get("[data-cy='sub-section-header-collect deals']")
      .scrollIntoView()
      .should("be.visible");
    cy.get("[data-cy='sorting-button']").click();
    cy.get("[data-cy='sort-asc-button']").click();
    cy.get("[data-cy='deal-card-title']").then(
      ($items: JQuery<HTMLElement>) => {
        const texts: string[] = $items
          .toArray()
          .map((el: HTMLElement) => el.textContent?.trim() || "");

        const sorted: string[] = [...texts].sort((a: string, b: string) =>
          a.localeCompare(b)
        );

        expect(texts).to.deep.equal(sorted);
      }
    );
  });

  it("scroll down to deals and sort alphabetical descending order", () => {
    cy.get("[data-cy='sub-section-header-collect deals']")
      .scrollIntoView()
      .should("be.visible");

    cy.get("[data-cy='sorting-button']").click();
    cy.get("[data-cy='sort-desc-button']").click();

    cy.get("[data-cy='deal-card-title']").then(
      ($items: JQuery<HTMLElement>) => {
        const texts: string[] = $items
          .toArray()
          .map((el: HTMLElement) => el.textContent?.trim() || "");

        const sortedDescending: string[] = [...texts].sort(
          (a: string, b: string) => b.localeCompare(a)
        );

        expect(texts).to.deep.equal(sortedDescending);
      }
    );
  });

  it("scroll down to deals and filter only pizza deals", () => {
    cy.get("[data-cy='sub-section-header-collect deals']")
      .scrollIntoView()
      .should("be.visible");

    cy.get("[data-cy='filters-button']").click();
    cy.get("[data-cy='filter-button-pizza']").click();
  });
});
