import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export default function NotificationList({ notify, onDelete }) {
    return (
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
                                <button className="btn-delete" onClick={() => onDelete(item.id)}>
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
    );
}