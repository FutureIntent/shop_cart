import React, { useContext } from 'react'
import Category from './category.js'
import { CategoryContext } from './../data/categoryContext'

function Categories(props) {
    const categories = props.categories;
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h2>Categories: </h2>
            <h3>Current Category: "{ category }"</h3>
                {categories.map((category,index) => {
                    return (
                        <Category key={ index } category={ category }/>
                        );
                })}
        </div>
        );
}
export default Categories;