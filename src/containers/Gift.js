import React, { useCallback, useState } from "react";
import getAccessToken from "../api/getAccessToken";
import {
  GiftBodyConfirm,
  GiftBodyInfoGift,
  GiftBodyInfoReceiver,
  GiftBodyInfoSender,
  GiftFooter,
  PageWrapper,
} from "../components";
import { GiftBody, GiftBodyFinish } from "../components";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constantValue";

/**
 * @typedef {Object} GiftProps
 * @property {number} pageId
 * @property {string} [optionalProperty]
 */

/**
 * @param {GiftProps} param0
 * @param {number} [param1] // 있어도 되고 없어도 된다.
 */
function Gift({ optionalProperty }, param1) {
  const [pageId, setPageId] = useState(0);

  const onIncrease = useCallback(() => {
    setPageId((pageId) => pageId + 1);
  }, []);

  const onDecrease = useCallback(() => {
    setPageId((pageId) => pageId - 1);
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn === false && ACCESS_TOKEN && REFRESH_TOKEN) {
    setLoggedIn(true);
  } else if (loggedIn === false && !ACCESS_TOKEN && REFRESH_TOKEN) {
    console.log("renew AccessToken");
    getAccessToken(); //잘되는지 테스트 필요
  }

  let body = <div>"gift body road error"</div>;
  if (pageId === 0) {
    body = <GiftBody />;
  } else if (pageId === 1) {
    body = <GiftBodyInfoSender />;
  } else if (pageId === 2) {
    body = <GiftBodyInfoReceiver />;
  } else if (pageId === 3) {
    body = <GiftBodyInfoGift />;
  } else if (pageId === 4) {
    body = <GiftBodyConfirm />;
  } else if (pageId === 5) {
    body = <GiftBodyFinish />;
  }

  return (
    <PageWrapper>
      <div>{body}</div>
      <GiftFooter
        pageId={pageId}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </PageWrapper>
  );
}

export default Gift;
