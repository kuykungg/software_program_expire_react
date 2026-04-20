import { Package, AlertTriangle, Bell } from "lucide-react"; // Optional icon library
import useSoftware from "../hooks/useSoftware";
import useNotifications from "../hooks/useNotifications";
import "../style/Dashboard.css";

export default function DashboardPage() {
    const { data, nearExpire } = useSoftware();
    const { notify } = useNotifications();

    const stats = [
        { label: "Total Software", value: data.length, icon: <Package />, color: "blue" },
        { label: "Near Expire", value: nearExpire.length, icon: <AlertTriangle />, color: "orange" },
        { label: "Notifications", value: notify.length, icon: <Bell />, color: "purple" },
    ];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard Overview</h1>
                <p>Welcome back! Here is what's happening today.</p>
            </header>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className={`stat-card ${stat.color}`}>
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-content">
                            <h3>{stat.label}</h3>
                            <p className="stat-number">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
