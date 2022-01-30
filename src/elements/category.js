import React, { useContext } from 'react'
import { CategoryContext } from './../data/categoryContext.js';

function Category(props) {
    const category = props.category;
    const [selectCategory, setCategory] = useContext(CategoryContext);

    return (
        <div style={{display:"inline"}}>
            <button onClick={() => {
                setCategory(category);  
            }}>{category}</button>
        </div>

        );
}
export default Category;