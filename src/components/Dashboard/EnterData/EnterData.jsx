import React, { useContext, useState } from "react";
import "./EnterData.css";
import { QrCodeContext } from "../../../contexts/QrCodeContext";
import Url from "./Url/Url";

function EnterData() {
    const { value, setValue } = useContext(QrCodeContext);

    return (
        <section className="qrcode-data-container">
            <h1>{value.type}</h1>
            <Url />
        </section>
    )
}

export default EnterData;