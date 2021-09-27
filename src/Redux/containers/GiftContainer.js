
import React from "react";
import { connect } from "react-redux";
import GiftBodyInfoGift from "../../components/body/GiftBodyInfoGift";
import { updateAge, updateGender, updatePrice } from "../modules/gift";

const ReceiverContainer = ({ age, gender, price, updateAge, updateGender, updatePrice }) => {
  return (
    <GiftBodyInfoGift age={age} gender={gender} price={price} updateAge={updateAge} updateGender={updateGender} updatePrice={updatePrice} />
  );
};

export default connect(
  state => ({
    name: state.receiver.name,
    contact: state.receiver.contact,
  }),
  {
    updateAge, 
    updateGender, 
    updatePrice
  },
  )(ReceiverContainer);