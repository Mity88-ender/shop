import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "../Cart/Cart";
import { BasketList } from "../Cart/BasketList";
import "./style.css";

// const goods = [
//   { id: 1, name: "Name 1", price: 100 },
//   { id: 2, name: "Name 2", price: 200 },
// ];

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  // TODO: implement component
  const addToBasket = item => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  function handleBasketShow() {
    setBasketShow(!isBasketShow);
  }

  function removeBasket(itemId) {
    const newOrder = order.filter(el => el.id !== itemId);
    setOrder(newOrder);
  }

  function incrementQuantityToBasket(itemId) {
    const inNewOrder = order.map(el => {
      if (el.id === itemId) {
        el.quantity++;
      }
      return el;
    });
    setOrder(inNewOrder);
  }

  function decrementQuantityToBasket(itemId) {
    const deNewOrder = order.map(el => {
      if (el.id === itemId) {
        el.quantity === 0 ? (el.quantity = 0) : el.quantity--;
      }
      return el;
    });
    setOrder(deNewOrder);
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        // "Content-Type": "application/json; charset=utf-8",
        Authorization: API_KEY,
      },
    })
      .then(response => response.json())
      .then(data => {
        data.shop
          ? setGoods(
              data.shop.reduce((accum, item, i) => {
                accum[i] = {
                  title: item.displayName,
                  description: item.displayDescription,
                  date: item.firstReleaseDate,
                  price: item.price.finalPrice,
                  picters: item.displayAssets[0].url,
                  id: item.mainId,
                };
                return accum;
              }, [])
            )
          : setLoading(true);
        setLoading(false);
      });
  }, []);
  return (
    <main className='container content '>
      {loading ? <Preloader /> : <GoodsList cards={goods} addToBasket={addToBasket} />}
      <Cart order={order.length} handleBasketShow={handleBasketShow} />
      {isBasketShow ? (
        <BasketList
          order={order}
          removeBasket={removeBasket}
          handleBasketShow={handleBasketShow}
          incrementQuantityToBasket={incrementQuantityToBasket}
          decrementQuantityToBasket={decrementQuantityToBasket}
        />
      ) : null}
    </main>
  );
}
export { Shop };
