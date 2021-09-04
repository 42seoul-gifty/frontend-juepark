import React from 'react';
import { PageWrapper } from '../components';


function Main(props) {

	// check if user logged in
	const login = true;

	if (login === true) {
		window.location.assign("/gift")
	} else {
		window.location.assign("/login")
	}

	return (
		<PageWrapper>
			yourwish
		</PageWrapper>
	);
}

export default Main;