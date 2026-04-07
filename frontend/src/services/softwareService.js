require("dotenv").config();
const BASE_URL = process.env.SoftwareService;

export async function getSoftware() {
    const res = await fetch(`${BASE_URL}/getdata`);
    if (!res.ok) throw new Error("Failed to fetch software");
    return res.json();
}

export async function createSoftware(form) {
    const res = await fetch(`${BASE_URL}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });
    if (!res.ok) throw new Error("Failed to create software");
    return res.json().catch(() => null);
}

export async function updateSoftware(id, form) {
    const res = await fetch(`${BASE_URL}/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });
    if (!res.ok) throw new Error("Failed to update software");
    return res.json().catch(() => null);
}

export async function updateSoftwareStatus(id, is_active) {
    const res = await fetch(`${BASE_URL}/updatestatus/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active }),
    });
    if (!res.ok) throw new Error("Failed to update status");
    return res.json().catch(() => null);
}

export async function deleteSoftware(id) {
    const res = await fetch(`${BASE_URL}/delete/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete software");
    return res.json().catch(() => null);
}