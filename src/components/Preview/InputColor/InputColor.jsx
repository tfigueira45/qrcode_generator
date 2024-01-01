import React, { useState } from "react";
import "./InputColor.css";

function InputColor({defColor, label}) {
    const [color, setColor] = useState(defColor);
    
    const handleChange = ({target}) => {
        setColor(target.value)
    }

    return (
        <React.Fragment>
            <label htmlFor="colorInput">{label}</label>
            <div className="input-color-container flex center">
                <input type="text" name="colorText" id="colorText" className="colorText input-style" value={color} onChange={handleChange} />
                <input type="color" name="colorInput" id="colorInput" value={color} onChange={handleChange} />
            </div>
        </React.Fragment>
    )
};

export default InputColor;