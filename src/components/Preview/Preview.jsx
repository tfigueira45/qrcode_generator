import React, { useContext, useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Preview.css"
import { QrCodeContext } from "../../contexts/QrCodeContext";
import InputColor from "./InputColor/InputColor";

function Preview() {
    const { value } = useContext(QrCodeContext);
    const downloadRef = useRef();

    const text = value.data.text;
    const name = value.name
    
    const [colors, setColors] = useState({
        bgColor: value.data.bgColor,
        fgColor: value.data.fgColor
    });

    useEffect(() => {
        setColors({
            bgColor: value.data.bgColor,
            fgColor: value.data.fgColor
        })
        const canvas = document.querySelector('canvas');
        if(canvas && downloadRef.current) {
            downloadRef.current.href = canvas.toDataURL();
            downloadRef.current.download = `${name}-QR.png`;
        }
    }, [text, name, colors])
    
    return (
        <section className="preview flex column w-400 p-15">
            <h1>Preview</h1>
            <QRCodeCanvas 
                value={text}
                bgColor={colors.bgColor}
                fgColor={colors.fgColor}
                includeMargin="true"
            />
            <div className="custom">
                <h3>Editar Design</h3>
                <span className="block fz-20">Cores</span>
                <InputColor label="Cor Primária" index="fgColor" defValue="#000000" />
                <InputColor label="Cor de Fundo" index="bgColor" defValue="#ffffff" />
            </div>
            { text && name && colors ? <a ref={downloadRef} href="" className="download centered p-10 bg-blue rounded" download>Download</a> : <></>}
        </section>
    )
}

export default Preview;