import './tree.scss';

import React from 'react';

import treeSvg from '../../assets/tree.svg';

function Tree({ shake }) {
  return (
    <div className={shake ? 'tree tree_shake' : 'tree'}>
      <img src={treeSvg} width="300px" height="400px" alt="tree.svg" />
    </div>
  );
}

export default Tree;
