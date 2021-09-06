import React from 'react';
import { BackButton, NextButton } from '..';

function GiftFooter(props) {
  const backText = props.backText;
  const nextText = props.nextText;

	return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}>
        <BackButton back={props.back} text={backText}/>
        <NextButton next={props.next} text={nextText}/>
      </div>
    </div>
  );
}

export default GiftFooter;