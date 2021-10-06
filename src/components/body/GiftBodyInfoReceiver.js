import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReplacementReceiverAction } from "../../redux/slice";
import { BodyWrapper, BrandLogo, Message, Desc } from "..";

function GiftBodyInfoReceiver() {
  const dispatch = useDispatch();
  const { receiver } = useSelector((state) => {
    return {
      receiver: state.info.receiver,
    };
  });
  const name = receiver.name;
  const contact = receiver.contact;

  const updateName = (newName) => {
    dispatch(
      createReplacementReceiverAction({
        ...receiver,
        name: newName,
      })
    );
  };
  const updateContact = (newContact) => {
    dispatch(
      createReplacementReceiverAction({
        ...receiver,
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
      <Message contents='받는 분의 정보를 알려주세요!' />
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
      {/* <GiftFooter before={props.before} next={props.next} /> */}
    </BodyWrapper>
  );
}

export default GiftBodyInfoReceiver;
