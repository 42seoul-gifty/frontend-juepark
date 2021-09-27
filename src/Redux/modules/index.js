import { combineReducers } from "redux";
import counter from "./counter";
import sender from "./sender"

const rootReducer = combineReducers({
	counter,
	sender
});

export default rootReducer;