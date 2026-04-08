import useSoftware from "../hooks/useSoftware";
import useNotifications from "../hooks/useNotifications";

export default function DashboardPage() {
    const { data, nearExpire } = useSoftware();
    const { notify } = useNotifications();

    return (
        <div>
            <h1>Dashboard</h1>

            <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                <div className="card">
                    <h3>Total Software</h3>
                    <p>{data.length}</p>
                </div>

                <div className="card">
                    <h3>Near Expire</h3>
                    <p>{nearExpire.length}</p>
                </div>

                <div className="card">
                    <h3>Notifications</h3>
                    <p>{notify.length}</p>
                </div>
            </div>
        </div>
    );
}