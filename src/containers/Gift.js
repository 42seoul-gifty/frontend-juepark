// import React from 'react';
import React from 'react';
import { PageWrapper } from '../components';
import {
  GiftBody,
  GiftBodyConfirm,
  GiftBodyFinish,
  GiftBodyInfoReceiver,
  GiftBodyInfoSender,
  GiftBodyInfoGift,
} from "../components";

function Gift(props) {
	const pathname = window.location.pathname;
	console.log(pathname);
	let body = "gift body road error";
	if (pathname === "/gift/info_sender") {
		body = <GiftBodyInfoSender pagename="info_sender" next="/gift/info_receiver"/>;
	} else if (pathname === "/gift/info_receiver") {
		body = <GiftBodyInfoReceiver pagename="info_receiver" next="/gift/info_gift"/>;
	} else if (pathname === "/gift/info_gift") {
		body = <GiftBodyInfoGift pagename="info_gift" next="/gift/confirm"/>;
	} else if (pathname === "/gift/confirm") {
		body = <GiftBodyConfirm pagename="confirm" next="/gift/finish"/>;
	} else if (pathname === "/gift/finish") {
		body = <GiftBodyFinish pagename="finish" next="/gift"/>;
	} else {
		body = <GiftBody pagename="gift" next="gift/info_sender"/>;
	}

	return (
		<PageWrapper>
			<div>
				{body}
			</div>
		</PageWrapper>
	);
}

export default Gift;