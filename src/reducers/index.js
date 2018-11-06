import { combineReducers } from "redux";

import elementReducers from "./elements.js";
import filtreReducers from "./filtre";

const allReducer = combineReducers({
    elements: elementReducers,
    filtre: filtreReducers,
})

export default allReducer;