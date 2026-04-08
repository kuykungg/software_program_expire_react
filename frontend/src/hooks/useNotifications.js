import { useEffect, useState } from "react";
import { socket } from "../socket";
import {
    deleteNotification,
    getNotifications,
} from "../services/notifyService";

export default function useNotifications() {
    const [notify, setNotify] = useState([]);

    const loadNotifications = async () => {
        const result = await getNotifications();
        setNotify(result);
    };

    useEffect(() => {
        loadNotifications();

        socket.on("connect", () => {
            console.log("Connected!", socket.id);
        });

        socket.on("notify:changed", async () => {
            console.log("Notify changed!");
            await loadNotifications();
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

    const handleDeleteNotification = async (id) => {
        await deleteNotification(id);
        await loadNotifications();
    };

    return {
        notify,
        handleDeleteNotification,
    };
}