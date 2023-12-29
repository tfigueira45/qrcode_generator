import React, { useState, useContext } from "react";
import { QrCodeContext } from "../../../../contexts/QrCodeContext";
import "./Text.css";

const Text = () => {
    return (
        <div>
            <input type="text" className="qrcode-name-input" placeholder="Insira sua mensagem" />
        </div>
    )
}

export default Text;