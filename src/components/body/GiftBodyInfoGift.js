import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createReplacementReceiverAction,
  createReplacementGiftAction,
} from "../../redux/slice";
import { BodyWrapper, BrandLogo, Message, Desc, Form } from "..";

function GiftBodyInfoGift() {
  const dispatch = useDispatch();
  const { receiver, gift } = useSelector((state) => {
    return {
      gift: state.info.gift,
      receiver: state.info.receiver,
    };
  });
  const age = receiver.age;
  const gender = receiver.gender;
  const price = gift.price;

  const updateAge = (newAge) => {
    dispatch(
      createReplacementReceiverAction({
        ...receiver,
        age: newAge,
      })
    );
  };
  const updateGender = (newGender) => {
    dispatch(
      createReplacementReceiverAction({
        ...receiver,
        gender: newGender,
      })
    );
  };
  const updatePrice = (newPrice) => {
    dispatch(
      createReplacementGiftAction({
        ...gift,
        price: newPrice,
      })
    );
  };
  const handlePriceChange = ({ target: { value } }) => {
    console.log(value);
    updatePrice(value);
  };
  const handleAgeChange = ({ target: { value } }) => {
    console.log(value);
    updateAge(value);
  };

  return (
    <BodyWrapper>
      <BrandLogo />
      <Message contents='받는 분의 정보를 입력해주세요!' />
      <Desc contents='받는 사람 선물 정보입력' />
      <Form
        label='남'
        field='receiver_gender'
        type='button'
        vlaue={gender}
        updateValue={updateGender}
      />
      <Form
        label='여'
        field='receiver_gender'
        type='button'
        vlaue={gender}
        updateValue={updateGender}
      />
      {/* <Form
        label='나이'
        field='receiver_age'
        type='number'
        value={age}
        updateValue={updateAge}
      /> */}
      <p>나이</p>
      <input
        type='number'
        name='age'
        value={age || ""}
        onChange={handleAgeChange}
        placeholder={age || "금액을 입력하세요."}
      />
      <p>금액</p>
      <input
        type='number'
        name='price'
        value={price || ""}
        onChange={handlePriceChange}
        placeholder={price || "금액을 입력하세요."}
      />
      {/* <Form
        label='가격대'
        field='gift_price'
        type='number'
        value={price}
        updateValue={updatePrice}
      /> */}
      {/* <GiftFooter before={props.before} next={props.next} /> */}
    </BodyWrapper>
  );
}

export default GiftBodyInfoGift;
