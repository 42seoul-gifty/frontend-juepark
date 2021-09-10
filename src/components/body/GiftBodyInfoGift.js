import React from "react";
import { BodyWrapper, Logo, GiftFooter, Message, Desc, BasicButton, Form } from "..";

function GiftBodyInfoGift(props) {
  return (
    <BodyWrapper>
    <Logo />
      <Message contents="받는 분의 정보를 입력해주세요!" />
      <Desc contents="받는 사람 선물 정보입력" />
      <BasicButton do={() => console.log("남")} text="남" />
      <BasicButton do={() => console.log("여")} text="여" />
      <Form label="나이" field="gift_age" type="age" />
      <Form label="가격대" field="gift_price" type="price" />
      <GiftFooter before={props.before} next={props.next} />
    </BodyWrapper>
  );
}

export default GiftBodyInfoGift;
