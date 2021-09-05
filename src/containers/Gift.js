// import React from 'react';
import React from 'react';
import { PageWrapper, GiftFooter } from '../components';
import { GiftBody } from '../components';

function Gift(props) {
	const pathname = window.location.pathname;
	console.log(pathname);
	let body = "gift body road error";
	let next = "/";
	if (pathname === "/gift/info_sender") {
		body = <GiftBody pathname={pathname} />;
		next = "/gift/info_receiver";
	} else if (pathname === "/gift/info_receiver") {
		body = <GiftBody pathname={pathname} />;
		next = "/gift/info_gift";
	} else if (pathname === "/gift/info_gift") {
		body = <GiftBody pathname={pathname} />;
		next = "/gift/confirm";
	} else if (pathname === "/gift/confirm") {
		body = <GiftBody pathname={pathname} />;
		next = "/gift/finish";
	} else if (pathname === "/gift/finish") {
		body = <GiftBody pathname={pathname} />;
		next = "/gift";
	} else {
		body = <GiftBody pathname={pathname} />;
		next = "gift/info_sender";
	}

	return (
		<PageWrapper>
			<div>
				{body}
				{pathname === "/gift/finish" ? (
					<GiftFooter next={next} backText="홈으로" nextText="다른 선물하러가기" />
				) : (
					<GiftFooter next={next} />
				)}
			</div>
		</PageWrapper>
	);
}

export default Gift;