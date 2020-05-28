import { combineReducers } from "redux";
import todosReducer from "./todos_reducers";
import stepsReducer from "./steps_reducers"
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  todos:todosReducer,
  steps:stepsReducer,
  session: sessionReducer
})

export default rootReducer;