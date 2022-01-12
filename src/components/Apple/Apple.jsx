import './apple.scss';

import React from 'react';

import appleSvg from '../../assets/apple.svg';

function apple({ item, appleState }) {
  return (
    <div className={appleState[item] ? `${item} ${appleState[item]}` : item}>
      <img src={appleSvg} alt="apple.svg" />
    </div>
  );
}

export default apple;
