import ProductPage from '../../components/ProductPage/ProductPage';
import Navbar from '../../components/Navbar/Navbar';

const product = ({ product }) => {
  return (
    <>
      <ProductPage product={product} />
    </>
  );
};

export default product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://dummyjson.com/products/${params.productId}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  const respone = await fetch('https://dummyjson.com/products');
  const data = await respone.json();
  const paths = data.products.map((product) => {
    return {
      params: {
        productId: `${product.id}`,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
