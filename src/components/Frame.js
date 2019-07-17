import React from "react";

function Frame({ tag, media }) {
  if (tag === 'img') {
    return (
      <>
        <img alt="" src={media} className="photo-frame"></img>
      </>
    );
  } else {
    return (
      <>
        <iframe title="photo-frame" src={media} className="photo-frame"></iframe>
      </>
    );
  }
}

export default Frame;