import React from "react";
import { connect } from "react-redux";
import Gift from "../../containers/Gift";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ pageId, increase, decrease }) => {
  return (
    <Gift pageId={pageId} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  state => ({
    pageId: state.counter.pageId,
  }),
  {
    increase,
    decrease,
  },
  )(CounterContainer);
