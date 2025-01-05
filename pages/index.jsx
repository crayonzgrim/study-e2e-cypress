import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/ProductList';
import BasicLayout from '@/layouts/BasicLayout';
import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p data-cy="counter">{counter}</p>
      <button data-cy="add-button" onClick={increaseCounter}>
        +
      </button>
      <button data-cy="minus-button" onClick={decreaseCounter}>
        -
      </button>
    </div>
  );
}

function ProductPage() {
  const headerTitle = '상품 목록 페이지';

  return (
    <BasicLayout>
      {/* <h1>상품 목록</h1> */}
      {/* <ProductList></ProductList> */}

      <ProductHeader title={headerTitle} />
      <ProductList />
    </BasicLayout>
  );
}

export default ProductPage;
