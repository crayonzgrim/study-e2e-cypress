describe('홈페이지 테스트 코드', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it(`"/" 로 진입하면 페이지가 정상적으로 표시 됨`, () => {
    cy.visit('http://localhost:3000');
  });
});
