import React from 'react';
import { BasicButton } from '..';
import { useHistory } from "react-router-dom";

function BackButton(props) {
	let history = useHistory();
	return <BasicButton do={() => history.goBack()} text={props.text || "돌아가기"}/>
}
export default BackButton;