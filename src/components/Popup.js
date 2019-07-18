import React from "react";

function Popup({ togglePopUp, inputValue, setInputValue, api, setApi, apiString }) {
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setApi(api = apiString + `&date=${inputValue}`);
    setInputValue('');
    togglePopUp();
  }
  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <div className='popup_inner'>
          <div className="popup-left">
            <input placeholder="yyyy-mm-dd" type="text" value={inputValue} onChange={handleInputChange} />
            <input className="btn-update" type="submit" value="UPDATE" />
          </div>
          <button className="btn-close" onClick={() => togglePopUp()}>x</button>
        </div>
      </form>
    </div>
  );
}

export default Popup;