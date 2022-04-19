import "./style.css";

function Cart(props) {
  const { order = 0, handleBasketShow = Function.prototype } = props;

  return (
    <div onClick={handleBasketShow} className='cart blue darken-4 white-text alignCart'>
      <i style={{ fontSize: "54px" }} className='material-icons'>
        shopping_cart
      </i>
      {order ? <span className='cart-quantity'>{order}</span> : null}
    </div>
  );
}

export { Cart };
