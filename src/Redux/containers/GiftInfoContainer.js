
import React from "react";
import { connect } from "react-redux";
import GiftBodyInfoGift from "../../components/body/GiftBodyInfoGift";
import { updateAge, updateGender, updatePrice } from "../modules/gift";

const ReceiverInfoContainer = ({ age, gender, price, updateAge, updateGender, updatePrice }) => {
  return (
    <GiftBodyInfoGift age={age} gender={gender} price={price} updateAge={updateAge} updateGender={updateGender} updatePrice={updatePrice} />
  );
};

export default connect(
  state => ({
    age: state.gift.age,
    gender: state.gift.gender,
    price: state.gift.price,
  }),
  {
    updateAge, 
    updateGender, 
    updatePrice
  },
  )(ReceiverInfoContainer);