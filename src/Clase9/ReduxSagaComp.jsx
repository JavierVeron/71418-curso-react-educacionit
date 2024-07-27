import { useSelector, useDispatch } from "react-redux";
import { onIncrementarAsync, onDecrementarAsync } from "./redux/CounterReducer";

const ReduxSagaComp = () => {
    const contador = useSelector(state => state);
    const dispatch = useDispatch();
    const valor = 1;

    const incrementar = () => {
        console.log("Incremento...");
        dispatch(onIncrementarAsync({valor}));
    }

    const decrementar = () => {
        console.log("Decremento...");
        dispatch(onDecrementarAsync({valor}));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Redux Saga</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar} > - </button>
                        <button type="button" className="btn btn-primary">{contador}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}> + </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduxSagaComp