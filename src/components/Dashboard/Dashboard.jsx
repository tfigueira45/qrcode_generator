import React, { useState } from "react";
import "./Dashboard.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Dashboard() {
    const liItems = ["URL", "Text", "Wi-fi"]

    return (
        <section className="dashboard">
            <h2>Crie um novo QR Code</h2>
            <DropdownMenu options={liItems}/>
        </section>
    )
}

export default Dashboard;