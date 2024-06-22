import arrayProductos from "./json/arrayProductos.json"

const Spread = () => {
    console.log(arrayProductos);
    /* let nombre1 = "Natalia"; // Variables primitivas con valor por copia
    let nombre2 = nombre1; // Variable por copia
    console.log(nombre1);
    console.log(nombre2);
    nombre1 = "Andres";
    console.log(nombre1);
    console.log(nombre2); */

    // Operador Spread ... (desparramar cada uno de los elementos en un nuevo array u objeto)
    // Operador Spread en Objetos
    const bebida1 = {id:1, nombre:"Coca Cola", precio:1600}; // Esto es un objeto
    //console.log(bebida1);
    //console.log(bebida1.nombre);
    const bebida2 = bebida1; // Es una varible por referencia
    /* console.log(bebida1);
    console.log(bebida2);
    bebida1.precio = 2000;
    bebida2.nombre = "Pepsi"
    console.log(bebida1);
    console.log(bebida2); */
    /* const bebida3 = {...bebida1, id:3, nombre:"Seven Up", categoria:"bebidas"}; // Desparramar (o copia) cada una de las propiedas de bebida1 en bebida3 (crea un nuevo objeto)
    bebida2.precio = 2500;
    bebida3.precio = 3000;
    console.log(bebida1);
    console.log(bebida2);
    console.log(bebida3); */

    // Operador Spread con Arrays
    const bebidas1 = ["coca cola", "pepsi", "seven up"];
    const bebidas2 = bebidas1; // es una array por referencia
    const bebidas3 = ["cunnington cola", "pritty", ...bebidas1];
    bebidas1.push("manaos");
    console.log(bebidas1);
    console.log(bebidas2);
    console.log(bebidas3);



    return (
        <h1>Operador Spread...</h1>
    )

}

export default Spread;