import React from "react";
import simpleQrLogo from "../../assets/icons/SimpleQRLogo.png"
import "./Header.css"

function Header() {
    return (
        <header className="centered">
            <img src={simpleQrLogo} height="50px" width="50px" alt="logo" />
            <h1 className="p-5">QR Code Generator</h1>
        </header>
    )
}

export default Header;