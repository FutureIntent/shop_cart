import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AddToCart from './addToCart.js'

function Item(props) { 
    const item = props.item;

    return (
        <div>
            <h1 style={{textAlign:"center"}}>
                <Link to={`/shop/${item.id}`}>{ item.title }</Link>
            </h1>
            <img src={item.image} style={{ width: "200px",height:"200px",display:"block",margin:"auto" }} alt='item' />
            <p style={{textAlign:"center"}}>
                <span style={{ fontWeight: "bold" }}>Price:</span> {item.price}$
            </p>
            <AddToCart item={ item }/>
            <hr/>
        </div>
        );
    
}
export default Item