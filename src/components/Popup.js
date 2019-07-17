import React from "react";

function Popup({ togglePopUp }) {
  return (
    <div className="popup">
      <div className='popup_inner'>
        <div className="popup-left">
          <input placeholder="enter"></input>
          <button className="btn-update">UPDATE</button>
        </div>
        <button className="btn-close" onClick={() => togglePopUp()}>x</button>
      </div>
    </div>
  );
}

export default Popup;