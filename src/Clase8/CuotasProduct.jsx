const CuotasProduct = ({importe, cuotas}) => {
    return (
        <span className="text-danger">6 cuotas SIN INTERÉS de ${(importe/cuotas).toFixed(2)}</span>
    )
}

export default CuotasProduct