import React, { createContext, useState } from "react";

export const ValueContext = createContext();

export function ValueProvider({children}) {
    const [value, setValue] = useState({})

    return (
        <ValueContext.Provider value={{value, setValue}}>
            {children}
        </ValueContext.Provider>
    )
}