import React, { createContext,useState } from 'react'

export const ShoppingCartContext = createContext();

export function ShoppingCartContextProvider(props) {

    const [cartItems, setCartItems] = useState([]);


    return (
        <ShoppingCartContext.Provider value={[cartItems, setCartItems]}>
            { props.children }
        </ShoppingCartContext.Provider>
        );
}