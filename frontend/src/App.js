import { useEffect, useState } from "react";
import "./App.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import { socket } from "./socket";
dayjs.extend(utc);

function App() {
    const [data, setData] = useState([]);
    const [notify, setNotify] = useState([]);
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);
    const [editingStatusId, setEditingStatusId] = useState(null);
    const [form, setForm] = useState({
        program_name: "",
        program_vendor: "",
        license_key: "",
        seat_max: 0,
        seat_using: 0,
        is_active: true,
        license_start_at: "",
        license_expire_at: "",
        description: ""
    });

    // Load data
    const loadData = () => {
        fetch("http://localhost:3001/apiv1/software/getdata")
            .then(res => res.json())
            .then(data => setData(data));
    };
    const loadnotify = () =>{
        fetch("http://localhost:3002/apiv1/notify/read")
        .then(res => res.json())
            .then(notify => setNotify(notify));
    }
    const nearExpire = data.filter(item =>{
        const expire = dayjs.utc(item.license_expire_at);
        const today = dayjs.utc();
        const diffDays = expire.diff(today, "day")
        return diffDays >= 0 && diffDays <= 7;
    });

    useEffect(() => {
        loadData();
        loadnotify();
        socket.on("connect",() =>{
           console.log("Connected!", socket.id);
        });
        socket.on("notify:changed", async() =>{
            console.log("Notify changed!");
            await loadnotify();
        });
        socket.on("disconnect", () => {
            console.log("socket disconnected");
        });
        return () => {
            socket.off("connect");
            socket.off("notify:changed");
            socket.off("disconnect");
        };
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Reset form
    const resetForm = () => {
        setForm({
            program_name: "",
            program_vendor: "",
            license_key: "",
            seat_max: 0,
            seat_using: 0,
            is_active: true,
            license_start_at: "",
            license_expire_at: "",
            description: ""
        });
        setEditId(null);
    };

    // Create
    const createData = () => {
        fetch("http://localhost:3001/apiv1/software/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        }).then(() => {
            loadData();
            resetForm();
        });
    };

    // Start Edit
    const startEdit = (item) => {
        setEditId(item.id);
        setForm({
            program_name: item.program_name,
            program_vendor: item.program_vendor,
            license_key: item.license_key,
            seat_max: item.seat_max,
            seat_using: item.seat_using,
            // is_active: item.is_active,
            license_start_at: item.license_start_at?.split("T")[0],
            license_expire_at: item.license_expire_at?.split("T")[0],
            description: item.description
        });
    };

    // Update
    const updateData = () => {
        fetch(`http://localhost:3001/apiv1/software/update/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        }).then(() => {
            loadData();
            resetForm();
        });

    };
    const updateStatus = (id, newStatus) => {
        fetch(`http://localhost:3001/apiv1/software/updatestatus/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ is_active: newStatus })
        }).then(() => {
            setEditingStatusId(null);
            loadData();
        });
    };
    const deleteNotify = (id) => {
        fetch(`http://localhost:3002/apiv1/notify/delete/${id}`, {
            method: "DELETE"
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to delete notification");
                }
                return res.json().catch(() => null);
            })
            .then(() => loadnotify())
            .catch((err) => console.error("Delete notify error:", err));
    };
    // const updateusingseat = (id, usingseat) => {
    //     fetch(`http://localhost:3001/apiv1/software/updateusingseat/${id}`,{
    //         method: "PATCH",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ using_seat: id })
    //     })
    //
    // }

    // Delete
    const deleteData = (id) => {
        fetch(`http://localhost:3001/apiv1/software/delete/${id}`, { method: "DELETE" })
            .then(() => loadData());
    };

    // Filter search
    const filteredData = data.filter(item =>
        item.program_name.toLowerCase().includes(search.toLowerCase()) ||
        item.program_vendor.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Software Licenses</h1>

            {/* CREATE OR EDIT FORM */}
            <div className="form-box">
                <h2>{editId ? "Edit Software" : "Create Software"}</h2>

                <input name="program_name" placeholder="Program Name"
                       value={form.program_name} onChange={handleChange} />

                <input name="program_vendor" placeholder="Vendor"
                       value={form.program_vendor} onChange={handleChange} />

                <input name="license_key" placeholder="License Key"
                       value={form.license_key} onChange={handleChange} />

                <input name="seat_max" type="number" placeholder="Seat Max"
                       value={form.seat_max} onChange={handleChange} />

                <input name="seat_using" type="number" placeholder="Seat Using"
                       value={form.seat_using} onChange={handleChange} />

                {/*<select name="is_active" value={form.is_active} onChange={handleChange}>*/}
                {/*    <option value={true}>Active</option>*/}
                {/*    <option value={false}>Inactive</option>*/}
                {/*</select>*/}

                <input name="license_start_at" type="date"
                       value={form.license_start_at} onChange={handleChange} />

                <input name="license_expire_at" type="date"
                       value={form.license_expire_at} onChange={handleChange} />

                <textarea name="description" placeholder="Description"
                          value={form.description} onChange={handleChange} />

                {editId ? (
                    <>
                        <button onClick={updateData}>Update</button>
                        <button onClick={resetForm}>Cancel</button>
                    </>
                ) : (
                    <button onClick={createData}>Create</button>
                )}
            </div>

            {/* SEARCH */}
            <input
                type="text"
                placeholder="Search program or vendor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* TABLE */}
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        {/*<th>ID</th>*/}
                        <th>Program</th>
                        <th>Vendor</th>
                        <th>License</th>
                        <th>Max</th>
                        <th>Using</th>
                        <th>Left</th>
                        <th>Status</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            {/*<td>{item.id}</td>*/}
                            <td>{item.program_name}</td>
                            <td>{item.program_vendor}</td>
                            <td>{item.license_key}</td>
                            <td>{item.seat_max}</td>
                            <td>{item.seat_using}</td>
                            <td>{item.seat_left}</td>
                            <td
                                onClick={() => setEditingStatusId(item.id)}
                                style={{ cursor: "pointer", minWidth: "90px" }}
                            >
                                {editingStatusId === item.id ? (
                                    <select
                                        autoFocus
                                        defaultValue={item.is_active}
                                        onChange={(e) => updateStatus(item.id, e.target.value === "true")}
                                        onBlur={() => setEditingStatusId(null)}
                                    >
                                        <option value="true">Active</option>
                                        <option value="false">Inactive</option>
                                    </select>
                                ) : (
                                    <span>{item.is_active ? "Active" : "Inactive"}</span>
                                )}
                            </td>
                            <td>{new Date(item.license_start_at).toLocaleDateString()}</td>
                            <td>{new Date(item.license_expire_at).toLocaleDateString()}</td>
                            <td>{item.description}</td>

                            <td>
                                <button onClick={() => startEdit(item)}>Edit</button>
                                <button onClick={() => deleteData(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <h2 >Near expire license table</h2>
                <table className="wide-table">
                    <thead>
                    <tr>
                        <th>program</th>
                        <th>Vendor</th>
                        <th>License</th>
                        <th>Max</th>
                        <th>Using</th>
                        <th>Left</th>
                        <th>Status</th>
                        <th>Start</th>
                        <th>Expire Date</th>
                        <th>Date left</th>
                        <th>description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {nearExpire.map(item =>{
                        const expire = dayjs.utc(item.license_expire_at);
                        const today = dayjs.utc()
                        const diffDays = expire.diff(today, "day")
                       return (
                           <tr key={item.id}>
                                <td>{item.program_name}</td>
                                <td>{item.program_vendor}</td>
                               <td>{item.license_key}</td>
                               <td>{item.seat_max}</td>
                               <td>{item.seat_using}</td>
                               <td>{item.seat_left}</td>
                               <td>{item.is_active ? "Active" : "Inactive"}</td>
                               <td>{new Date(item.license_start_at).toLocaleDateString()}</td>
                               <td>{new Date(item.license_expire_at).toLocaleDateString()}</td>
                               <td style={{ color: "red", fontWeight: "bold" }}>
                                   {diffDays} days
                               </td>
                               <td>{item.description}</td>
                           </tr>

                       );
                    })}
                    </tbody>
                </table>

            </div>
            <div className="notifications">
                <h2>Notifications</h2>

                {notify.length > 0 ? (
                    <div className="notify-list">
                        {notify.map((item) => (
                            <div className="notify-card" key={item.id}>
                                <h3>{item.notify_title}</h3>
                                <p>{item.notify_body}</p>

                                <small>
                                    {dayjs.utc(item.notify_date).local().format("DD/MM/YYYY HH:mm")}
                                    <button className="btn-delete" onClick={() => deleteNotify(item.id)}>
                                        Delete
                                    </button>
                                </small>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No notifications yet.</p>
                )}
            </div>

        </div>
    );
}

export default App;