import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Toy',
    price: 23,
    description: 'Toy for kids with 3+ years',
  },
  { id: 'p2', title: 'Colors', price: 12, description: 'Color for kids' },
  {
    id: 'p3',
    title: 'Cooking book',
    price: 32,
    description: 'Book for everybody',
  },
  { id: 'p4', title: 'Book', price: 5, description: 'Book for kids ' },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
