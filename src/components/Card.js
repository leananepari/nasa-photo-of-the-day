import React from "react";
import Frame from "./Frame";
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  // flex-wrap: wrap;
  height: 100%;
`;

const LeftChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  padding: 40px 40px 40px 60px;

  h2 {
    display: flex;
    width: 100%;
    justify-self: baseline;
    padding-bottom: 20px;
    font-size: 1.5em;
    position: relative;
    z-index: 6;
    color: white;
  }
`;

const RightChild = styled.div`
  display: flex;
  padding: 40px 60px 40px 0px;

  p {
    padding-top: 55px;
    font-size: 1.2em;
    line-height: 1.6;
    text-align: left;
    padding-left: 0px;
    position: relative;
    z-index: 6;
    color: white;
  }

`
function Card({ title, media, mediaType, explanation }) {
  var tag;
  if (mediaType === 'image') {
    tag = 'img';
  } else {
    tag = 'iframe';
  }
  return (
    <CardContainer>
      <LeftChild>
        <h2>"{title}"</h2>
        <Frame tag={tag} media={media}/>
      </LeftChild>
      <RightChild>
        <p>{explanation}</p>
      </RightChild>
    </CardContainer>
  );
}

export default Card;
