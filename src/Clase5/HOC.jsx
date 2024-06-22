import arrayProductos from "./json/arrayProductos.json"

const HOC = (BaseComponent) => {
    return function(props) {
        <BaseComponent productos={arrayProductos} {...props} />
    }
}

const renderProductos = (props) => {
    return (
        <ul>
            {props.productos.map(item => (
                <li>{item.nombre} ${item.precio} <i>({item.color})</i></li>
            ))}
        </ul>
    )
}

export default HOC(renderProductos);

