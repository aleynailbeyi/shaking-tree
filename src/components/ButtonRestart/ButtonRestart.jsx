import './buttonRestart.scss';

import React, {useState}  from 'react';

function ButtonRestart() {
    const [render, setRender] = useState(true);
    
    console.log(render);
    
    return (
        <div>
            <button className="btn-restart" onClick={() => setRender(!render)}>
            Restart
            </button>
        </div>
  );
}

export default ButtonRestart;