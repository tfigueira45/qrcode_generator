import React, { useState } from "react";
import "./DropdownMenu.css"

function DropdownMenu({options}) {
    const [dataType, setDataType] = useState("URL")

    return (
        <nav>
            <button className="dropBtn">{dataType}</button>
            <ul>
                {options.map(item => <li>{item}</li>)}
            </ul>
        </nav>
    )
}

export default DropdownMenu;