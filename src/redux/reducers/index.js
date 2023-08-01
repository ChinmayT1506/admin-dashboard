import { combineReducers } from "redux";
import { getData } from "./DepartmentReducer"

export const reducers = combineReducers({
    gdata: getData
})