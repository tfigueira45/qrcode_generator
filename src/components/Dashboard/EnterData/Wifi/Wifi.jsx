import React,{ useContext, useEffect, useState } from "react";
import { QrCodeContext } from "../../../../contexts/QrCodeContext";
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
            return {...prev, data: {...prev.data, text: network && encryption ? `WIFI:T:${encryption};S:${network};P:${password};`: ""}}
        })
    }, [info])

    return (
        <div className="qrcode-wifi-container p-15">
            <span className="block ml-5 mb-10 fz-18">Nome da Rede</span>
            <input type="text" className="input-style wd-100-30px ml-10" id="network" onChange={handleChange} placeholder="Digite o nome da rede"/>

            <span className="block ml-5 mb-10 mt-10 fz-18">Tipo de Rede</span>
            <DropdownMenu options={options} handleSelect={handleSelect} className="ml-20" />

            <span className="block ml-5 mb-10 mt-10 fz-18">Senha</span>
            <input type="password" className="input-style wd-100-30px ml-10" id="password" onChange={handleChange} placeholder="Digite a senha da rede"/>
        </div>
    )
}

export default Wifi;
