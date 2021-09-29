import React from "react";
import { connect } from "react-redux";
import Gift from "../../containers/Gift";

const GiftContainer = ({ pageId }) => {
  return (
    <Gift pageId={pageId} />
  );
};

export default connect(
  state => ({
    pageId: state.counter.pageId,
  }),
  {
  },
  )(GiftContainer);
