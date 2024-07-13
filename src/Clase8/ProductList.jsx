import { useSelector } from "react-redux"
import Item from "./Item";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductList = () => {
    const products = useSelector(state => state.products);
    const [items, setItems] = useState(products);
    const {id} = useParams();

    useEffect(() => {
        setItems(id ? products.filter(item => item.color == id) : products)
    }, [id])

    return (
        <div className="container my-5">
            <div className="row">
                {
                    items.map(item => (
                        <Item key={item.id} producto={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList