import "./style.css";
import { BasketItem } from "./BasketItem";
function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeBasket = Function.prototype,
    incrementQuantityToBasket = Function.prototype,
    decrementQuantityToBasket = Function.prototype,
  } = props;
  let totalPrice = order.reduce((sum, el) => {
    sum += el.price * el.quantity;
    return sum;
  }, 0);

  return (
    <ul className='collection basketStyle mark'>
      <span onClick={handleBasketShow} className='secondary-content'>
        <i
          style={{ fontSize: "xx-large", color: "#fff", padding: "5px", cursor: "pointer" }}
          className='material-icons'
        >
          close
        </i>
      </span>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map(item => (
          <BasketItem
            key={item.id}
            {...item}
            removeBasket={removeBasket}
            incrementQuantityToBasket={incrementQuantityToBasket}
            decrementQuantityToBasket={decrementQuantityToBasket}
          />
        ))
      ) : (
        <div>Cart nothing</div>
      )}
      <li className='collection-item active'>Общая стоимость:{totalPrice}</li>
    </ul>
  );
}
export { BasketList };
