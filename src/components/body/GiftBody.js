import React from "react";
import {
  BodyWrapper,
  BrandLogo,
  Hamburger,
  Message,
  GiftImage,
  // GiftFooter,
} from "..";

function GiftBody(props) {
  return (
    <BodyWrapper>
      <BrandLogo />
      <Hamburger />
      <Message contents="선물을 시작하세요!"/>
      <GiftImage />
      {/* <GiftFooter info={props.footerInfo} /> */}
    </BodyWrapper>
  );
}

export default GiftBody;
