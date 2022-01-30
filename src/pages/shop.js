import React, { useEffect, useState, useContext } from 'react'
import Items from './../elements/items.js'
import BackgroundColor from './../elements/backgroundColor.js'
import Categories from './../elements/categories.js'
import { CategoryContext } from './../data/categoryContext.js'


function Shop() {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([{}]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useContext(CategoryContext);
    const [hasError, setHasError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);
                setLoading(false);
            }
        )
            .catch(error => {
                setHasError(error);
                setLoading(false);
            })

        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    },[category])

    const Catalog = () => loading ? <h2 style={{textAlign:"center"}}>Loading...</h2> : <Items items={items} />
    

    return (
        <div>
            < BackgroundColor />
            <hr />
            <Categories categories={categories} />
            <hr />
            <h1>SHOP</h1>
            {hasError ? <p>{ hasError.toString() }</p> : <Catalog />}
        </div>
        );
}
export default Shop;