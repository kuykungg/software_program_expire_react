import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkStyle = ({ isActive }) => ({
        marginRight: "12px",
        textDecoration: "none",
        fontWeight: isActive ? "bold" : "normal",
    });

    return (
        <nav style={{ marginBottom: "20px" }}>
            <NavLink to="/" style={linkStyle}>
                Dashboard
            </NavLink>

            <NavLink to="/software" style={linkStyle}>
                Software
            </NavLink>

            <NavLink to="/notifications" style={linkStyle}>
                Notifications
            </NavLink>

            <NavLink to="/reports" style={linkStyle}>
                Reports
            </NavLink>
        </nav>
    );
}