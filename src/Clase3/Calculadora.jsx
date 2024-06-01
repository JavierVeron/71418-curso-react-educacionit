import { useState } from "react"
import CurrencyField from "./CurrencyField";

const Calculadora = () => {
    const [valor, setValor] = useState(0);
    const [divisa, setDivisa] = useState("");
    const [cotizacion, setCotizacion] = useState(1300);

    const handlerPesos = (importe) => {
        setDivisa("Pesos");
        setValor(importe);
    }

    const handlerUSD = (importe) => {
        setDivisa("USD");
        setValor(importe);
    }

    const valorPesos = divisa === "USD" ? (valor * cotizacion).toFixed(2) : valor;
    const valorUSD = divisa === "Pesos" ? (valor / cotizacion).toFixed(2) : valor;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Calculadora</h1>
                    <label>Cotización del Dolar</label>
                    <input type="text" className="form-control mb-3" value={cotizacion} onChange={(e) => setCotizacion(e.target.value)} />
                    <CurrencyField divisa={"Pesos"} valor={valorPesos} onChange={handlerPesos} />
                    <CurrencyField divisa={"USD"} valor={valorUSD} onChange={handlerUSD} />
                </div>
            </div>
        </div>
    )
}

export default Calculadora