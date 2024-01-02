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
        <div className="qrcode-text-container">
            <input type="text" className="input-style wd-100-200px m-15" onChange={handleChange} placeholder="Insira sua mensagem" />
        </div>
    )
}

export default Text;