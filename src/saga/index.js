import {takeEvery, call, take, put, fork} from "redux-saga/effects";
import {productKeys} from "../constant";
import {addAttributes} from "../action"
import {addAttributeApi} from "../api"

// worker saga
function* handleAddUsers(action){
    try {
        const attr = yield call(addAttributes, action.data);
        const selectedData = yield call(addAttributeApi , attr);
        put(addAttributes(selectedData));
    } catch (error) {
        console.log(error)
        }
    }


// watcher saga
function* rootSaga(){
    yield takeEvery(productKeys.ADD_ATTRIBUTES, handleAddUsers);
}

// watcher saga - actions - worker saga

export default rootSaga;