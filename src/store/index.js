import { createStore, applyMiddleware,compose } from "redux";
import {rootReducer} from "../reducer/index"
import createSagaMiddleWare from "redux-saga"

import rootSaga from "../saga/index"


const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleWare.run(rootSaga);

export {
    store
}