import './basket.scss';

import React from 'react';

import basketSvg from '../../assets/basket.svg';

function Basket() {
  return (
    <div className="basket">
      <img src={basketSvg} alt="BasketSVG" />
    </div>
  );
}

export default Basket;
