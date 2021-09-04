import React from 'react';

function History(props) {
	let access_token = localStorage.getItem('access_token') || '';
	let refresh_token = localStorage.getItem('refresh_token') || '';

	async function getData(){
	const fetchedData = await fetch("http://82f8-125-133-83-39.ngrok.io/profile", 
	{
		method: 'GET',
	  	headers: {
	    	"AccessToken": access_token,
	    	"RefreshToken": refresh_token
	  		},
	})
	  .then(async (response) => 
	  {
		  const result = await response.json();
		  console.log(result);
		})
	  .then(data => {
		  return data;
	  })

	  console.log(fetchedData);
	}
	

	return (
		<div>
			History
			<div>
				<button onClick={getData}>
					get data(history)
				</button>
			</div>
		</div>
	);
}

export default History;