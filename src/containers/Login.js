import React from 'react';
import { PageWrapper } from '../components';

function Login(props) {
	const CLIENT_ID = "e4c6fc1232c62e4be504c0db75b0f33f";
	const REDIRECT_URI = "https://gifty-hseo.netlify.app/login/kakao";
	// const REDIRECT_URI = window.REDIRECT_URI;
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
	
	const kakaoLoginHandler = () => {
		window.location.assign(KAKAO_AUTH_URL)
	  }

	return (
		<PageWrapper>
			<p>로그인하세요</p>
			<button className="yellow-btn" type="button" onClick={kakaoLoginHandler}>
				<span>카카오계정으로 로그인</span>
			</button>
		</PageWrapper>
	);
}

export default Login;