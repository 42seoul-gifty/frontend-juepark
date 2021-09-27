//액션 타입 정하기 => 모듈이름/타입이름 형식
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
	pageId: 0
};

function counter(state = initialState, action) {
	switch (action.type) {
		case INCREASE:
			return {
				pageId: state.pageId + 1
			};
		case DECREASE:
			return {
				pageId: state.pageId - 1
			};
		default:
			return state;
	}
}

export default counter;