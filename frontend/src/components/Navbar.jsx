import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkStyle = ({ isActive }) => ({
        marginRight: "24px",
        paddingBottom: "4px",
        textDecoration: "none",
        fontSize: "14px",
        letterSpacing: "0.5px",
        // Smoothly transition the color and border
        transition: "all 0.2s ease-in-out",
        color: isActive ? "#000000" : "#888888",
        borderBottom: isActive ? "2px solid #000000" : "2px solid transparent",
        fontWeight: "500",
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