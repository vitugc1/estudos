import React, { useContext, useReducer } from 'react';
import {CartContext } from '../../context/AppContext';


type Cart = {
    products: string[];
    shipping_value?: number;
}

type CartActionType = {
    type: "ADD_PRODUCT" | "REMOVE_PRODUCT" | "SET_SHIPPING_VALUE";
}

export const ContextList: React.FC = () => {
    const { products } = useContext(CartContext)

    const cart = useReducer((state: Cart, action: CartActionType) => {
        switch(action.type) {
            default:
                return state;
        }
    }, {
        products: [],
        shipping_value: 0,
    })
    
    return (
        <div>
            {products?.map(products => products.id)}
        </div>
    )
}
