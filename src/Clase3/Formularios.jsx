import { useState } from "react"

const Formularios = () => {
    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [mensajeError, setMensajeError] = useState("");
    const [salida, setSalida] = useState("");

    // Opción #1 con botón tipo "button" y forzando el envío del form desde JS
    /* const validarForm1 = () => {
        if (nombre == "") {
            setNombreError("Debe ingresar un Nombre!");
            return false;
        } else {
            setNombreError("");
        }

        if (email == "") {
            setEmailError("Debe ingresar un Email!");
            return false;
        } else {
            setEmailError("");
        }

        if (mensaje == "") {
            setMensajeError("Debe ingresar un Mensaje!");
            return false;
        } else {
            setMensajeError("");
        }

        setSalida("El Mensaje se envió correctamente!");
        document.getElementById("form1").submit(); //Envío del Formulario
    } */

    // Opción #1 con botón tipo "button" y forzando el envío del form desde JS
    const validarForm2 = (event) => {
        event.preventDefault(); // Detener el envío del Formulario

        if (nombre == "") {
            setNombreError("Debe ingresar un Nombre!");
            return false;
        } else {
            setNombreError("");
        }

        if (email == "") {
            setEmailError("Debe ingresar un Email!");
            return false;
        } else {
            setEmailError("");
        }

        if (mensaje == "") {
            setMensajeError("Debe ingresar un Mensaje!");
            return false;
        } else {
            setMensajeError("");
        }

        setSalida("El Mensaje se envió correctamente!");
        event.target.submit(); // Envío del Formulario
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <h1>Formularios</h1>
                    <form id="form1" method="post" action="send.php" onSubmit={validarForm2}>
                        <div className="mb-3">
                            <label className="form-label">Nombre *</label>
                            <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}} />
                            <div className="text-danger small">{nombreError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email *</label>
                            <input type="text" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                            <div className="text-danger small">{emailError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje *</label>
                            <textarea rows={5} className="form-control" value={mensaje} onChange={(e) => {setMensaje(e.target.value)}} />
                            <div className="text-danger small">{mensajeError}</div>
                        </div>
                        <div className="mb-3">
                            <p className="small">* Campos obligatorios</p>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
                <div className="col-md-4 offset-md-2 bg-light">
                    {salida && <div className="alert alert-success" role="alert">{salida}</div>}
                </div>
            </div>
        </div>
    )
}

export default Formularios