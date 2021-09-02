import React from 'react';
// import { useState } from 'react';
import { useState } from 'react';

function KakaoCallback(props) {
	let code = new URL(window.location.href).searchParams.get('code');
	let [result, setResult] = useState("loading...");

	async function getResult(){

		setResult("get token");

		const fetchedData = await fetch('http://82f8-125-133-83-39.ngrok.io/auth',
		{
		 	method: 'GET',
			headers: {
				'Authorization': code,
				'Origin': "http://6221-211-114-223-60.ngrok.io",
			}
		})
		.then(result => result.json())
		.then(data => {
			return data;
		})
		.catch((error) => console.log(error))

		console.log(fetchedData);

		// await fetch('http://82f8-125-133-83-39.ngrok.io', {
		// 	method: 'GET',
		//   })
		//   .then(response => {
		// 	  console.log(response.json());
		// 	  //console.log(JSON.stringify(response.data));
		// 	//   setResult(response.data.access_token);
		// 	})
		//   .catch(error => {
		// 	  console.log(error)
		// 		//   window.alert("로그인에 실패하였습니다.");
		// 		//   window.location.assign("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
		// 	}) 
		
		// fetch('http://82f8-125-133-83-39.ngrok.io', {
		// 	method: 'GET',
		// 	headers: {
		// 		'Authorization': code,
		// 		'Origin': "http://6221-211-114-223-60.ngrok.io",
		// 	}
		//   })
		//   .then(response => console.log(response))
		//   .catch(error => {
		// 	  console.log(error)
		// 		//   window.alert("로그인에 실패하였습니다.");
		// 		//   window.location.assign("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
		// 	}) 

		//   .then(response => {
		// 	if (response.token) {
			//const ACCESS_TOKEN = res.data.access_token;
			//   const REFRESH_TOKEN = res.data.refresh_token;
			//   localStorage.setItem("access_token", ACCESS_TOKEN);    //예시로 로컬에 저장함    
			//   localStorage.setItem("refresh_token", REFRESH_TOKEN);    //예시로 로컬에 저장함    
			//   window.location.assign("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
		// 	}
		//   })






		// localStorage.setItem("access_token", "AAAAAAAAAAAAAAAA");
		// localStorage.setItem("refresh_token", "RRRRRRRRRRRRRRRR");
		//-------------------------------------------------------------
		
		// console.log("test");
		// try {
		// 	const axios_result = await axios({
		// 		method: "GET",
		// 		url: `http://82f8-125-133-83-39.ngrok.io/auth`,
		// 	 	headers: {
		// 	 		"Authorization": code
		// 	 	}
		// 	 })
		// } catch(err) {
		// 	console.error(err);
		// }
		// console.log(axios_result);
				// .then((res) => {
				//   console.log(res); // 토큰이 넘어올 것임
				//   const ACCESS_TOKEN = res.data.access_token;
				//   const REFRESH_TOKEN = res.data.refresh_token;
				//   localStorage.setItem("access_token", ACCESS_TOKEN);    //예시로 로컬에 저장함    
				//   localStorage.setItem("refresh_token", REFRESH_TOKEN);    //예시로 로컬에 저장함    
				//   window.location.assign("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
				//   }).catch((err) => {
				//   console.log("소셜로그인 에러", err);
				//   window.alert("로그인에 실패하였습니다.");
				//   window.location.assign("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
				//   })
		
		// axios({
		// 	method: "GET",
		// 	url: `http://82f8-125-133-83-39.ngrok.io/auth`,
		//  	headers: {
		//  		"Authorization": code
		//  	}
		//  })
		// 	.then((res) => {
		// 	  console.log(res); // 토큰이 넘어올 것임
		// 	  const ACCESS_TOKEN = res.data.access_token;
		// 	  const REFRESH_TOKEN = res.data.refresh_token;
		// 	  localStorage.setItem("access_token", ACCESS_TOKEN);    //예시로 로컬에 저장함    
		// 	  localStorage.setItem("refresh_token", REFRESH_TOKEN);    //예시로 로컬에 저장함    
		// 	  window.location.assign("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
		// 	  }).catch((err) => {
		// 	  console.log("소셜로그인 에러", err);
		// 	  window.alert("로그인에 실패하였습니다.");
		// 	  window.location.assign("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
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

export default KakaoCallback;