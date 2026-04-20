import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import SoftwarePage from "./pages/SoftwarePage";
import NotificationsPage from "./pages/NotificationsPage";
import ReportsPage from "./pages/ReportsPage";
import CreateSoftwarePage from "./pages/CreateSoftwarePage";
import EditSoftwarePage from "./pages/EditSoftwarePage";
import NotificationContainer from "./components/NotificationContainer";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Navbar />
                <NotificationContainer />

                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/software" element={<SoftwarePage />} />
                    <Route path="/software/create" element={<CreateSoftwarePage />} />
                    <Route path="/software/edit/:id" element={<EditSoftwarePage />} />
                    <Route path="/notifications" element={<NotificationsPage />} />
                    <Route path="/reports" element={<ReportsPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;