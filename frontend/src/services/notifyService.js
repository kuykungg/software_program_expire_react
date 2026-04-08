const BASE_URL ="http://localhost:3002/apiv1/notify";
export async function getNotifications() {
    const res = await fetch(`${BASE_URL}/read`);
    if (!res.ok) throw new Error("Failed to fetch notifications");
    return res.json();
}

export async function deleteNotification(id) {
    const res = await fetch(`${BASE_URL}/delete/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete notification");
    return res.json().catch(() => null);
}