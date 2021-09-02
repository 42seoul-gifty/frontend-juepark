import React from 'react';

function History(props) {
	let access_token = localStorage.getItem('access_token') || '';
	let refresh_token = localStorage.getItem('refresh_token') || '';

	fetch("http://localhost:3000/history/", {
	  headers: {
	    "access_token": access_token,
	    "refresh_token": refresh_token
	  },
	})
	  .then((response) => response.json())
	  .then((response) => {
	    console.log(response.data);
	  });

	return (
		<div>
			History
		</div>
	);
}

export default History;