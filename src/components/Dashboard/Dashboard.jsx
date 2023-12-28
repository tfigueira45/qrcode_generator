import React, { useState } from "react";
import "./Dashboard.css";
import TypeName from "./TypeName/TypeName";
import EnterData from "./EnterData/EnterData"

function Dashboard() {

    return (
        <section className="dashboard">
            <h2>Crie um novo QR Code</h2>
            <TypeName />
            <EnterData />
        </section>
    )
}

export default Dashboard;