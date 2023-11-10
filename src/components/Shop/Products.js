import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'p1', price:6 ,title:'Oliver Twist', description:'Charles dickens brilliant work'},
  {id: 'p2', price:8 ,title:'War and Peace', description:'Leo Tolstoy epic'}
]

const Products = (props) => {
  const products = DUMMY_PRODUCTS;
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((prod)=>(
           <ProductItem
           key={prod.id}
           id={prod.id}
           title={prod.title}
           price={prod.price}
           description={prod.description}
         />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
