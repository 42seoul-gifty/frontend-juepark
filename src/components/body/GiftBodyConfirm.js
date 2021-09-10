import React from "react";
import { Logo, Desc, Message, BodyWrapper, GiftFooter } from "..";


function GiftBodyConfirm(props) {

  return (
    <BodyWrapper>
      <Logo />
      <Message contents="000님께 선물을 보냅니다." />
      <Desc contents="(confirm)" />
      <p>입력한 정보</p>
      <GiftFooter before={props.before} next={props.next} />
    </BodyWrapper>
  );
}

export default GiftBodyConfirm;
