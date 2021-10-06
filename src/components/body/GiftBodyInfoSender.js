import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReplacementSenderAction } from "../../redux/slice";
import { BodyWrapper, BrandLogo, Message, Desc } from "..";

const GiftBodyInfoSender = () => {
  const dispatch = useDispatch();
  const { sender } = useSelector((state) => {
    return {
      sender: state.info.sender,
    };
  });
  const name = sender.name;
  const contact = sender.contact;

  const updateName = (newName) => {
    dispatch(
      createReplacementSenderAction({
        ...sender,
        name: newName,
      })
    );
  };
  const updateContact = (newContact) => {
    dispatch(
      createReplacementSenderAction({
        ...sender,
        contact: newContact,
      })
    );
  };

  const handleNameChange = ({ target: { value } }) => {
    // console.log(value);
    updateName(value);
  };

  const handleContactChange = ({ target: { value } }) => {
    // console.log(value);
    updateContact(value);
  };

  return (
    <BodyWrapper>
      <BrandLogo />
      <Message contents='보내시는 분의 정보를 알려주세요!' />
      <Desc contents='간편한 클릭으로 선물 정보 입력 끝!' />
      <p>이름</p>
      <input
        type='text'
        name='name'
        value={name || ""}
        onChange={handleNameChange}
        placeholder={name || "이름를 입력하세요."}
      />
      <p>전화번호</p>
      <input
        type='tel'
        name='contact'
        value={contact || ""}
        onChange={handleContactChange}
        placeholder={contact || "전화번호를 입력하세요."}
      />
      {/* <GiftFooter before={before} next={next} /> */}
    </BodyWrapper>
  );
};

export default GiftBodyInfoSender;
