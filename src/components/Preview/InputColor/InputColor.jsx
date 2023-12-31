import React, { useRef } from "react";
import "./InputColor.css";

function InputColor() {
    const style = {borderRadius: "20px", overflow: "hidden", height: "40px", width: "40px"}; 
    

    return (
        <div>
            <input type="text" name="colorText" id="colorText" className="colorText" ref={colorText} />
            <div style={style}>
                <input type="color" name="colorInput" id="colorInput" ref={colorInput} />
            </div>
        </div>
    )
};

export default InputColor;