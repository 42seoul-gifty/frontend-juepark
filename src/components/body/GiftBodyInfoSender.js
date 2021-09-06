import React from "react";
import { BodyWrapper, GiftFooter, Logo, Message, Desc } from "..";

function GiftBodyInfoSender(props) {

  const Form = () => {
    return (
      <form>
        <label>
          <p>Form:</p>
          <input type='text' name='name' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  };

  return (
    <BodyWrapper>
      <Logo />
      <Message contents="보내시는 분의 정보를 알려주세요!"/>
      <Desc contents="간편한 클릭으로 선물 정보 입력 끝!" />
      <Form inside="이름" key="name"/>
      <Form inside="연락처" key="contact"/>
      <GiftFooter next={props.next} />
    </BodyWrapper>
  );
}

export default GiftBodyInfoSender;
