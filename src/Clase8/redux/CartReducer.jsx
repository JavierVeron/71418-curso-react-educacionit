import { createStore } from "redux"
import arrayProductos from "../json/arrayProductos.json"

const initialStore = {
    products:arrayProductos,
    cart:[],
    totalCart:0,
    sumCart:0
}

const CartReducer = (state = initialStore, action) => {
    let updatedCart = [];
    let product = {};

    const isInCart = () => {
        return state.cart.some(item => item.id == action.payload);
    }

    const getTotalCart = (cart) => {
        return cart.reduce((total, item) => total + item.cantidad, 0);
    }

    const getSumCart = (cart) => {
        return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
    }

    switch(action.type) {
        case "ADD_TO_CART":        
            if (isInCart()) {
                product = state.cart.find(item => item.id == action.payload);
                product.cantidad++;
            } else {
                product = state.products.find(item => item.id == action.payload);
                product.cantidad = 1;
            }

            updatedCart = isInCart() ? [...state.cart] : [...state.cart, {...product}];

            return {
                ...state,
                cart:updatedCart,
                totalCart:getTotalCart(updatedCart),
                sumCart:getSumCart(updatedCart)
            }
        case "REMOVE_FROM_CART":
            updatedCart = state.cart.filter(item => item.id != action.payload);

            return {
                ...state,
                cart:updatedCart,
                totalCart:getTotalCart(updatedCart),
                sumCart:getSumCart(updatedCart)
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart:[],
                totalCart:0,
                sumCart:0
            }
        default:
            return state;
    }    
}

export const store = createStore(CartReducer)