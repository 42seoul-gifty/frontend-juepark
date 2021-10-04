import React from "react";
import { BasicButton } from "..";
import { sendHome, sendGiftMain } from "../../utils/utils";
import { useSelector } from "react-redux";
import getGiftList from "../../api/getGiftList";

function GiftFooter({ pageId, onIncrease, onDecrease }) {
  let footerInfo = {
    before: undefined,
    next: undefined,
    beforeText: "",
    nextText: "",
  };
  let giftList = "";

  const { gift, receiver } = useSelector((state) => {
    return {
      gift: state.info.gift,
      receiver: state.info.receiver,
    };
  });

  const age = receiver.age;
  const gender = receiver.gender;
  const price = gift.price;

  // async function payment() {
  //   console.log("try to pay");
  // }

  if (pageId === 0) {
    footerInfo.before = sendHome;
    footerInfo.nextText = "시작하기";
  }
  if (pageId === 4) {
    footerInfo.next = async () => {
      giftList = await getGiftList(1, 1, 1);
      onIncrease();
      console.log(giftList);
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
      </div>
    </div>
  );
}

export default GiftFooter;
