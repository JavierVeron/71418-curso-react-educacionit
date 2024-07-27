// Acciones
export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';
export const INCREMENTAR_ASYNC = 'INCREMENTAR_ASYNC';
export const DECREMENTAR_ASYNC = 'DECREMENTAR_ASYNC';

export const onIncrementarAsync = ({response}) => ({
    type:INCREMENTAR_ASYNC,
    response
})

export const onDecrementarAsync = ({response}) => ({
    type:DECREMENTAR_ASYNC,
    response
})

// Reducer
function CounterReducer(state = 0, action) {
    switch(action.type) {
        case INCREMENTAR:
            return state + action.response;
        case DECREMENTAR:
            return state - action.response;
        default:
            return state;
    }
}

export default CounterReducer;