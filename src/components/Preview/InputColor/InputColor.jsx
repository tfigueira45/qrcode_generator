import React, { useRef, useState } from "react";
import "./InputColor.css";

function InputColor({defColor}) {
    const style = {borderRadius: "20px", overflow: "hidden", height: "40px", width: "40px"}; 
    
    const [color, setColor] = useState(defColor);
    
    const handleChange = ({target}) => {
        setColor(target.value)
    }

    return (
        <div className="input-color-container flex center">
            <input type="text" name="colorText" id="colorText" className="colorText input-style" value={color} />
            <div style={style}>
                <input type="color" name="colorInput" id="colorInput" value={color} />
            </div>
        </div>
    )
};

export default InputColor;