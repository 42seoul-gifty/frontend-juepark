import React from "react";
import { connect } from "react-redux";
import { GiftBodyConfirm } from "../../components";

const ComfirmContainer = ({
  receiver_age,
  gift_price,
  receiver_gender,
  receiver_name,
  receiver_contact,
}) => {
  return (
    <GiftBodyConfirm
      receiver_age={receiver_age}
      gift_price={gift_price}
      receiver_gender={receiver_gender}
      receiver_name={receiver_name}
      receiver_contact={receiver_contact}
    />
  );
};

export default connect(
  (state) => ({
    receiver_age: state.gift.age,
    gift_price: state.gift.price,
    receiver_gender: state.gift.gender,
    receiver_name: state.receiver.name,
    receiver_contact: state.receiver.contact,
  }),
  {}
)(ComfirmContainer);
