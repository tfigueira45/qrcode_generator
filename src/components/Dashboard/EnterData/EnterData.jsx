import React, { useContext } from "react";
import "./EnterData.css";
import { QrCodeContext } from "../../../contexts/QrCodeContext";

function EnterData() {
    const { value, setValue } = useContext(QrCodeContext);

    return (
        <section className="qrcode-data-container">
            <h1>{value.type}</h1>
        </section>
    )
}

export default EnterData;