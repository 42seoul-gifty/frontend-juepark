import React from "react";

function GiftImage(props) {
  return (
    <span
      role='img'
      aria-label='present'
      style={{
        margin: "0px !important",
        display: "inline !important",
        height: "auto",
        width: "100px",
        fontSize: "100px",
        verticalAlign: "middle",
        lineHeight: "2",
      }}>
      🎁
    </span>
  );
}

export default GiftImage;
