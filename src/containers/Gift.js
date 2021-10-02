import React, { useCallback, useState } from "react";
import {
  GiftBodyInfoGift,
  GiftBodyInfoReceiver,
  GiftBodyInfoSender,
  GiftFooter,
  PageWrapper,
} from "../components";
import {
  SenderInfoContainer,
  ReceiverInfoContainer,
  GiftInfoContainer,
  GiftFooterContainer,
  ComfirmContainer,
} from "../redux/containers";
import { GiftBody, GiftBodyFinish } from "../components";
import { useDispatch, useSelector } from "react-redux";

/**
 * @typedef {Object} GiftProps
 * @property {number} pageId
 * @property {string} [optionalProperty]
 */

/**
 * @param {GiftProps} param0
 * @param {number} [param1] // 있어도 되고 없어도 된다.
 */
function Gift({ pageId: pageIdOld, optionalProperty }, param1) {
  let body = <>""</>;
  const dispatch = useDispatch();

  const [pageId, setPageId] = useState(0);

  const onIncrease = useCallback(() => {
    setPageId((pageId) => pageId + 1);
  }, []);

  const onDecrease = useCallback(() => {
    setPageId((pageId) => pageId - 1);
  }, []);

  const { gift, receiver, sender } = useSelector((state) => {
    return {
      gift: state.info.gift,
      receiver: state.info.receiver,
      sender: state.info.sender,
    };
  });

  if (pageId === 0) {
    body = <GiftBody />;
  } else if (pageId === 1) {
    body = <GiftBodyInfoSender />;
  } else if (pageId === 2) {
    body = <GiftBodyInfoReceiver />;
  } else if (pageId === 3) {
    // body = <GiftInfoContainer />;
    body = <GiftBodyInfoGift />;
  } else if (pageId === 4) {
    body = <ComfirmContainer />;
  } else if (pageId === 5) {
    body = <GiftBodyFinish />;
  } else {
    body = <>"gift body road error"</>;
  }

  return (
    <PageWrapper>
      <div>{body}</div>
      <p>{pageIdOld}</p>
      {/* <GiftFooterContainer /> */}
      <GiftFooter
        receiver_age={receiver.age}
        gift_price={gift.price}
        receiver_gender={receiver.gender}
        pageId={pageId}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </PageWrapper>
  );
}

<Gift pageId={123}></Gift>;

export default Gift;
