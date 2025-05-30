import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router";
import AuthContext from "../context/AuthContext";

const PATHS = [
    { path: '/dashboard/intro', text: '📖 Intro' },
    { path: '/dashboard/inter', text: '🧩 Experiences' },
    { path: '/dashboard/devel', text: '💻 Developer' },
];

const DASHBOARD_PATHS = [
];

export default function DashboardLayouts() {
    const location = useLocation();
    const { logout } = useContext(AuthContext);

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#f3f4f6" }}>
            <aside style={{
                padding: "2rem",
                width: 240,
                position: "sticky",
                top: 0,
                height: "100vh",
                background: "linear-gradient(to bottom, #111827, #1f2937)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)"
            }}>
                <span style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    marginBottom: "2rem",
                    color: "#fff",
                    letterSpacing: "0.05em"
                }}>Dashboard</span>
                <nav style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
                    {PATHS.map((value, index) => (
                        <Link
                            key={index}
                            to={value.path}
                            style={{
                                display: "block",
                                padding: "0.5rem 1rem",
                                borderRadius: 8,
                                fontWeight: 500,
                                color: location.pathname === value.path ? "#fff" : "#d1d5db",
                                background: location.pathname === value.path ? "#2563eb" : "transparent",
                                textDecoration: "none",
                                transition: "background 0.2s, color 0.2s"
                            }}
                        >
                            {value.text.charAt(0).toUpperCase() + value.text.slice(1)}
                        </Link>
                    ))}
                </nav>
                <button
                    onClick={logout}
                    style={{
                        marginTop: "auto",
                        width: "100%",
                        padding: "0.5rem 0",
                        background: "#dc2626",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        fontWeight: 600,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        cursor: "pointer",
                        transition: "background 0.2s"
                    }}
                >
                    Logout
                </button>
            </aside>
            <main style={{ flex: 1, minHeight: "100vh", overflow: "auto", padding: 40 }}>
                <Outlet />
            </main>
        </div>
    );
}


const STYLE = {
    active: {
        color: "white"
    },
    inactive: {
        color: "gray"
    }
};