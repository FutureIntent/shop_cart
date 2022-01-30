import React,{ createContext,useState } from 'react'

export const CategoryContext = createContext();

export function CategoryProvider(props) {
    const [category, setCategory] = useState("electronics");


    return (
        <CategoryContext.Provider value={[category,setCategory]}>
            { props.children }
        </CategoryContext.Provider>
        );
}