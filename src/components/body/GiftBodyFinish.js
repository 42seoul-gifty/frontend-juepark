import React from "react";
import { BodyWrapper, Message, Desc } from "..";

function GiftBodyFinish(props) {

  return (
    <BodyWrapper>
      <Message contents="선물을 발송했습니다." />
      <Desc contents="받는 분이 선택 예정입니다." />
        {/* <GiftFooter
          before={props.before}
          next={props.next}
          beforeText='홈으로'
          nextText='다른 선물하러가기'
        /> */}
    </BodyWrapper>
  );
}

export default GiftBodyFinish;
