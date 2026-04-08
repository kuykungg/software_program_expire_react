import NotificationList from "../components/NotificationList";
import useNotifications from "../hooks/useNotifications";

export default function NotificationsPage() {
    const { notify, handleDeleteNotification } = useNotifications();

    return (
        <div>
            <h1>Notifications</h1>

            <NotificationList
                notify={notify}
                onDelete={handleDeleteNotification}
            />
        </div>
    );
}