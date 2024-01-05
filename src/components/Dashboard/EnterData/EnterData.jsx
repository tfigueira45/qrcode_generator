import React, { useContext } from "react";
import { QrCodeContext } from "../../../contexts/QrCodeContext";
import Url from "./Url/Url";
import Text from "./Text/Text";
import Wifi from "./Wifi/Wifi";

function EnterData() {
    const { value } = useContext(QrCodeContext);

    return (
        <section className="qrcode-data-container">
            <h1 className="w-500 p-15 color-gray fz-20">{value.type}</h1>
            {value.type === "Text" ? <Text /> : value.type === "URL" ? <Url /> : <Wifi />}
        </section>
    )
}

export default EnterData;