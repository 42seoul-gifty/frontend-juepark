import React from "react";
import { BasicButton } from "..";

function GiftFooter({ before, next, beforeText, nextText}) {
  // console.log(info);
  // const beforeText = info.beforeText ;
  // const nextText = info.nextText;

  const sendHome = () => {
    window.location.assign("/");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}>
        <BasicButton do={before || sendHome} text={beforeText || "돌아가기"} />
        <BasicButton do={next || sendHome} text={nextText || "다음단계"} />
      </div>
    </div>
  );
}

export default GiftFooter;
