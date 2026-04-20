import React from "react";

function Notification({ message, onClose }) {
    return (
        <div style={{
            background: "#222",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "8px",
            marginBottom: "10px",
            minWidth: "250px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <span>{message}</span>
            <button onClick={onClose} style={{
                marginLeft: "10px",
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer"
            }}>
                ✕
            </button>
        </div>
    );
}

export default Notification;