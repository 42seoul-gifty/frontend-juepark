import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createReplacementReceiverAction,
  createReplacementGiftAction,
} from "../../redux/slice";
import { BodyWrapper, BrandLogo, Message, Desc } from "..";

function GiftBodyInfoGift() {
  const dispatch = useDispatch();
  const { receiver, gift } = useSelector((state) => {
    return {
      gift: state.info.gift,
      receiver: state.info.receiver,
    };
  });
  const age = receiver.age;
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
    // console.log(value);
    updatePrice(value);
  };
  const handleAgeChange = ({ target: { value } }) => {
    // console.log(value);
    updateAge(value);
  };

  return (
    <BodyWrapper>
      <BrandLogo />
      <Message contents='받는 분의 정보를 입력해주세요!' />
      <Desc contents='받는 사람 선물 정보입력' />
      <div>
        <input
          type='radio'
          id='male'
          name='gender'
          value='남'
          onClick={() => updateGender("male")}
        />
        <label htmlFor='male'>남</label>
      </div>
      <div>
        <input
          type='radio'
          id='female'
          name='gender'
          value='여'
          onClick={() => updateGender("female")}
        />
        <label htmlFor='female'>여</label>
      </div>

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
    </BodyWrapper>
  );
}

export default GiftBodyInfoGift;
