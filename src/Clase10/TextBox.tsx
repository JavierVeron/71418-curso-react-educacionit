import { useEffect, useState } from "react"

interface TextBoxProps {
    children?:React.ReactNode
    academia:string,
    curso:string
}

interface User {
    id:number,
    nombre:string
}

const TextBox = (props:TextBoxProps):JSX.Element => {
    const [usuario, setUsuario] = useState<User | null>(null);
    let contenido = "Un contenido...";

    useEffect(() => {
        setUsuario({id:1, nombre:"Juan Perez"})
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{props.academia}</h1>
                    <h3>{props.curso}</h3>
                    <p>{contenido}</p>
                    {props.children}
                    <p>ID: {usuario?.id} - Nombre: {usuario?.nombre}</p>
                </div>
            </div>
        </div>
    )
}

export default TextBox