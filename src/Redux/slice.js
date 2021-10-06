//1. 일단 슬라이스를 만든다.
//restart ts server

import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "info",
  initialState: {
    receiver: {
      name: "받는사람",
      contact: "01095996425",
      email: "joso0702@naver.com",
      gender: 0,
      age: 0,
    },
    sender: {
      name: "보내는사람",
      contact: "01024155544",
    },
    gift: {
      price: 0,
    },
  },
  reducers: {
    replacementReceiver(state, action) {
      state.receiver = action.payload;
    },
    replacementSender(state, action) {
      state.sender = action.payload;
    },
    replacementGift(state, action) {
      state.gift = action.payload;
    },
  },
});

// 실제로 사용할 리듀서 (Reducer)
export const infoReducer = slice.reducer;

// 사용할 액션을 만들어주는 함수 (ActionCreator)
// 액션의 이름이 리듀서 만들 때 이름이랑 같아서 헷갈리니까,
// create...Action 으로 개명해서 export 시킨다.
export const {
  replacementReceiver: createReplacementReceiverAction,
  replacementSender: createReplacementSenderAction,
  replacementGift: createReplacementGiftAction,
} = slice.actions;

export const store = configureStore({
  reducer: {
    info: infoReducer,
  },
});

// 😇rename symbol 쓰기^^😇
