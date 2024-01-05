import React from "react";
import "./Dashboard.css";
import TypeName from "./TypeName/TypeName";
import EnterData from "./EnterData/EnterData"

function Dashboard() {

    return (
        <section className="dashboard flex column">
            <h2 className="w-500 p-15 fz-20 color-gray">Crie um novo QR Code</h2>
            <TypeName />
            <EnterData />
        </section>
    )
}

export default Dashboard;