import React from 'react';
import { useState } from 'react';
// import { useState, axios } from 'react';

function Login(props) {
	let code = new URL(window.location.href).searchParams.get('code');
	let [result, setResult] = useState("loading...");

	function getResult(){
		setResult("get token");
		localStorage.setItem("wtw-token", "AAAAAAAAAAAAAAAA");
		//localStorage.setItem("wtw-token", "nlWQKOa4mKjdbVtnJD4XS4FJeu9SYtM87ILDRQo9dBEAAAF7o_wK4A");
		// axios({
		// 	method: "GET",
		// 	url: `http://3.35.208.142/oauth/callback/kakao?code=${code}`,
		//   })
		// 	.then((res) => {
		// 	  console.log(res); // 토큰이 넘어올 것임
		// 	  const ACCESS_TOKEN = res.data.accessToken;
		// 	  localStorage.setItem("token", ACCESS_TOKEN);    //예시로 로컬에 저장함    
		// 	  window.location.assign("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
		// 	  }).catch((err) => {
		// 	  console.log("소셜로그인 에러", err);
		// 	  window.alert("로그인에 실패하였습니다.");
		// 	  window.location.assign("/auth"); // 로그인 실패하면 로그인화면으로 돌려보냄
		// 	  })
	}
	
	return (
		<div>
			<div>
				<p>
					Login redirect uri
				</p>
				<p>
					인가코드: {code}
				</p>
			</div>
			<div>
				<button onClick={getResult}>
					send code to backend
				</button>
			</div>
			<div>
				[[[ {result} ]]]
			</div>
		</div>
	);
}

export default Login;