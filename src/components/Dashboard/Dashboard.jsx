import React, { useState } from "react";
import "./Dashboard.css";
import TypeName from "./TypeName/TypeName";

function Dashboard() {

    return (
        <section className="dashboard">
            <h2>Crie um novo QR Code</h2>
            <TypeName />
        </section>
    )
}

export default Dashboard;