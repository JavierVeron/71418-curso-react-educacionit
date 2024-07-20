// Acciones
export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';
export const INCREMENTAR_ASYNC = 'INCREMENTAR_ASYNC';
export const DECREMENTAR_ASYNC = 'DECREMENTAR_ASYNC';

export const onIncrementarAsync = (valor) => ({
    type:INCREMENTAR_ASYNC,
    payload:valor
})

export const onDecrementarAsync = (valor) => ({
    type:DECREMENTAR_ASYNC,
    payload:valor
})

// Reducer
function CounterReducer(state = 0, action) {
    switch(action.type) {
        case INCREMENTAR:
            return {
                state: state + action.payload
            }
        case DECREMENTAR:
            return {
                state: state - action.payload
            }
        default:
            return state;
    }
}

export default CounterReducer;