import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Preview.css"

function Preview() {
    return (
        <section className="preview">
            <QRCodeCanvas 
                value="https://tfigueira45.github.io/qrcode_generator" 
                bgColor="#ffffff" 
                fgColor="#000000"
            />
        </section>
    )
}

export default Preview;