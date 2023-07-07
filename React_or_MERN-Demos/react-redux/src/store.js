// import {createStore} from "redux"; | createStore is depreceated so I used legacy_createStore
import { legacy_createStore as createStore } from 'redux';

import rootReducer from "./reducers";

const store =createStore(rootReducer);

export default store;