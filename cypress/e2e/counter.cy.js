describe('카운터 컴포넌트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('페이지에 진입하면 카운터 컴포넌트가 정상적으로 표시됨 - 0이 표시  ', () => {
    cy.getByCy('counter').contains(0);
  });

  it('플러스 버튼을 누르면 카운터가 1이 증가된다', () => {
    cy.getByCy('add-button').contains('+');
    cy.getByCy('add-button').click();
    cy.getByCy('counter').contains(1);
  });

  it('마이너스 버튼을 누르면 카운터가 1 감소 된다', () => {
    cy.getByCy('minus-button').contains('-');
    cy.getByCy('minus-button').click();
    cy.getByCy('counter').contains(-1);
  });
});
