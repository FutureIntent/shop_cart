import React, { useContext,useEffect } from 'react'
import { BackgroundContext } from './../data/backgroundContext.js'

function BackgroundColor() {

    const [theme, setTheme] = useContext(BackgroundContext);

    useEffect(() => {
        document.body.style.backgroundColor = theme;
    }, [theme]);

    return (
        <div>
        <h2>Background Color:</h2>
        <h3>Current Color: "{theme}"</h3>
        <button onClick={() => { setTheme("White") }} >White Color </button>
        <button onClick={() => { setTheme("DarkCyan") }} >DarkCyan Color </button>
        <button onClick={() => { setTheme("DarkGray") }} >DarkGray Color</button>
        <button onClick={() => { setTheme("ForestGreen") }} >ForestGreen Color </button>
        </div>
        );
}
export default BackgroundColor;