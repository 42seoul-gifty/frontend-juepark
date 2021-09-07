import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function KakaoCallback(props) {
	let code = new URL(window.location.href).searchParams.get('code');
	let [result, setResult] = useState("loading...");

	async function getResult(){
		// const history = useHistory();
		setResult("get token");

		const fetchedData = await fetch('http://82f8-125-133-83-39.ngrok.io/auth',
		{
		 	method: 'GET',
			headers: {
				'Authorization': code,
			}
		})
		.then(async res => {
			const result = await res.json()
			console.log(result);
			const ACCESS_TOKEN = result.data.access_token;
			const REFRESH_TOKEN = result.data.refresh_token;
			localStorage.setItem("access_token", ACCESS_TOKEN);    //예시로 로컬에 저장함    
			localStorage.setItem("refresh_token", REFRESH_TOKEN);    //예시로 로컬에 저장함    
			window.location.assign("/")
			// history.goBack();
		})
		.then(data => {
			return data;
		})
		.catch((error) => console.log(error))
		.finally(() => {
			// history.goBack();
			window.location.assign("/")
		})
		console.log(fetchedData);
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