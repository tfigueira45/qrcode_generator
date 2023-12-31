import React, { useContext } from "react";
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
            return {...prev, type: target.innerText, data: {...prev.data}}
        })
    }

    return (
        <section className="qrcode-typeName-container centered p-15 g-15">
            <DropdownMenu options={liItems} handleSelect={handleSelect} className="ml-15" />
            <input type="text" className="wd-100 input-style" onChange={handleChange} placeholder="Dê um nome ao seu QR code"/>
        </section>
    )
}

export default TypeName;