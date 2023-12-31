import React, { useContext } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./Preview.css"
import { QrCodeContext } from "../../contexts/QrCodeContext";
import InputColor from "./InputColor/InputColor";

function Preview() {
    const { value } = useContext(QrCodeContext)

    const v = value.data.text ?? "https://tfigueira45.github.io/qrcode_generator/";
    
    return (
        <section className="preview flex column w-400 p-15">
            <h1>Preview</h1>
            <QRCodeSVG 
                value={v}
                bgColor="#ffffff" 
                fgColor="#000000"
            />
            <div className="custom">
                <h3>Editar Design</h3>
                <span>Cores</span>
                <InputColor defColor="#000000" />
            </div>
        </section>
    )
}

export default Preview;