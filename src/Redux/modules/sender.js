//액션 타입 정하기 => 모듈이름/타입이름 형식
const UPDATE_NAME = 'sender/UPDATE_NAME';

// 액션 생성 함수
export const updateName = (name) => {
	console.log(name);
  return {
    type: UPDATE_NAME,
    name,
  };
};

const initialState = {
	name: "박주은",
	contact: "01095996425"
};

function sender(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case UPDATE_NAME:
			return {
				...state,
				name: action.name
			};
		default:
			return state;
	}
}

export default sender;