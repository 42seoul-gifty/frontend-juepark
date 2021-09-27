import React from "react";
import { BodyWrapper, BrandLogo, GiftFooter, Message, Desc, Form } from "..";

function GiftBodyInfoGift(props) {
  return (
    <BodyWrapper>
    <BrandLogo />
      <Message contents="받는 분의 정보를 입력해주세요!" />
      <Desc contents="받는 사람 선물 정보입력" />
      <Form label="남" field="gift_gender" type="button" />
      <Form label="여" field="gift_gender" type="button" />
      <Form label="나이" field="gift_age" type="age" />
      <Form label="가격대" field="gift_price" type="price" />
      {/* <GiftFooter before={props.before} next={props.next} /> */}
    </BodyWrapper>
  );
}

export default GiftBodyInfoGift;
