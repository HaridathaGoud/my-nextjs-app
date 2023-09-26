'use client'
import Link from "next/link";
import { useState } from "react";


const DashboardPage = () => {
    const [showTable, setShowTable] = useState(false);
    const data = [{ id: 1, name: 'a', age: 10 }]
    return (<>

        <h2>Dashboard</h2>
        <Link href="/main">GO Back</Link><br/>

        <button onClick={() => setShowTable(!showTable)}> {showTable ? "HideTable" : "ShowTable"} </button>
        {
            showTable &&
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>)
                    }
                </tbody>
            </table>

        }
    </>)
}

export default DashboardPage;