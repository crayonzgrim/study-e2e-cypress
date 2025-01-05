module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended'
  ],
  plugins: ['prettier', 'unused-imports', 'cypress'],
  rules: {
    // Cypress lint
    'cypress/unsafe-to-chain-command': 'off',

    // 선언되지 않은 변수 또는 임포트 구문 정리 규칙
    'no-undef': 'error',
    'unused-imports/no-unused-imports': 'error'
  }
};
