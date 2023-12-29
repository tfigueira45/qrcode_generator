import React, { useContext } from "react";
import "./TypeName.css";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import { QrCodeContext } from "../../../contexts/QrCodeContext";

function TypeName() {
    const { setValue } = useContext(QrCodeContext)
    const liItems = ["URL", "Text", "Wifi"]

    const handleChange = ({target}) => {
        setValue(prev => {
            return {...prev, name: target.value}
        }) 
    }

    const handleSelect = (target) => {
        setValue(prev => {
            return {...prev, type: target.innerText, data: {text : "https://tfigueira45.github.io/qrcode_generator"}}
        })
    }

    return (
        <section className="qrcode-typeName-container centered">
            <DropdownMenu options={liItems} handleSelect={handleSelect} />
            <input type="text" className="qrcode-name-input" onChange={handleChange} placeholder="Dê um nome ao seu QR code"/>
        </section>
    )
}

export default TypeName;