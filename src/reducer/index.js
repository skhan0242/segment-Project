import { combineReducers } from "redux";
import {addAttributes} from "./addAttributes"


const rootReducer = combineReducers({
    seletedAttributes:addAttributes
});

export{
    rootReducer
}