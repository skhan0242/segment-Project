import {productKeys} from "../constant"

const addAttributes = (state=[], action) =>{
    switch(action.type){
        case productKeys.ADD_ATTRIBUTES:
        return{
            ...state,
            ...action.data
        }
        default:
        return state
    }
}

export {
    addAttributes
}