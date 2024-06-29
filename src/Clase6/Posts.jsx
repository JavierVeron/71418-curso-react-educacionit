import { useState } from "react"

const Posts = ({posts}) => {
    const [titulo, setTitulo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [respuesta, setRespuesta] = useState(false);

    const guardarMensaje = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
              title:titulo,
              body:mensaje,
              userId:1,
            })
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.id) {
                setRespuesta(true);
                console.log(data);
            }
        });
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 card">
                    <div className="card-header">Posts JSON PlaceHolder</div>
                    <ul className="list-group list-group-flush">
                        {posts.map(item => (
                            <li key={item.id} className="list-group-item">{item.title} ({item.id})</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Título</label>
                            <input type="text" className="form-control" placeholder="Ingrese el Título" onInput={(e) => {setTitulo(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea className="form-control" rows="3" onInput={(e) => {setMensaje(e.target.value)}}></textarea>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={guardarMensaje}>Guardar Mensaje</button>
                    </form>
                    {respuesta ? <div class="alert alert-success my-3" role="alert">
                        <p>El mensaje se guardó correctamente!</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Posts