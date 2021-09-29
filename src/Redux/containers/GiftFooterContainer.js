import React from "react";
import { connect } from "react-redux";
import { GiftFooter } from "../../components";
import { increase, decrease } from "../modules/counter";

const GiftFooterContainer = ({
  gift_age,
  gift_price,
  gift_gender,
  pageId,
  increase,
  decrease
}) => {
  return (
    <GiftFooter
    pageId={pageId}
    gift_age={gift_age} 
    gift_price={gift_price} 
    gift_gender={gift_gender} 
    onIncrease={increase}
    onDecrease={decrease}
    />
  );
};

export default connect(
  state => ({
    pageId: state.counter.pageId,
    gift_age: state.gift.age,
    gift_price: state.gift.price,
    gift_gender: state.gift.gender,
  }),
  {
    increase,
    decrease
  },
  )(GiftFooterContainer);