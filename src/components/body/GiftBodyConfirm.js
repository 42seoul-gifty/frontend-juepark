import React from "react";
import { Logo, Desc, Message, BodyWrapper, GiftFooter } from "..";
import Cookies from "js-cookie";

function GiftBodyConfirm(props) {
  const gift_gender = Cookies.get('gift_gender');
  const gift_age = Cookies.get('gift_age');
  const gift_price = Cookies.get('gift_price');
  const receiver_name = Cookies.get('receiver_name');
  const receiver_contact = Cookies.get('receiver_contact');

  const contents = `${receiver_name} 님께 선물을 보냅니다.`;
  return (
    <BodyWrapper>
      <Logo />
      <Message contents={contents} />
      <Desc contents='' />
      <div>{receiver_name} 님</div>
      <div>연락처: {receiver_contact}</div>
      <div>성별: {gift_gender}</div>
      <div>나이: {gift_age}</div>
      <div>예산: {gift_price}</div>
      <GiftFooter before={props.before} next={props.next} />
    </BodyWrapper>
  );
}

export default GiftBodyConfirm;
