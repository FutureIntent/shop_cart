import React, { useState,createContext} from 'react'

export const BackgroundContext = createContext();

export function BackgroundContextProvider(props) {

    const [theme, setTheme] = useState("White");

    return (
        <BackgroundContext.Provider value={[theme,setTheme]}>
            {props.children}
        </BackgroundContext.Provider>

        );
}