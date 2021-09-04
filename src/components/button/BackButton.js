import React from 'react';
import { BasicButton } from '..';

function BackButton(props) {
	const button = BasicButton("돌아가기");

	return <div>{button}</div>;
}
export default BackButton;