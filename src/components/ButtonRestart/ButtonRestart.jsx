import './buttonRestart.scss';

import React  from 'react';

function ButtonRestart() {
    //buton restarta tıklandığında sayfayı yeniler.
    function refreshPage(){      
        window.parent.location = window.parent.location.href; 
    }
    return (
        <div>
            <button className="btn-restart" onClick={() => refreshPage()}>
            Restart
            </button>
        </div>
  );
}

export default ButtonRestart;