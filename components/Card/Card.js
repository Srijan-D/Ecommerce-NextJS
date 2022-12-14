import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';
import { useCart } from '/context/Context';

const Card = ({ products }) => {
  const {
    cart,
    addToCart,
    reduceFromCart,
    removeFromCart,
    clearCart,
    isInCart,
    itemQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  return (
    <div className={styles.containerMain}>
      {products.products.map((product) => {
        return (
          <div key={product.id} className={styles.shopCard}>
            <Link href={`/products/${product.id}`}>
              {/* need to wrap the content of link tag in a jsx fragment or div */}
                <div className={styles.title}>{product.title}</div>
                <div className={styles.desc}>{product.category}</div>
                <div className={styles.slider}>
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={300}
                    height={280}
                  />
                </div>
            </Link>

            <div className={styles.cta}>
              <div className={styles.price}>${product.price}</div>
              {isInCart(product.id) ? (
                <>
                  <button
                    className={styles.quantityValue}
                    onClick={() => reduceFromCart(product.id)}
                  >
                    -
                  </button>
                  <span className={styles.value}>
                    {itemQuantity(product.id)}
                  </span>
                  <button
                    className={styles.quantityValue}
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </>
              ) : (
                <button
                  className={styles.btn}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                  <span className={styles.bg} />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
