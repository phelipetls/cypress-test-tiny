describe('page', () => {
  it('works', () => {
    cy.intercept(
      "http://ipeadata2-homologa.ipea.gov.br/api/v1/Metadados('BM12_TJOVER12')",
      {}
    ).as("getMetadata");

    cy.visit('http://ipeadata-explorer.surge.sh/serie/BM12_TJOVER12')

    cy.wait("@getMetadata")
  })
})
