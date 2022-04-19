import React from "react";
import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
  const { cards = [], addToBasket } = props;
  if (!cards.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className='cardsContent'>
      {cards.map((cards, i) => (
        <GoodsItem
          key={i}
          title={cards.title}
          description={cards.description}
          date={cards.date}
          picters={cards.picters}
          price={cards.price}
          id={cards.id}
          addToBasket={addToBasket}
        />
      ))}
    </div>
  );
}

export { GoodsList };
