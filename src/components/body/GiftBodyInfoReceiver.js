import React from "react";
import { BodyWrapper, GiftFooter, BrandLogo, Message, Desc, Form } from "..";

function GiftBodyInfoReceiver(props) {

  return (
    <BodyWrapper>
      <BrandLogo />
      <Message contents="받는 분의 정보를 알려주세요!"/>
      <Desc contents="간편한 클릭으로 선물 정보 입력 끝!" />
      <Form label="이름" field="receiver_name" type="name"/>
      <Form label="전화번호" field="receiver_contact" type="tel"/>
      {/* <GiftFooter before={props.before} next={props.next} /> */}
    </BodyWrapper>
  );
}

export default GiftBodyInfoReceiver;
