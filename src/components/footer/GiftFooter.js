import React from "react";
import { BasicButton } from "..";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constantValue";
import { sendHome, sendGiftMain } from "../../utils/utils";
import { SERVER_URI } from "../../utils/constantValue";

function GiftFooter({
  gift_age,
  gift_price,
  gift_gender,
  pageId,
  onIncrease,
  onDecrease,
}) {
  let footerInfo = {
    before: undefined,
    next: undefined,
    beforeText: "",
    nextText: "",
  };
  let giftList = "";
  // const QUERY_STR = `?price=${gift_price}&gender=${gift_gender}&age=${gift_age}`;
  const QUERY_STR = "?price=1&gender=1&age=1";
  async function getGiftList() {
    const fetchedData = await fetch(`${SERVER_URI}/products${QUERY_STR}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      // .then(async (response) => {
      //   const result = await response.json();
      //   return result;
      // })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error"));
    giftList = fetchedData;
    console.log(JSON.stringify(giftList));
    onIncrease();
  }

  if (pageId === 0) {
    footerInfo.before = sendHome;
    footerInfo.nextText = "시작하기";
  }
  if (pageId === 4) {
    footerInfo.next = () => {
      getGiftList();
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
