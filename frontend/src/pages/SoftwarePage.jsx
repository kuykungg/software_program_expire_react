import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SoftwareTable from "../components/SoftwareTable";
import useSoftware from "../hooks/useSoftware";

export default function SoftwarePage() {
    const software = useSoftware();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Software Licenses</h1>

            <button onClick={() => navigate("/software/create")}>
                Create Software
            </button>

            <SearchBar
                value={software.search}
                onChange={software.setSearch}
            />

            <div className="table-container">
                <SoftwareTable
                    data={software.filteredData}
                    editingStatusId={software.editingStatusId}
                    setEditingStatusId={software.setEditingStatusId}
                    onStatusChange={software.handleStatusChange}
                    onEdit={(id) => navigate(`/software/edit/${id}`)}
                    onDelete={software.handleDelete}
                />
            </div>
        </div>
    );
}