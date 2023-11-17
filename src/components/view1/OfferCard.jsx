import React from "react";
import "./OfferCard.css";

const OfferCard = (props) => {
  const names = props.names;
  return (
    <div className="carta">
      <h2 className="titulo">Ofertas</h2>
      <div className="cajita">
        <div>
          <img className="img_g" src={names[0].img_p} alt="galletas" />
        </div>
        <div className="cuadrado">
          <div className="b1">
            <div className="title">{names[0].title}</div>
            <div className="pr_o">{names[0].price_o}</div>
          </div>
          <div className="b2">
            <div className="desc">{names[0].desc}</div>
            <div className="pr_a">{names[0].price_a}</div>
          </div>
        </div>
      </div>
      <div className="cajita">
        <div>
          <img className="img_g" src={names[1].img_p} alt="galletas" />
        </div>
        <div className="cuadrado">
          <div className="b1">
            <div className="title">{names[1].title}</div>
            <div className="pr_o">{names[1].price_o}</div>
          </div>
          <div className="b2">
            <div className="desc">{names[1].desc}</div>
            <div className="pr_a">{names[1].price_a}</div>
          </div>
        </div>
      </div>
      <div className="cajita">
        <div>
          <img className="img_g" src={names[2].img_p} alt="galletas" />
        </div>
        <div className="cuadrado">
          <div className="b1">
            <div className="title">{names[2].title}</div>
            <div className="pr_o">{names[2].price_o}</div>
          </div>
          <div className="b2">
            <div className="desc">{names[2].desc}</div>
            <div className="pr_a">{names[2].price_a}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
