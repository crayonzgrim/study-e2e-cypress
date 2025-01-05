import { createCartItem } from '@/api';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './ProductDetail.module.css';

function ProductDetail({ product }) {
  const { imageUrl, price, name, id } = product;
  const router = useRouter();

  const addCart = async () => {
    try {
      const { data } = await createCartItem(product);
      alert(`장바구니에 추가됨`);
      // alert(`${data.name}가 장바구니에 담겼습니다`);
      router.push('/cart');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 data-cy="product-detail">상품 상세 페이지</h1>
      <div className={styles.container}>
        <div>
          <Image
            data-cy="product-image"
            src={imageUrl}
            width={250}
            height={250}
            alt={name}
          />
        </div>
        <div className={styles.description}>
          <p data-cy="product-name">{name}</p>
          <p data-cy="product-price">{price}</p>
          <button onClick={addCart} data-cy="add-to-cart">
            장바구니에 담기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
