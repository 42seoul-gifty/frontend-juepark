
import React from "react";
import { connect } from "react-redux";
import { GiftBodyConfirm } from "../../components";

const ComfirmContainer = ({
  gift_age,
  gift_price,
  gift_gender,
  receiver_name,
  receiver_contact,
}) => {
  return (
    <GiftBodyConfirm
    gift_age={gift_age} 
    gift_price={gift_price} 
    gift_gender={gift_gender} 
    receiver_name={receiver_name} 
    receiver_contact={receiver_contact}/>
  );
};

export default connect(
  state => ({
    gift_age: state.gift.age,
    gift_price: state.gift.price,
    gift_gender: state.gift.gender,
    receiver_name: state.receiver.name,
    receiver_contact: state.receiver.contact,
  }),
  {
  },
  )(ComfirmContainer);