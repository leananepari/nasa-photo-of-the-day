import React from "react";
import { Input, Button } from 'semantic-ui-react';

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
          <button className="btn-close" onClick={() => togglePopUp()}>x</button>
          <Input placeholder="yyyy-mm-dd" type="text" value={inputValue} onChange={handleInputChange} 
                style={{width: '80%', fontSize: '1.5em' }} 
          />
          <Button className="btn-update" type="submit" content='UPDATE' 
          />
          <p style={{color: 'red', marginTop: '5px'}}>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default Popup;
