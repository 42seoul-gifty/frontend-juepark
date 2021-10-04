import React from "react";
import { useSelector } from "react-redux";
import { BrandLogo, Desc, Message, BodyWrapper } from "..";

function GiftBodyConfirm() {
  const { receiver, gift } = useSelector((state) => {
    return {
      receiver: state.info.receiver,
      gift: state.info.gift,
    };
  });
  const contents = `${receiver.name} 님께 선물을 보냅니다.`;
  return (
    <BodyWrapper>
      <BrandLogo />
      <Message contents={contents} />
      <Desc contents='' />
      <div>{receiver.name} 님</div>
      <div>연락처: {receiver.contact}</div>
      <div>성별: {receiver.gender}</div>
      <div>나이: {receiver.age}</div>
      <div>예산: {gift.price}</div>
      {/* <GiftFooter before={props.before} next={props.next} /> */}
    </BodyWrapper>
  );
}

export default GiftBodyConfirm;
