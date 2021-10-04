import React from "react";
import { PageWrapper } from "../components";
import { KAKAO_AUTH_URL } from "../utils/constantValue";

function Login(props) {
  const kakaoLoginHandler = () => {
    window.location.assign(KAKAO_AUTH_URL);
  };
  const naverLoginHandler = () => {
    //window.location.assign(NAVER_AUTH_URL);
    window.location.assign("/");
  };

  return (
    <PageWrapper>
      <div>
        <p>로그인하세요</p>
      </div>
      <div>
        <button type='button' onClick={kakaoLoginHandler}>
          <span>카카오계정으로 로그인</span>
        </button>
      </div>
      <div>
        <button type='button' onClick={naverLoginHandler}>
          <span>네이버계정으로 로그인</span>
        </button>
      </div>
    </PageWrapper>
  );
}

export default Login;
