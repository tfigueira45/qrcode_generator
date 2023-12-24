import React from "react";
import simpleQrLogo from "../../assets/icons/SimpleQRLogo.png"
import "./Header.css"

function Header() {
    return (
        <header>
            <img src={simpleQrLogo} alt="logo" />
            <h1>QR Code Generator</h1>
        </header>
    )
}

export default Header;