import React from "react";
import { BodyWrapper,BrandLogo, Message, Desc, Form } from "..";

const GiftBodyInfoSender = ({ name, updateName, contact, updateContact }) => {
  return (
    <BodyWrapper>
      <BrandLogo />
      <Message contents='보내시는 분의 정보를 알려주세요!' />
      <Desc contents='간편한 클릭으로 선물 정보 입력 끝!' />
      <Form label='이름' field='sender_name' type='text' value={name} updateValue={updateName} />
      <Form label='전화번호' field='sender_contact' type='tel' value={contact} updateValue={updateContact} />
      {/* <GiftFooter before={before} next={next} /> */}
    </BodyWrapper>
  );
};

export default GiftBodyInfoSender;
