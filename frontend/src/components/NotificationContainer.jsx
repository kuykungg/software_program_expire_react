import React, { useState } from "react";
import Notification from "./Notification";

function NotificationContainer() {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message) => {
        const id = Date.now();
        setNotifications((prev) => [...prev, { id, message }]);

        // auto remove after 5 sec
        setTimeout(() => {
            removeNotification(id);
        }, 5000);
    };

    const removeNotification = (id) => {
        setNotifications((prev) =>
            prev.filter((n) => n.id !== id)
        );
    };

    return (
        <>
            {/* floating area */}
            <div style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: 9999
            }}>
                {notifications.map((n) => (
                    <Notification
                        key={n.id}
                        message={n.message}
                        onClose={() => removeNotification(n.id)}
                    />
                ))}
            </div>

            {/* demo button */}
            <button onClick={() => addNotification("Hello notify!")}>
                Test Notify
            </button>
        </>
    );
}

export default NotificationContainer;