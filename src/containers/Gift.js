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
    body = <SenderContainer  />;
  } else if (pageId === 2) {
    body = <ReceiverContainer  />;
  } else if (pageId === 3) {
    body = <GiftContainer  />;
  } else if (pageId === 4) {
    body = <InfoContainer  />;
  } else if (pageId === 5) {
    body = <GiftBodyFinish  />;
  } else {
    body = "gift body road error";
  }

  return (
    <PageWrapper>
      <div>{body}</div>
      <p>{pageId}</p>
      <GiftFooter
        pageId={pageId}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />
    </PageWrapper>
  );
}

export default Gift;
