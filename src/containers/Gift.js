import React, { useState } from "react";
import { PageWrapper } from "../components";
import {
  GiftBody,
  GiftBodyConfirm,
  GiftBodyFinish,
  GiftBodyInfoReceiver,
  GiftBodyInfoSender,
  GiftBodyInfoGift,
} from "../components";
// import Cookies from 'js-cookie';


function Gift() {
  const page = [
    { id: 0, pagename: "gift" }, // before: "" -> history back
    { id: 1, pagename: "info_sender" },
    { id: 2, pagename: "info_receiver" },
    { id: 3, pagename: "info_gift" },
    { id: 4, pagename: "confirm" },
    { id: 5, pagename: "finish" }, //next: gift
  ];

  const [currentPageId, setCurrentPageId] = useState(0);
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

  function updateInfo() {
    console.log("update info");
		// Cookies.set(`${props.field}`, value);
    //setInfo(() => {});
  }

  const before = () => {
    setCurrentPageId(currentPageId - 1);
    updateInfo();
  };

  const next = () => {
    setCurrentPageId(currentPageId + 1);
    updateInfo();
  };

  let body = "";
  if (currentPageId === 0) {
    body = <GiftBody pagename={page[currentPageId].pagename} next={next} />;
  } else if (currentPageId === 1) {
    body = (
      <GiftBodyInfoSender
        pagename={page[currentPageId].pagename}
        before={before}
        next={next}
      />
    );
  } else if (currentPageId === 2) {
    body = (
      <GiftBodyInfoReceiver
        pagename={page[currentPageId].pagename}
        before={before}
        next={next}
      />
    );
  } else if (currentPageId === 3) {
    body = (
      <GiftBodyInfoGift
        pagename={page[currentPageId].pagename}
        before={before}
        next={next}
      />
    );
  } else if (currentPageId === 4) {
    body = (
      <GiftBodyConfirm
        pagename={page[currentPageId].pagename}
        before={before}
        next={next}
      />
    );
  } else if (currentPageId === 5) {
    body = <GiftBodyFinish pagename={page[currentPageId].pagename} />;
  } else {
    body = "gift body road error";
  }

  return (
    <PageWrapper>
      <div>{body}</div>
    </PageWrapper>
  );
}

export default Gift;
