import './button.scss';

import React from 'react';

function Button({ shakeTree }) {

  return (
    <div>
      <button className="btn" onClick={shakeTree}>
        Shake Tree
      </button>
    </div>
  );
}

export default Button;
