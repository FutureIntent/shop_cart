import React, { useContext,useEffect } from 'react'
import { ShoppingCartContext } from '../data/shoppingCartContext.js';
import CartItem from '../elements/cartItem.js';
import PurchaseForm from './../elements/purchaseForm.js';

function ShoppingCart() {
    const [cartItems, setCareItems] = useContext(ShoppingCartContext);

    useEffect(() => {
        console.log(cartItems)
    });

    function CountTotalPrice(current, next) {
        return current + next.price;
    }

    const TotalPrice = () => {
        const Total = cartItems.reduce(CountTotalPrice, 0);
        return (
            <span>{ Total }$</span>
            );
    }
    
    const CartContent = () => cartItems.length === 0 ? <div><p>Cart is empty...</p></div> : <div>
        <ol>
            {cartItems.map((item,index) => {
                return (
                    <li key={index}>
                        <CartItem item={ item }/>
                    </li>
                    );
            })}
        </ol>
        <p>
            <span style={{ fontWeight: "bold", fontSize: "150%" }}>Total: <TotalPrice /> </span>
        </p>
    </div>

    return (
        <div>
        <CartContent />
        {cartItems.length > 0 && <PurchaseForm />}
        </div>
        );

}
export default ShoppingCart;