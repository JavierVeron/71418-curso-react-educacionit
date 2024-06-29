import bebidas from "./bebidas.json"

const ObjetosArraysJson = () => {
    const producto = {id:1, nombre:"Coca Cola", precio:1500}; // objeto
    const productos = [
        {id:1, nombre:"Coca Cola", precio:2000},
        {id:2, nombre:"Pepsi", precio:1900},
        {id:3, nombre:"Manaos", precio:1600},
    ]

    console.log(producto);
    console.log(productos);
    console.log(bebidas);

    return (
        <h1>Objetos, Arrays y Json</h1>
    )
}

export default ObjetosArraysJson