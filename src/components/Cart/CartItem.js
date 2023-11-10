import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
const dispatch = useDispatch();
const removeItemHandler=()=>{
 dispatch(cartActions.removeItems(props.id))
}

const addItemHandler=()=>{
dispatch(cartActions.addItems({
  id:props.id,title:props.title,price:props.price
}))
}
  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.totalPrice}{' '}
          <span className={classes.itemprice}>(${props.price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
