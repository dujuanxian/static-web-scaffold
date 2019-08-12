describe('Index page', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:1234/`);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should render App', () => {
    cy.screenshot('index');
  });
});
