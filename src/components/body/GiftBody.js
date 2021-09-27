import React from "react";
import {
  BodyWrapper,
  BrandLogo,
  Hamburger,
  Message,
  GiftImage,
} from "..";

function GiftBody(props) {
  return (
    <BodyWrapper>
      <BrandLogo />
      <Hamburger />
      <Message contents="선물을 시작하세요!"/>
      <GiftImage />
    </BodyWrapper>
  );
}

export default GiftBody;
