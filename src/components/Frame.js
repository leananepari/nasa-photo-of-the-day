import React from "react";
import styled from 'styled-components';

const PhotoFrame = styled.img `
  width: 700px;
  height: 400px;
  position: relative;
  z-index: 6;
  border: 2px solid silver;
`;

const Iframe = styled.iframe `
  width: 700px;
  height: 400px;
  position: relative;
  z-index: 6;
  border: 2px solid silver;
`

function Frame({ tag, media }) {
  if (tag === 'img') {
    return (
      <>
        <PhotoFrame alt="" src={media} className="photo-frame"></PhotoFrame>
      </>
    );
  } else {
    return (
      <>
        <Iframe title="photo-frame" src={media} className="photo-frame"></Iframe>
      </>
    );
  }
}

export default Frame;