import React from 'react';
import { BasicButton } from '..';

function NextButton(props) {

	return <BasicButton do={() => window.location.assign(props.next)} text={props.text || "다음으로"}/>
}
export default NextButton;