import React from "react";
import { PageWrapper } from "../components";
import {
  SenderInfoContainer,
  ReceiverInfoContainer,
  GiftInfoContainer,
  GiftFooterContainer,
  ComfirmContainer
 } from "../Redux/containers";
import {
  GiftBody,
  GiftBodyFinish,
} from "../components";

function Gift({ pageId }) {

  let body = "";
  if (pageId === 0) {
    body = <GiftBody />;
  } else if (pageId === 1) {
    body = <SenderInfoContainer  />;
  } else if (pageId === 2) {
    body = <ReceiverInfoContainer  />;
  } else if (pageId === 3) {
    body = <GiftInfoContainer  />;
  } else if (pageId === 4) {
    body = <ComfirmContainer  />;
  } else if (pageId === 5) {
    body = <GiftBodyFinish  />;
  } else {
    body = "gift body road error";
  }

  return (
    <PageWrapper>
      <div>{body}</div>
      <p>{pageId}</p>
      <GiftFooterContainer />
    </PageWrapper>
  );
}

export default Gift;
