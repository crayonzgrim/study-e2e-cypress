describe('상품 상세 페이지', () => {
  beforeEach(() => {
    cy.visit('/products/0');
  });

  it('상품 상세 페이지로 진입하면 상품의 이름과 가격, 이미지가 표시된다', () => {
    //assertion
    cy.get("[data-cy='product-image']").should('be.visible');
    cy.get("[data-cy='product-name']").should('be.visible');
    cy.get("[data-cy='product-price']").should('be.visible');
  });

  it('장바구니에 담기 클릭 시, alert 발생', () => {
    // prepare
    const stub = cy.stub();
    cy.on('window:alert', stub);

    //action
    cy.get("[data-cy='add-to-cart']")
      .click()
      .then(() => {
        // assertion
        expect(stub.getCall(0)).to.be.calledWith('장바구니에 추가됨');
      });
  });

  it.only('장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다', () => {
    // action
    cy.get("[data-cy='add-to-cart']").click();

    // assertion
    cy.url().should('include', '/cart');
  });
});
