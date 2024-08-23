import React, { createContext,useState } from 'react'


export const ThemeStore = createContext(null)

const ThemeController = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("Theme") || "light")

    return (
        <ThemeStore.Provider value={{theme,setTheme}}>
            {children}
        </ThemeStore.Provider>
    )
}

export default ThemeController