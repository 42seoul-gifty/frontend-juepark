import React from "react";
import { PageWrapper, GiftFooter } from "../components";
import SenderContainer from "../Redux/containers/SenderContainer";
import ReceiverContainer from "../Redux/containers/ReceiverContainer";
import GiftContainer from "../Redux/containers/GiftContainer";
import InfoContainer from "../Redux/containers/infoContainer";
import {
  GiftBody,
  GiftBodyFinish,
} from "../components";

function Gift({ pageId, onIncrease, onDecrease }) {

  let body = "";
  if (pageId === 0) {
    body = <GiftBody />;
  } else if (pageId === 1) {
    body = <SenderContainer />;
  } else if (pageId === 2) {
    body = <ReceiverContainer />;
  } else if (pageId === 3) {
    body = <GiftContainer />;
  } else if (pageId === 4) {
    body = <InfoContainer />;
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

  let info = {
    before: onDecrease,
    next: onIncrease,
    beforeText: "돌아가기",
    nextText: "다음단계",
  };

  if (pageId === 0) {
    info.before = sendHome;
    info.nextText = "시작하기";
  }
  if (pageId === 5) {
    info.before = sendHome;
    info.next = sendGiftMain;
    info.beforeText = "🏠";
    info.nextText = "다른선물하러가기";
  }

  return (
    <PageWrapper>
      <div>{body}</div>
      <p>{pageId}</p>
      <GiftFooter
        before={info.before}
        next={info.next}
        beforeText={info.beforeText}
        nextText={info.nextText}
      />
    </PageWrapper>
  );
}

export default Gift;
