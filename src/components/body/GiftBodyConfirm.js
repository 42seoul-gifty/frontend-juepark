import React from "react";
import { BrandLogo, Desc, Message, BodyWrapper } from "..";

function GiftBodyConfirm({
  gift_age,
  gift_price,
  gift_gender,
  receiver_name,
  receiver_contact,
}) {
  const contents = `${receiver_name} 님께 선물을 보냅니다.`;
  return (
    <BodyWrapper>
      <BrandLogo />
      <Message contents={contents} />
      <Desc contents='' />
      <div>{receiver_name} 님</div>
      <div>연락처: {receiver_contact}</div>
      <div>성별: {gift_gender}</div>
      <div>나이: {gift_age}</div>
      <div>예산: {gift_price}</div>
      {/* <GiftFooter before={props.before} next={props.next} /> */}
    </BodyWrapper>
  );
}

export default GiftBodyConfirm;
