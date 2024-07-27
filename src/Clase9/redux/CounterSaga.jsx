import { put, call, takeEvery, all } from "redux-saga/effects"
import { INCREMENTAR, DECREMENTAR, INCREMENTAR_ASYNC, DECREMENTAR_ASYNC } from "./CounterReducer" 

// Definimos una función que simulamos consulta una API
const API = (valor) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Valor", valor);
            resolve(valor)
        }, 2000)
    })
}

// Workers de las Acciones
function * incrementarAsync({valor}) {
    const response = yield call(API, valor);
    yield put ({
        type:INCREMENTAR,
        response,
    });
}

function * decrementarAsync({valor}) {
    const response = yield call(API, valor);
    yield put ({
        type:DECREMENTAR,
        response,
    });
}

// Watchers de los Workers
function * watcherIncrementarAsync() {
    yield takeEvery(INCREMENTAR_ASYNC, incrementarAsync);
}

function * watcherDecrementarAsync() {
    yield takeEvery(DECREMENTAR_ASYNC, decrementarAsync);
}

// Root Saga
export function * rootSaga() {
    yield all([watcherIncrementarAsync(), watcherDecrementarAsync()]);
}