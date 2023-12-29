import React,{ useContext } from "react";
import { QrCodeContext } from "../../../../contexts/QrCodeContext";
import "./Wifi.css";


function Wifi() {
    return (
        <div className="qrcode-wifi-container">
            <label htmlFor="qrcode-wifi-network-input">Nome da Rede</label>
            <input type="text" className="qrcode-name-input" id="qrcode-wifi-network-input" placeholder="Digite o nome da rede"/>
        </div>
    )
}

export default Wifi;
