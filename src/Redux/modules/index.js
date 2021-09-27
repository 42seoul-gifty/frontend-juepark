import { combineReducers } from "redux";
import counter from "./counter";
import sender from "./sender"
import receiver from "./receiver";
import gift from "./gift";

const rootReducer = combineReducers({
	counter,
	sender,
	receiver,
	gift,
});

export default rootReducer;