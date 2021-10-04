import React from "react";
import { BasicButton } from "..";
import { sendHome, sendGiftMain } from "../../utils/utils";
import getProductList from "../../api/getProductList";

function GiftFooter({ pageId, onIncrease, onDecrease }) {
  let footerInfo = {
    before: undefined,
    next: undefined,
    beforeText: "",
    nextText: "",
  };
  let productList = "";

  // async function payment() {
  //   console.log("try to pay");
  // }

  if (pageId === 0) {
    footerInfo.before = sendHome;
    footerInfo.nextText = "시작하기";
  }
  if (pageId === 4) {
    footerInfo.next = async () => {
      productList = await getProductList(1, 1, 1);
      onIncrease();
      console.log(productList);
    };
  }
  if (pageId === 5) {
    footerInfo.before = sendHome;
    footerInfo.next = sendGiftMain;
    footerInfo.beforeText = "🏠";
    footerInfo.nextText = "다른선물하러가기";
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}>
        <BasicButton
          do={footerInfo.before || onDecrease || sendHome}
          text={footerInfo.beforeText || "돌아가기"}
        />
        <BasicButton
          do={footerInfo.next || onIncrease || sendHome}
          text={footerInfo.nextText || "다음단계"}
        />
        {/* <button type="button" onClick={getUserInfo(0)}>user info</button> */}
      </div>
    </div>
  );
}

export default GiftFooter;
