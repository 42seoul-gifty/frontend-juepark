import React from 'react';

function BasicButton(props) {
	return (
    <div>
      <button onClick={() => props.do()}>{props.text}</button>
    </div>
  );
}

export default BasicButton;