import React, { useContext, useState } from "react";
import DropdownMenu from "../../../DropdownMenu/DropdownMenu";
import "./Url.css"
import { QrCodeContext } from "../../../../contexts/QrCodeContext";

const Url = () => {
    const options = ["https://", "http://"]

    const { value, setValue } = useContext(QrCodeContext);
    const [ selected, setSelected ] = useState("https://")

    const handleChange = ({ target }) => {
        setValue(prev => {
            const { data } = prev;
            const { value: targetValue } = target;
            const newText = /\../.test(`${selected}${targetValue}`) ? `${selected}${targetValue}` : targetValue === "" ? "" : data.text;
    
            return { ...prev, data: { ...data, text: newText } };
        });
    };
    

    const handleSelect = (target) => {
        setSelected(target.innerText)
    }

    return (
        <div className="qrcode-url-container centered p-15 g-15">
            <DropdownMenu options={options}  handleSelect={handleSelect} className="ml-15" />
            <input type="text" className="input-style wd-100" onChange={handleChange} placeholder="Insira a URL" />
        </div>
    )
}

export default Url;