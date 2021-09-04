import React from 'react';
import { BasicButton } from '..';

function NextButton(props) {

	const button = BasicButton("다음으로"); 

	return (
		<div>
			{button}
		</div>
  );
}
export default NextButton;