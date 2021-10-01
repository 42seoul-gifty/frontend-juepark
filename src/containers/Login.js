import React from "react";
import { PageWrapper } from "../components";

function Login(props) {
  const CLIENT_ID = "4bc54b0ac02e0bb38661b9a568a0f205";
  const REDIRECT_URI =
    "http://localhost:3000/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLoginHandler = () => {
    window.location.assign(KAKAO_AUTH_URL);
  };

  return (
    <PageWrapper>
      <div>
        <p>로그인하세요</p>
      </div>
      <div>
        <button
          className='yellow-btn'
          type='button'
          onClick={kakaoLoginHandler}>
          <span>카카오계정으로 로그인</span>
        </button>
      </div>
    </PageWrapper>
  );
}

export default Login;
