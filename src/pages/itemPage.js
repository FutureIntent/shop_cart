import React, { useEffect, useState } from 'react'
import AddToCart from './../elements/addToCart.js'

function ItemPage({ match }) {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then(response => response.json())
            .then(data => {
                setItem(data);
                setLoading(false);
            })
    }, [])

    const Result = () => loading ? <h2 style={{ textAlign: "center" }}>Loading...</h2> : <div>
        <h1 style={{ textAlign:"center" }}>
            {item.title}
        </h1>
        <img style={{ width: "500px", height: "500px", margin: "auto", display: "block" }} src={item.image} />
        <p style={{margin:"2% 5%",fontSize:"150%"}}>
            <span style={{fontWeight:"bold"}}> Description: </span> { item.description }
        </p>
        <p style={{ margin: "2% 5%",fontSize:"150%" }}>
            <span style={{ fontWeight: "bold" }}> Price: </span> {item.price}$
        </p>
        <AddToCart item={item}/>
    </div>

    return (
        <Result/>
        );
} export default ItemPage;