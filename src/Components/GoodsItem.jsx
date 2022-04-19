import "./style.css";
import { useRef } from "react";
function GoodsItem(props) {
  const { title, description, date, picters, price, addToBasket, id } = props;
  const M = window.M;
  const elRef = useRef();

  function showItem() {
    let instances = M.Materialbox.init(elRef.current, { inDuration: "1000" });
    instances.open();
  }

  return (
    <div className='row stretches'>
      <div
        style={{
          textAlign: "center",
          padding: "8px",
          width: "auto",
        }}
        className='col s12 m7 stretches'
      >
        <div className='card stretch'>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.158)",
            }}
            className='card-image '
          >
            <div ref={elRef} onClick={showItem} className='materialboxed'>
              <img src={picters} alt='увсеходноитоже' />
            </div>
          </div>
          <span className='card-title'>{title}</span>
          <div className='card-content stretchCurrent'>
            <p>{description}</p>
            <p> дата выхода: {date}</p>
          </div>
          <div className='card-action'>
            <button
              onClick={() => {
                addToBasket({ id, title, picters, price });
                M.toast({ html: title });
              }}
              className='waves-effect waves-light btn'
            >
              Купить{" "}
            </button>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}> {price} руб</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GoodsItem };
