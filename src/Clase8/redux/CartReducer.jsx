import { createStore } from "redux"
import { actions } from "./actions"
import arrayProductos from "../json/arrayProductos.json"

const initialStore = {
    products:arrayProductos,
    cart:[]
}

const CartReducer = (state = initialStore, action) => {
    switch(action.type) {
        case actions.agregarProducto:
            return {
                ...state,
                products:[...state.products, action.payload]
            }
        case actions.quitarProducto:
            return {
                ...state,
                products:state.products.filter(item => item.id != action.payload)
            }
        case "ADD_TO_CART":
            const isInCart = state.cart.some(item => item.id == action.payload);
            const product = state.products.find(item => item.id == action.payload);
            product.cantidad = isInCart ? product.cantidad + 1 : 1;
            const newCart = isInCart ? [...state.cart] : [...state.cart, {...product}];

            return {
                ...state,
                cart:newCart
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart:state.cart.filter(item => item.id != action.payload)
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart:[]
            }
        default:
            return state;
    }    
}

export const store = createStore(CartReducer)