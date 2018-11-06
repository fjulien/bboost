import { combineReducers } from "redux";
import elementReducers from "./elements.js";

const allReducer = combineReducers({
elements: elementReducers,
})

export default allReducer;