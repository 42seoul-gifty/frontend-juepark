import React from "react";
import { PageWrapper, GiftFooter } from "../components";
import SenderContainer from "../Redux/containers/SenderContainer";
import {
  GiftBody,
  GiftBodyConfirm,
  GiftBodyFinish,
  GiftBodyInfoReceiver,
  GiftBodyInfoGift,
} from "../components";

function Gift({ pageId, onIncrease, onDecrease }) {
  const page = [
    { id: 0, pagename: "gift" }, // before: "" -> history back
    { id: 1, pagename: "info_sender" },
    { id: 2, pagename: "info_receiver" },
    { id: 3, pagename: "info_gift" },
    { id: 4, pagename: "confirm" },
    { id: 5, pagename: "finish" }, //next: gift
  ];

  // const [info, setInfo] = useState({
  //   sender: {
  //     name: "주는이",
  //     contact: "01011112222",
  //   },
  //   receiver: {
  //     name: "받는이",
  //     contact: "01033334444",
  //   },
  //   gift: {
  //     gender: "",
  //     age: 0,
  //     price: 0,
  //   },
  // });

  let body = "";
  if (pageId === 0) {
    body = <GiftBody />;
  } else if (pageId === 1) {
    body = <SenderContainer />;
  } else if (pageId === 2) {
    body = <GiftBodyInfoReceiver />;
  } else if (pageId === 3) {
    body = <GiftBodyInfoGift />;
  } else if (pageId === 4) {
    body = <GiftBodyConfirm />;
  } else if (pageId === 5) {
    body = <GiftBodyFinish />;
  } else {
    body = "gift body road error";
  }

  const sendHome = () => {
    window.location.assign("/");
  };
  const sendGiftMain = () => {
    window.location.assign("/gift");
  };

  let before = onDecrease;
  let next = onIncrease;
  let beforeText = "돌아가기";
  let nextText = "다음단계";

  if (pageId === 0) {
    before = sendHome;
    nextText = "시작하기";
  }
  if (pageId === 5) {
    before = sendHome;
    next = sendGiftMain;
    beforeText = "🏠";
    nextText = "다른선물하러가기";
  }

  return (
    <PageWrapper>
      <div>{body}</div>
      <p>{pageId}</p>
      <GiftFooter
        before={before}
        next={next}
        beforeText={beforeText}
        nextText={nextText}
      />
    </PageWrapper>
  );
}

export default Gift;
