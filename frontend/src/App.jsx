import "./App.css";
import SoftwareForm from "./components/SoftwareForm";
import SoftwareTable from "./components/SoftwareTable";
import NearExpireTable from "./components/NearExpireTable";
import NotificationList from "./components/NotificationList";
import SearchBar from "./components/SearchBar";
import useSoftware from "./hooks/useSoftware";
import useNotifications from "./hooks/useNotifications";

function App() {
    const software = useSoftware();
    const notifications = useNotifications();

    return (
        <div className="container">
            <h1>Software Licenses</h1>

            <SoftwareForm
                form={software.form}
                editId={software.editId}
                onChange={software.handleChange}
                onSubmit={software.handleSubmit}
                onCancel={software.resetForm}
            />

            <SearchBar value={software.search} onChange={software.setSearch} />

            <div className="table-container">
                <SoftwareTable
                    data={software.filteredData}
                    editingStatusId={software.editingStatusId}
                    setEditingStatusId={software.setEditingStatusId}
                    onStatusChange={software.handleStatusChange}
                    onEdit={software.startEdit}
                    onDelete={software.handleDelete}
                />

                <NearExpireTable data={software.nearExpire} />
            </div>

            <NotificationList
                notify={notifications.notify}
                onDelete={notifications.handleDeleteNotification}
            />
        </div>
    );
}

export default App;