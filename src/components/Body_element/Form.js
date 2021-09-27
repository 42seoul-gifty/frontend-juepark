import React from "react";

const Form = ({ field, type, label, name, updateName }) => {

  const handleChange = ({ target: { value } }) => {
    console.log(value);
    updateName(value);
  };
  
  const handleKeyDown = () => {
    console.log(name);
    //updateName(name);
  };
  
  return (
    <div>
      {type !== "button" && (<label>
        {label}
        <input
          type={type}
          name={field}
          value={name || ''}
          onChange={handleChange}
          placeholder={name || `${label}를 입력하세요.`}
          onKeyDown={handleKeyDown}
        />
      </label>)}
      {type === "button" && (
        <input
          type={type}
          name={field}
          value={label || ''}
          onClick={handleChange}
        />)}
        <div>
      </div>
    </div>

  );
};

export default Form;
