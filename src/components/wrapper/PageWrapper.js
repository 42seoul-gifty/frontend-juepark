import React from 'react';

const PageWrapper = ({children}) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				minWidth: '300px',
				minHeight: '500px',
				border: '0.5px solid black'
			}}>
			{children}
		</div>
	);
}

export default PageWrapper;