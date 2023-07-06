// root reducer
// import all the reducers here


import changeTheNumber from "./incrDecr";

import {combineReducers} from "redux";

const rootReducer=combineReducers({
    changeTheNumber
})


export default rootReducer;
