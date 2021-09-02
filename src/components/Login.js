import React from 'react';

function Login(props) {
	const CLIENT_ID = "4bc54b0ac02e0bb38661b9a568a0f205";
	const REDIRECT_URI = "http://1d2c-211-114-223-60.ngrok.io/login/kakao";
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
	
	const kakaoLoginHandler = () => {
		window.location.assign(KAKAO_AUTH_URL)
	  }

	return (
		<div>
		<h2>로그인 페이지</h2>
		<p>로그인하세요</p>
		<button className="yellow-btn" type="button" onClick={kakaoLoginHandler}>
			<span>카카오계정으로 로그인</span>
		</button>
		</div>
	);
}

export default Login;