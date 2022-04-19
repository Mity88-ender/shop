import "./style.css";
function BasketItem(props) {
  const {
    title,
    picters,
    price,
    quantity,
    id,
    removeBasket = Function.prototype,
    incrementQuantityToBasket = Function.prototype,
    decrementQuantityToBasket = Function.prototype,
  } = props;

  return (
    <li style={{ margin: "auto" }} className='collection-item'>
      {title} {price} x{quantity} = стоимость: {price * quantity}
      <span onClick={() => removeBasket(id)} className='secondary-content btn-floating'>
        <i className='material-icons  atyle_i'>close</i>
      </span>
      <button onClick={() => incrementQuantityToBasket(id)} className='secondary-content btn-floating '>
        <i className='material-icons atyle_i'>exposure_plus_1</i>
      </button>
      <button onClick={() => decrementQuantityToBasket(id)} className='secondary-content btn-floating'>
        <i className='material-icons atyle_i'>exposure_neg_1</i>
      </button>
    </li>
  );
}
export { BasketItem };
