const RenderizadoListas = () => {
    const productos = [
        {id:1, nombre:"Hamburguesa", descripcion:"El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar", precio:4000, categoria:"hamburguesas"},
        {id:2, nombre:"Hamburguesa con Queso", descripcion:"Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar", precio:5000, categoria:"hamburguesas"},
        {id:3, nombre:"Papas Medianas", descripcion:"Nuestro sello. Las aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última. Crujientes y deliciosas, no vas a parar hasta terminarlas todas.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kEXemacS/200/200/original?country=ar", precio:3000, categoria:"papas"},
        {id:4, nombre:"Papas Grandes", descripcion:"Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXXQgnB/200/200/original?country=ar", precio:4000, categoria:"papas"},
        {id:5, nombre:"McPollo", descripcion:"El auténtico sabor del pollo lo encontrás en nuestro clásico McPollo. Una hamburguesa que sabe de sensaciones. La textura del pollo hace un gran equipo con la suavidad de la mayonesa y un colchón de lechuga.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXQzmQj/200/200/original?country=ar", precio:5000, categoria:"pollo"},
        {id:6, nombre:"Coca Cola Grande", descripcion:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar", precio:3000, categoria:"bebidas"},
    ];
    //console.log(productos);

    return (
        <div className="container my-5">
            <div className="row">
                {/* <div className="col">
                    <ul>
                        {productos.map(item =>
                            <li key={item.id}>{item.nombre} ${item.precio}</li>
                         )}
                    </ul>
                </div> */}
                {productos.map(produ => 
                    <div key={produ.id} className="col-md-2">
                        <div className="card border-0 text-center">
                            <img src={produ.imagen} className="img-fluid" alt={produ.nombre} />
                            <div className="card-body">
                                <p className="card-text">{produ.nombre}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RenderizadoListas