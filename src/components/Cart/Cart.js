
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector(state=> state.cartList.cartItems);

 
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((cartItem)=>
          <CartItem
          key={cartItem.id} 
          id={cartItem.id}
          title={cartItem.name}
          price={cartItem.price}
          quantity ={cartItem.quantity}
          totalPrice = {cartItem.totalPrice}
        />
  )}
        
      </ul>
    </Card>
  );
};

export default Cart;
