import React, { useState, useContext } from "react";
import { QrCodeContext } from "../../../../contexts/QrCodeContext";
import "./Text.css";

const Text = () => {
    const { setValue } = useContext(QrCodeContext);

    const handleChange = ({target}) => {
        setValue(prev => {
            return {...prev, data: { text: target.value }}
        })
    }

    return (
        <div className="qrcode-text-container">
            <input type="text" className="qrcode-name-input" onChange={handleChange} placeholder="Insira sua mensagem" />
        </div>
    )
}

export default Text;