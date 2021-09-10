import React from 'react';
import { BasicButton } from '..';

function GiftFooter(props) {
  const beforeText = props.beforeText || "뒤로가기";
  const nextText = props.nextText || "다음단계";

  const sendHome = () => {
    window.location.assign('/');
  }

	return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}>
        <BasicButton do={props.before || sendHome } text={beforeText}/>
        <BasicButton do={props.next || sendHome } text={nextText}/>
      </div>
    </div>
  );
}

export default GiftFooter;