import React from "react";

function Popup({ togglePopUp }) {
  return (
    <div className="popup">
      <div className='popup_inner'>
        <input placeholder="enter"></input>
        <button onClick={() => togglePopUp()}>close</button>
      </div>
    </div>
  );
}

export default Popup;