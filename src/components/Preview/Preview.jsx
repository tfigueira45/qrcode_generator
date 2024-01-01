import React, { useContext } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./Preview.css"
import { QrCodeContext } from "../../contexts/QrCodeContext";
import InputColor from "./InputColor/InputColor";

function Preview() {
    const { value } = useContext(QrCodeContext)

    const text = value.data.text ?? "https://tfigueira45.github.io/qrcode_generator/";
    const bgColor = value.data.bgColor;
    const fgColor = value.data.fgColor;
    
    return (
        <section className="preview flex column w-400 p-15">
            <h1>Preview</h1>
            <QRCodeSVG 
                value={text}
                bgColor={bgColor}
                fgColor={fgColor}
                includeMargin="true"
            />
            <div className="custom">
                <h3>Editar Design</h3>
                <span className="block fz-20">Cores</span>
                <InputColor label="Cor Primária" index="fgColor" defValue="#000000" />
                <InputColor label="Cor de Fundo" index="bgColor" defValue="#ffffff" />
            </div>
        </section>
    )
}

export default Preview;