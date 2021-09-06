import React from "react";
import { BodyWrapper } from "..";
import { GiftFooter } from "..";

function GiftBodyInfoReceiver(props) {

  const Image = () => {
    return (
      <span
        role='img'
        aria-label='present'
        style={{
          margin: "0px !important",
          display: "inline !important",
          height: "auto",
          width: "100px",
          fontSize: "100px",
          verticalAlign: "middle",
          lineHeight: "2",
        }}>
        🎁
      </span>
    );
  };
  const Title = () => {
    return <h1>{props.pagename}</h1>;
  };
  const Desc = () => {
    return <p>description</p>;
  };
  const Form = () => {
    return (
		<form>
			<label>
				<p>Form:</p>
				<input type="text" name="name" />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
  };

  return (
    <BodyWrapper>
      <Image />
      <Title />
      <Desc />
      <Form />
        <GiftFooter next={props.next} />
    </BodyWrapper>
  );
}

export default GiftBodyInfoReceiver;
