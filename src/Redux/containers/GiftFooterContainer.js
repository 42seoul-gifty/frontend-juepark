import React from "react";
import { connect } from "react-redux";
import { GiftFooter } from "../../components";
import { increase, decrease } from "../modules/counter";

const GiftFooterContainer = ({
  receiver_age,
  gift_price,
  receiver_gender,
  pageId,
  increase,
  decrease,
}) => {
  return (
    <GiftFooter
      pageId={pageId}
      receiver_age={receiver_age}
      gift_price={gift_price}
      receiver_gender={receiver_gender}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
};

export default connect(
  (state) => ({
    pageId: state.counter.pageId,
    receiver_age: state.gift.age,
    gift_price: state.gift.price,
    receiver_gender: state.gift.gender,
  }),
  {
    increase,
    decrease,
  }
)(GiftFooterContainer);
