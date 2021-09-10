import React from "react";
import {
  BodyWrapper,
  GiftFooter,
  Logo,
  Hamburger,
  Message,
  GiftImage,
} from "..";

function GiftBody(props) {
  return (
    <BodyWrapper>
      <Logo />
      <Hamburger />
      <Message contents="선물을 시작하세요!"/>
      <GiftImage />
      <GiftFooter before={props.before} next={props.next} nextText='시작하기' />
    </BodyWrapper>
  );
}

export default GiftBody;
