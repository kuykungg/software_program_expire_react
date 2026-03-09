import { useEffect, useState } from "react";
import { getSoftwareList } from "./services/SoftwareApi";
import SoftwareSearch from "./components/SoftwareSearch";
import "./App.css";

function App() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/apiv1/software/getdata")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const filteredData = data.filter(item =>
        item.program_name.toLowerCase().includes(search.toLowerCase()) ||
        item.program_vendor.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Software Licenses</h1>

            <input
                type="text"
                placeholder="Search program or vendor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Program</th>
                        <th>Vendor</th>
                        <th>License</th>
                        <th>Seat Max</th>
                        <th>Using</th>
                        <th>Left</th>
                        <th>Active</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Description</th>
                    </tr>
                    </thead>

                    <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.program_name}</td>
                            <td>{item.program_vendor}</td>
                            <td>{item.license_key}</td>
                            <td>{item.seat_max}</td>
                            <td>{item.seat_using}</td>
                            <td>{item.seat_left}</td>
                            <td>{item.is_active ? "Yes" : "No"}</td>
                            <td>{new Date(item.license_start_at).toLocaleDateString()}</td>
                            <td>{new Date(item.license_expire_at).toLocaleDateString()}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;