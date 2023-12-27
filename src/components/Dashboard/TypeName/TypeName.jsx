import React from "react";
import "./TypeName.css";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";

function TypeName() {
    const liItems = ["URL", "Text", "Wi-fi"]

    return (
        <section className="qrcode-typeName-container">
            <DropdownMenu options={liItems} />
            <input type="text" className="qrcode-name-input"  placeholder="Dê um nome ao seu QR code"/>
        </section>
    )
}

export default TypeName;