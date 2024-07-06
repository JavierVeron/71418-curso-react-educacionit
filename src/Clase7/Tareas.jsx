import { useState } from "react";
import {createStore} from "redux";

const tasks = [
    {id:1, nombre:"Desayunar", completado:true},
    {id:2, nombre:"Estudiar", completado:true},
    {id:3, nombre:"Almorzar", completado:false},
    {id:4, nombre:"Dormir Siesta", completado:false},
    {id:5, nombre:"Merendar", completado:true},
    {id:6, nombre:"Cenar", completado:false}
]

const tasksReducer = (prevState = tasks, action) => {
    switch(action.type) {
        case "SHOW_COMPLETED":
            return {
                ...prevState,
                filtered:tasks.filter(item => item.completado === action.payload)
            }
        case "SHOW_ALL":
            return {
                ...prevState,
                filtered:tasks
            }
        default:
            return prevState;
    }
}

const store = createStore(tasksReducer);

const Tareas = () => {
    const [tareas, setTareas] = useState(store.getState());

    store.subscribe(() => {
        setTareas(store.getState().filtered)
    })

    const SHOW_ALL = {
        type:"SHOW_ALL"
    }

    const filterTasks = (completed) => ({
        type:"SHOW_COMPLETED",
        payload:completed
    })

    const mostrarTodos = () => {
        store.dispatch(SHOW_ALL)
    }

    const mostrarCompletados = () => {
        store.dispatch(filterTasks(true));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary mx-1" onClick={mostrarTodos}>Todos</button>
                    <button className="btn btn-secondary mx-1" onClick={mostrarCompletados}>Completados</button>
                    <ul className="list-group list-group-flush my-3">
                    {
                        tareas.map(item => (
                            <li key={item.id} className={`${item.completado ? "text-decoration-line-through" : ""} list-group-item`}>{item.nombre}</li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tareas