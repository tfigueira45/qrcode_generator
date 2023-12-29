import React, { useContext, useState } from "react";
import "./EnterData.css";
import { QrCodeContext } from "../../../contexts/QrCodeContext";
import Url from "./Url/Url";
import Text from "./Text/Text";
import Wifi from "./Wifi/Wifi";

function EnterData() {
    const { value } = useContext(QrCodeContext);

    return (
        <section className="qrcode-data-container">
            <h1 className="w-500 p-15">{value.type}</h1>
            {value.type === "Text" ? <Text /> : value.type === "URL" ? <Url /> : <Wifi />}
        </section>
    )
}

export default EnterData;