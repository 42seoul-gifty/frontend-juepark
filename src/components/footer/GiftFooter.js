import React from "react";
import { BasicButton } from "..";
import { sendHome, sendGiftMain } from "../../utils/utils";

function GiftFooter({ gift_age, gift_price, gift_gender, pageId, onIncrease, onDecrease }) {
  let footerInfo = {
    before: undefined,
    next: undefined,
    beforeText: "",
    nextText: "",
  };
  let giftList = [];

  if (pageId === 0) {
    footerInfo.before = sendHome;
    footerInfo.nextText = "시작하기";
  }
  if (pageId === 4) {
    footerInfo.next =
      async function getData() {
      const fetchedData = await fetch(
        "http://localhost:3000/products",
        {
          method: "GET",
          // headers: {
          //   AccessToken: access_token,
          //   RefreshToken: refresh_token,
          // },
          // {
          //   "gender": gift_gender, // index list
          //   "price": gift_price, // index 
          //   "age": gift_age // index list
          // }
        }
      )
        .then(async (response) => {
          const result = await response.json();
          console.log(result);
        })
        .then((data) => {
          return data;
        });

        giftList = fetchedData;
        console.log(giftList);
        onIncrease();
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
