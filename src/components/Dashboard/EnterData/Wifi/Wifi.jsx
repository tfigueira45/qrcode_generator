import React,{ useContext, useEffect, useState } from "react";
import { QrCodeContext } from "../../../../contexts/QrCodeContext";
import "./Wifi.css";
import DropdownMenu from "../../../DropdownMenu/DropdownMenu";


function Wifi() {
    const { setValue } = useContext(QrCodeContext);
    const [info, setInfo] = useState({})
    const options = ["WEP", "WPA/WPA2", "Sem encriptação"]

    const handleChange = ({target}) => {
        setInfo(prev => {
            return {...prev, [target.id]: target.value}
        })
    }

    const handleSelect = (target) => {
        setInfo(prev => {
            return {...prev, encryption: target.innerText}
        })
    }

    useEffect(() => {
        const { network, password, encryption } = info;
        setValue(prev => {
            return {...prev, data: { text: network && encryption ? `WIFI:T:${encryption};S:${network};P:${password};`: ""}}
        })
    }, [info])

    return (
        <div className="qrcode-wifi-container m-15">
            <span className="m-15">Nome da Rede</span>
            <input type="text" className="qrcode-name-input" id="network" onChange={handleChange} placeholder="Digite o nome da rede"/>

            <span className="m-15">Tipo de Rede</span>
            <DropdownMenu options={options} handleSelect={handleSelect} />

            <span className="m-15">Senha</span>
            <input type="text" className="qrcode-name-input" id="password" onChange={handleChange} placeholder="Digite a senha da rede"/>
        </div>
    )
}

export default Wifi;