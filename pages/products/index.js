import Card from '/components/Card';
import Slider from '/components/Slider';
import Navbar from '../../components/Navbar/Navbar';

const Home = ({ products }) => {
  return (
    <>
      <Navbar products={products} />
      <Slider />
      <Card products={products} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
