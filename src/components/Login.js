import { React, useState } from 'react';

function Login(props) {
	let code = new URL(window.location.href).searchParams.get('code');
	const [ result, setResult ] = useState("loading...");

	function getResult(){
		console.log("print result");
		setResult("update result - handle token");
		// axios({
		// 	method: "GET",
		// 	url: `??`,
		// })
		// 	.then((res) => {
		// 		console.log(res);
		// 		result = "get token"; 
		// 	})
		// 	.catch((res) => {
		// 		console.log(res);
		// 		result = "get error"; 
		// 	})
	}
	
	return (

		<div>
			Login redirect uri
			{code}
			<button onClick={getResult}>
				send code to backend
			</button>
			result is {result}
		</div>
	);
}

export default Login;