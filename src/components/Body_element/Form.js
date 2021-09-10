import React, {useState} from 'react';

const Form = (props) => {
	const FIELD_NAME = props.field;
	const [ value, setValue ] = useState(localStorage.FIELD_NAME);
  
	const handleChange = ({ target: { value }}) => {
	  setValue(value);
		localStorage.setItem(props.field, value);    //예시로 로컬에 저장함    
	};
  
	const handleSubmit = (event) => {
	  event.preventDefault();
	}

	  console.log(props)
	  return (
		<form onSubmit={handleSubmit} autoComplete="on">
			<label>
			{props.label}
			<input
			  type={props.type}
			  name={props.field}
			  value={value}
			  onChange={handleChange}
			  placeholder={value || `${props.label}를 입력하세요.`}
			/>
			</label>
		</form>
	  );
	};

export default Form;