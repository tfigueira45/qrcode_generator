import React, { useContext, useState } from "react";
import DropdownMenu from "../../../DropdownMenu/DropdownMenu";
import "./Url.css"
import { QrCodeContext } from "../../../../contexts/QrCodeContext";

const Url = () => {
    const options = ["https://", "http://"]

    const { value, setValue } = useContext(QrCodeContext);
    const [ selected, setSelected ] = useState("https://")

    const handleChange = ({target}) => {
        setValue(prev => {
            return {...prev, data: { text: /\../.test(`${selected}${target.value}`) ? `${selected}${target.value}` : value.data.text}}
        })
    }

    const handleSelect = (target) => {
        setSelected(target.innerText)
    }

    return (
        <div className="qrcode-url-container centered">
            <DropdownMenu options={options}  handleSelect={handleSelect} />
            <input type="text" className="input-style wd-100 m-15" onChange={handleChange} placeholder="Insira a URL" />
        </div>
    )
}

export default Url;