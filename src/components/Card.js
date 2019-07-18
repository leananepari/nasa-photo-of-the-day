import React from "react";
import Frame from "./Frame";

function Card({ title, media, mediaType, explanation }) {
  var tag;
  if (mediaType === 'image') {
    tag = 'img';
  } else {
    tag = 'iframe';
  }
  return (
    <div className="card-container">
      <div className="left-child">
        <h2 className="photo-title">"{title}"</h2>
        <Frame tag={tag} media={media}/>
      </div>
      <div className="right-child">
        <p className="explanation">{explanation}</p>
      </div>
    </div>
  );
}

export default Card;