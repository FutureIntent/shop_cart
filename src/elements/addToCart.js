import React, { useState, useContext } from 'react'
import { ShoppingCartContext } from '../data/shoppingCartContext';

function AddToCart(props) {
    const [cartItems, setCartItems] = useContext(ShoppingCartContext);
    const item = props.item;
    return (
        
        <button style={{ display: "block", margin: "auto", fontSize:"150%" }} onClick={() => setCartItems(
            prevState => [...prevState, item]
            )}>Add to Cart</button>
            
            );
            
}
export default AddToCart;
