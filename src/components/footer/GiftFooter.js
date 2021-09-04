import React from 'react';
import { BackButton, NextButton } from '..';

function GiftFooter(props) {
	return (
    <div>
      <p>Gift Footer</p>
      <div style={{
		  display: 'flex',
		  flexDirection: 'row'
	  }}>
        <BackButton />
		<NextButton />
      </div>
    </div>
  );
}

export default GiftFooter;