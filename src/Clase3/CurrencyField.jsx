const CurrencyField = ({divisa, valor, onChange}) => {
    return (
        <fieldset>
            <legend>{divisa}</legend>
            <div className="mb-3">
                <input type="number" className="form-control" value={valor} onChange={(e) => {onChange(e.target.value)}} />
            </div>
        </fieldset>
    )
}

export default CurrencyField