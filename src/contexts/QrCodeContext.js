import React, { createContext, useState } from "react";

export const QrCodeContext = createContext();

export function QrcodeProvider({children}) {
    const [value, setValue] = useState({
        name: "",
        type: "URL",
        data: {
            text: "",
            bgColor: "#ffffff",
            fgColor: "#000000"
        }
    })

    return (
        <QrCodeContext.Provider value={{value, setValue}}>
            {children}
        </QrCodeContext.Provider>
    )
}