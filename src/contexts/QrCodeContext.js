import React, { createContext, useState } from "react";

export const QrCodeContext = createContext();

export function QrcodeProvider({children}) {
    const [value, setValue] = useState({
        name: "",
        type: "URL",
        data: {
            text: "https://tfigueira45.github.io/qrcode_generator"
        }
    })

    return (
        <QrCodeContext.Provider value={{value, setValue}}>
            {children}
        </QrCodeContext.Provider>
    )
}