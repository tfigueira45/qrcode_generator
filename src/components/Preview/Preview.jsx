import React, { useContext } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Preview.css"
import { QrCodeContext } from "../../contexts/QrCodeContext";

function Preview() {
    const { value } = useContext(QrCodeContext)

    const v = value.data.text ? value.data.text : "" 
    
    return (
        <section className="preview">
            <h1>Preview</h1>
            <QRCodeCanvas 
                value={v}
                bgColor="#ffffff" 
                fgColor="#000000"
            />
        </section>
    )
}

export default Preview;