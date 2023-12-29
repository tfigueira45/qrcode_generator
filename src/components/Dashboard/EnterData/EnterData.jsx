import React, { useContext, useState } from "react";
import "./EnterData.css";
import { QrCodeContext } from "../../../contexts/QrCodeContext";
import Url from "./Url/Url";
import Text from "./Text/Text";

function EnterData() {
    const { value } = useContext(QrCodeContext);

    return (
        <section className="qrcode-data-container">
            <h1>{value.type}</h1>
            {value.type === "Text" ? <Text /> : value.type === "URL" ? <Url /> : <></>}
        </section>
    )
}

export default EnterData;