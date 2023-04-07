import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import toDoListReducer from "./toDoListReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    toDoList: toDoListReducer,
    users: userReducer,
})

export default rootReducer;