import { useState } from "react";
import {createStore} from "redux"

function contar(estado = 0, accion) {
    switch (accion.type) {
        case "INCREMENT":
            return estado + 1;
        case "DECREMENT":
            return estado - 1;
        default:
            return estado;
    }
}

let store = createStore(contar);

const Contador = () => {
    const [contador, setContador] = useState(store.getState());

    const incrementar = () => {
        store.dispatch({type:"INCREMENT"});
    }
    
    const decrementar = () => {
        store.dispatch({type:"DECREMENT"});
    }

    store.subscribe(() => {
        setContador(store.getState());
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h1>Contador: {contador}</h1>
                    <button className="btn btn-primary mx-1" onClick={incrementar}>Incrementar (+)</button>
                    <button className="btn btn-secondary mx-1" onClick={decrementar}>Decrementar (-)</button>
                </div>
            </div>
        </div>
    )
}

export default Contador