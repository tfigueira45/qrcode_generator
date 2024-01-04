import React, { useContext, useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Preview.css"
import { QrCodeContext } from "../../contexts/QrCodeContext";
import InputColor from "./InputColor/InputColor";

function Preview() {
    const { value } = useContext(QrCodeContext);
    const downloadRef = useRef();
     
    const [data, setData] = useState({
        text: value.data.text,
        name: value.name,
        bgColor: value.data.bgColor,
        fgColor: value.data.fgColor
    });

    useEffect(() => {
        setData({
            text: value.data.text,
            name: value.name,
            bgColor: value.data.bgColor,
            fgColor: value.data.fgColor
        })
        const canvas = document.querySelector('canvas');
        if(canvas && downloadRef.current) {
            downloadRef.current.href = data.text ? canvas.toDataURL() : "#";
            downloadRef.current.setAttribute("download", `${data.name}-QR.png`)
        }
    }, [value])
    
    return (
        <section className="preview flex column w-400 p-15">
            <h1>Preview</h1>
            <QRCodeCanvas 
                value={data.text}
                bgColor={data.bgColor}
                fgColor={data.fgColor}
                includeMargin="true"
            />
            <div className="custom">
                <h3>Editar Design</h3>
                <span className="block fz-20">Cores</span>
                <InputColor label="Cor Primária" index="fgColor" defValue="#000000" />
                <InputColor label="Cor de Fundo" index="bgColor" defValue="#ffffff" />
            </div>
            <a ref={downloadRef} href="" className={`download p-10 bg-blue rounded ${data.text ? "centered" : "none"}`} >Download</a>
        </section>
    )
}

export default Preview;