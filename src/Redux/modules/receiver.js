//액션 타입 정하기 => 모듈이름/타입이름 형식
const UPDATE_NAME = "receiver/UPDATE_NAME";
const UPDATE_CONTACT = "receiver/UPDATE_CONTACT";

// 액션 생성 함수
export const updateName = (name) => {
  console.log(name);
  return {
    type: UPDATE_NAME,
    name,
  };
};

export const updateContact = (contact) => {
  console.log(contact);
  return {
    type: UPDATE_CONTACT,
    contact,
  };
};

const initialState = {
  name: "받는이",
  contact: "01011112222",
};

function receiver(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contact: action.contact,
      };
    default:
      return state;
  }
}

export default receiver;
