describe('web-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should be true', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    expect(true).to.equal(true);
  });
});
