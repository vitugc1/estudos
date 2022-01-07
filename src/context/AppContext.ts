import { createContext } from "react"

type Product = {
    id: number;
    name: string;
    price: number;
}

type Cart = {
    products: Product[];
    shipping_value?: number;
}

export const CartContext = createContext<Cart>({
    products: [],
    shipping_value: 0
})




