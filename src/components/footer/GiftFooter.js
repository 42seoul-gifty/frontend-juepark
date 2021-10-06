import React from "react";
import { BasicButton } from "..";
import { sendHome, sendGiftMain, onClickPayment } from "../../utils/utils";
import { useSelector } from "react-redux";

function GiftFooter({ pageId, onIncrease, onDecrease }) {
  const { sender } = useSelector((state) => {
    return {
      sender: state.info.sender,
    };
  });
  const name = sender.name;
  const email = sender.email;

  let footerInfo = {
    before: undefined,
    next: undefined,
    beforeText: "",
    nextText: "",
  };

  // async function payment() {
  //   console.log("try to pay");
  // }

  if (pageId === 0) {
    footerInfo.before = sendHome;
    footerInfo.nextText = "시작하기";
  }
  if (pageId === 4) {
    // footerInfo.next = async () => {
    //   // productList = await getProductList(1, 1, 1);
    //   onIncrease();
    //   console.log(productList);
    // };
  }
  if (pageId === 5) {
    footerInfo.next = async () => {
      const payResult = await onClickPayment(name, email);
      console.log(payResult);
      onIncrease();
    };
    footerInfo.nextText = "결제하기";
  }
  if (pageId === 6) {
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
