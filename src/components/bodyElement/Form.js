import React from "react";

const Form = ({ field, type, label, value, updateValue }) => {

  const handleChange = ({ target: { value } }) => {
    console.log(value);
    updateValue(value);
  };
  
  const handleKeyDown = (value) => {
    handleChange(value);
  };
  
  return (
    <div>
      {type !== "button" && (<label>
        {label}
        <input
          type={type}
          name={field}
          value={value || ''}
          onChange={handleChange}
          placeholder={value || `${label}를 입력하세요.`}
          onKeyDown={handleKeyDown}
        />
      </label>)}
      {type === "button" && (
        <input
          type={type}
          name={field}
          value={label || 'button'}
          onClick={handleChange}
        />)}
        <div>
      </div>
    </div>
  );
};

export default Form;
