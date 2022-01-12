import React, { useState } from 'react';
import Apple from './components/Apple/Apple.jsx';
import Button from './components/Button/Button.jsx';
import Basket from './components/Basket/Basket.jsx';
import Tree from './components/Tree/Tree.jsx';
import ButtonRestart from './components/ButtonRestart/ButtonRestart.jsx';

const initialApples = {
  apple_1: '',
  apple_2: '',
  apple_3: '',
  apple_4: '',
  apple_5: '',
};

const apples = ['apple_1', 'apple_2', 'apple_3', 'apple_4', 'apple_5'];

const App = () => {
  
  const [shake, setShake] = useState(false);
  const [applesState, setApplesState] = useState(initialApples);
  const shakeTree = () => {
    const time = 3000;

    setShake(true);
    console.log(shake);

    setTimeout(() => {
      setShake(false);
    }, time);

    for (let i = 0; i < 5; i++) {

      setTimeout(() => {
        const appleDrop = {
          [apples[i]]: `${apples[i]}_drop`,
        };
        setApplesState((prev) => ({ ...prev, ...appleDrop }));
      }, time + i * 500);

      setTimeout(() => {
        const appleCollect = {
          [apples[i]]: `${apples[i]}_drop ${apples[i]}_basket`,
        };
        setApplesState((prev) => ({ ...prev, ...appleCollect }));
      }, time + i * 500 + 1000);
    }
  }; 


  return (
    <div className="App">
      <Button shakeTree={shakeTree} />
      <ButtonRestart />
      <Basket />
      <Tree shake={shake} />

      {apples.map((item) => (
        <div key={item}>
          <Apple item={item} appleState={applesState} />
        </div>
      ))}
    </div>
  );
};

export default App;
