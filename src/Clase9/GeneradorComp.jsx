const GeneradorComp = () => {
    /* function * impares() {
        let impar = 1;
        return impar; // Corte a la ejecución
        impar += 2;
        return impar;
    } */

    function * impares() {
        let impar = 1;
        yield impar;
        impar += 2;
        yield impar;
        impar++;
        yield impar;
        impar = 100;
        yield impar;
    }
    
    const generador = impares();

    const ejecutarGenerador = () => {
        let resultado = generador.next();

        if (resultado.done) {
            console.log("Proceso terminado! => ", resultado.value);
        } else {
            console.log(resultado);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-primary" onClick={ejecutarGenerador}>Ejecutar Generador!</button>
                </div>
            </div>
        </div>
    )
}

export default GeneradorComp