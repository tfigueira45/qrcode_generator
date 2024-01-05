import React, { useContext, useEffect, useState } from "react";
import "./InputColor.css";
import { QrCodeContext } from "../../../contexts/QrCodeContext";

function InputColor({label, index, defValue}) {
    const { value, setValue } = useContext(QrCodeContext);
    const [color, setColor] = useState(defValue)
    
    const handleChange = ({target}) => {
        setColor(target.value)
    }

    useEffect(() => {
        setValue(prev => {
            return {...prev, data: {...value.data, [index]: color}};
        })
    }, [color])

    return (
        <div className="m-15">
            <label htmlFor="colorInput fz-18 pb-10">{label}</label>
            <div className="input-color-container flex center m-5 g-15">
                <input type="text" name="colorText" id="colorText" className="colorText input-style" value={color} onChange={handleChange} />
                <input type="color" name="colorInput" id="colorInput" value={color} onChange={handleChange} />
            </div>
        </div>
    )
};

export default InputColor;