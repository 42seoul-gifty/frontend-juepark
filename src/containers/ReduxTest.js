import React from "react";

const ReduxTest = ({ number, onIncrease, onDecrease }) => {
	return (
		<div>
			<p>
			{number}
			</p>
			<div> 
				<button onClick={onIncrease}> +1 </button>
				<button onClick={onDecrease}> -1 </button>
			</div>
		</div>
	);
}

export default ReduxTest;