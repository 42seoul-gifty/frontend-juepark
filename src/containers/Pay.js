import React from "react";
import { useSelector } from "react-redux";
import apiPay from "../api/apiPay";

function Pay(props) {
  const { sender } = useSelector((state) => {
    return {
      sender: state.info.sender,
    };
  });
  const name = sender.name;
  const email = sender.email;

  const onClickPayment = () => {
    const IMP = window.IMP;
    const MerchantID = "imp49395138";
    IMP.init(MerchantID);
    // IMP.request_pay(param, callback) 결제창 호출
    const data = {
      // param
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      name: "기프티로 선물하기",
      amount: 10,
      buyer_email: `${email}`,
      buyer_name: `${name}`,
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181",
    };
    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { success, error_msg, imp_uid, merchant_uid } = response;

    if (success) {
      alert("success");
      //post 테스트 필요
      apiPay(imp_uid, merchant_uid);
    } else {
      console.log(error_msg);
      alert("fail");
    }
  };

  return (
    <div>
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
}

export default Pay;
