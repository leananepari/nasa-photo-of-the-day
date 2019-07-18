import React, { useEffect, useState } from "react";
import axios from 'axios';

import Card from "./components/Card";
import Popup from "./components/Popup";

function App() {
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [media, setMedia] = useState();
  const [mediaType, setMediaType] = useState();
  const [explanation, setExplanation] = useState();
  const [popUp, setPopUp] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  let apiString = "https://api.nasa.gov/planetary/apod?api_key=FyfffuzYMwaTRNfx1pMWhuuv5477KXk619RF9iTQ";
  const [api, setApi] = useState("https://api.nasa.gov/planetary/apod?api_key=FyfffuzYMwaTRNfx1pMWhuuv5477KXk619RF9iTQ");

 
  useEffect(() => {
    axios.get(api) //&date=2012-03-14
      .then(response => {
        setDate(response.data.date);
        setTitle(response.data.title);
        setMedia(response.data.url);
        setMediaType(response.data.media_type);
        setExplanation(response.data.explanation);
      })
      .catch(error => {
        setPopUp(true);
        setMessage('Invalid date.');    
      })
  }, [api])
  

  function togglePopUp() {
    if (setMessage !== '') {
      setMessage('');
    }
    setPopUp(!popUp);
  }

  return (
    <div className="wrap">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="App">
        <h1 className="title">NASA Astronomy Photo Of The Day</h1>
        <div className="date-container">
          <p className="date-title">Date: </p>
          <p className="date">{date}</p>
          <p className="date change" onClick={togglePopUp}>CHANGE</p>
          {popUp ? 
          <Popup togglePopUp={togglePopUp} inputValue={inputValue} setInputValue={setInputValue} api={api} setApi={setApi} apiString={apiString} message={message} setDate={setDate}/>
          : null
        }
        </div>
        <Card title={title} media={media} mediaType={mediaType} explanation={explanation} />
      </div>
    </div>
  );
}

export default App;
