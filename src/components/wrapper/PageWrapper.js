import React from 'react';

const PageWrapper = ({children}) => {
	return (
		<div
			style={{
				display: 'flex',
				backgroundColor: 'skyblue',
				paddingLeft: 30,
				paddingRight: 30,
				paddingTop: 300,
				paddingBottom: 300,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			{children}
		</div>
	);
}

export default PageWrapper;