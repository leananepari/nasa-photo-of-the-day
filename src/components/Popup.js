import React from "react";

function Popup({ togglePopUp, inputValue, setInputValue, api, setApi, apiString, message, setDate, }) {
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setDate(inputValue);
    setApi(api = apiString + `&date=${inputValue}`);
    setInputValue('');
    togglePopUp();
    console.log('here click')

  }
  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <div className='popup_inner'>
          <div className="popup-left">
            <input placeholder="yyyy-mm-dd" type="text" value={inputValue} onChange={handleInputChange} />
            <input className="btn-update" type="submit" value="UPDATE" />
            <p style={{color: 'red'}}>{message}</p>
          </div>
          <button className="btn-close" onClick={() => togglePopUp()}>x</button>
        </div>
      </form>
    </div>
  );
}

export default Popup;