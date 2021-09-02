import React from 'react';

function History(props) {
	let token = localStorage.getItem('wtw-token') || '';

	fetch("http://localhost:3000/history/", {
	  headers: {
	    Authorization: token,
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