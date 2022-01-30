import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from './../data/shoppingCartContext.js';


function CartItem(props) {
    const item = props.item;
    const [cartItems, setCartItems] = useContext(ShoppingCartContext);

    function removeItem(event) {
        const newState = cartItems;
        newState.splice(newState.indexOf(item), 1)
        setCartItems([...newState]);
    }

    return (
        <div>
            <h5>
                <Link to={ `/shop/${item.id}`}> {item.title} </Link>
            </h5>
            <img src={item.image} alt="item" style={{display:"block",width:"50px",height:"50px"}}/>
            <p>
                <span style={{ fontWeight: "bold" }}> Price: </span>{item.price}$
            </p>
            <button onClick={removeItem}>Discard</button>
            <hr/>
        </div>
        );
}
export default CartItem;