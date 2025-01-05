import { PRODUCT_THREE_ITEMS } from '../fixtures/product-items';

describe('상품 목록 페이지', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('페이지에 진입 시, 상품 목록이 표시 된다', () => {
    cy.get('[data-cy="product-item"]').should('be.visible');
    // cy.getByCy('product-item').should('be.visible');
  });

  it('네비게이션바의 Cart 링크를 클릭하면 Cart page로 이동', () => {
    //prepare
    // berforeEach()

    // action
    cy.get('[data-cy="cart-link').click();

    // assertion
    cy.url().should('include', '/cart');
    cy.get('[data-cy="cart-header"]').should('be.visible');
  });

  it('상품 목록의 아이템을 클릭했을 때 상세 페이지로 이동한다', () => {
    // action
    cy.get('[data-cy="product-item"]').first().click();

    // assertion
    cy.url().should('include', '/products/');
  });

  // API Moking
  it('상품목록이 3개면 화면에 3개의 상품이 렌더링 된다', () => {
    // prepare & action
    cy.intercept('/products', PRODUCT_THREE_ITEMS).as('getProducts');
    cy.visit('/');
    cy.wait('@getProducts');

    // assertion
    cy.get('[data-cy="product-item"]').should('have.length', 3);
  });
});
