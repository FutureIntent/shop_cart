import React from 'react'
import Item from './item.js'

function Items(props) {
    const items = props.items;
    return (
        <div>
            <ul style={{ listStyleType: "none" }}>
                {items.map((item) => {
                    return (
                        <li key={ parseInt(item.id) }>
                            <Item item={ item }/>
                        </li>
                        );
                })}
            </ul>
        </div>
        );
}
export default Items;