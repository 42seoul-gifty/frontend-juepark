import React from "react";
import { useSelector } from "react-redux";
import { BrandLogo, Desc, Message, BodyWrapper } from "..";
import getProductList from "../../api/getProductList";

function GiftBodyPay() {
  const { receiver } = useSelector((state) => {
    return {
      receiver: state.info.receiver,
    };
  });
  const contents = `${receiver.name} 님께 선물을 보냅니다.`;
  const productList = async () => {
    const productList = await getProductList(1, 1, 1);
    console.log(productList);
    return productList;
  };
  productList();
  return (
    <BodyWrapper>
      <BrandLogo />
      <Message contents={contents} />
      <Desc contents='' />
      <div>{receiver.name} 님께 갈 선물 리스트</div>

      {/* <GiftFooter before={props.before} next={props.next} /> */}
    </BodyWrapper>
  );
}

export default GiftBodyPay;
