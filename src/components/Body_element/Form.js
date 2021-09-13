import React, { useState } from "react";
import Cookies from "js-cookie";

const Form = (props) => {
  const [value, setValue] = useState(Cookies.get(props.field));

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    Cookies.set(`${props.field}`, value);
  };

  const handleKeyDown = () => {
    console.log("keyDown");
    Cookies.set(`${props.field}`, value);
  };
  
  return (
    <div>
      {props.type !== "button" && (<label>
        {props.label}
        <input
          type={props.type}
          name={props.field}
          value={value}
          onChange={handleChange}
          placeholder={value || `${props.label}를 입력하세요.`}
          onKeyDown={handleKeyDown}
        />
      </label>)}
      {props.type === "button" && (
        <input
          type={props.type}
          name={props.field}
          value={props.label}
          onClick={handleChange}
        />)}
    </div>
    //</form>
  );
};

export default Form;
