import React, { useContext } from "react";
import { QrCodeContext } from "../../../../contexts/QrCodeContext";

const Text = () => {
    const { setValue } = useContext(QrCodeContext);

    const handleChange = ({target}) => {
        setValue(prev => {
            return {...prev, data: {...prev.data, text: target.value }}
        })
    }

    return (
        <div className="qrcode-text-container centered p-15">
            <input type="text" className="input-style wd-100" onChange={handleChange} placeholder="Insira sua mensagem" />
        </div>
    )
}

export default Text;