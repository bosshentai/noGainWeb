import { combineReducers } from "redux";

import employeesReducer from "./slice/employees";
const reducer = combineReducers({
  employees: employeesReducer,
});

export default reducer;
