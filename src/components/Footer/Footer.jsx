import React, { useContext } from "react";
import { QrCodeContext } from "../../contexts/QrCodeContext";
import "./Footer.css"

function Footer() {
    const { value } = useContext(QrCodeContext)

    const fields = ['name', 'type', 'text', 'fgColor', 'bgColor'];
    const isAllFilled = fields.every(field => value[field]);

    return (
        <footer className="centered fz-24">
            <div className="wd-50 centered h-100">
                Reset
            </div>
            <div className={`wd-50 centered ${isAllFilled ? "bg-blue" : "bg-blue-light"} h-100 color-white`}>
                Generate
            </div>
        </footer>
    )
}

export default Footer;