//액션 타입 정하기 => 모듈이름/타입이름 형식
const UPDATE_GENDER = 'gift/UPDATE_GENDER';
const UPDATE_AGE = 'gift/UPDATE_AGE';
const UPDATE_PRICE = 'gift/UPDATE_PRICE';

// 액션 생성 함수
export const updateGender = (gender) => {
	console.log(gender);
  return {
    type: UPDATE_GENDER,
    gender,
  };
};

export const updateAge = (age) => {
	console.log(age);
  return {
    type: UPDATE_AGE,
    age,
  };
};

export const updatePrice = (price) => {
	console.log(price);
  return {
    type: UPDATE_PRICE,
    price,
  };
};

const initialState = {
	gender: "",
	age: 0,
	price: 0,
};

function gift(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case UPDATE_GENDER:
			return {
				...state,
				gender: action.gender
			};
		case UPDATE_AGE:
			return {
				...state,
				age: action.age
			};
		case UPDATE_PRICE:
			return {
				...state,
				price: action.price
			};
		
		default:
			return state;
	}
}

export default gift;