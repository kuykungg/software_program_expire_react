import SoftwareForm from "../components/SoftwareForm";
import SearchBar from "../components/SearchBar";
import SoftwareTable from "../components/SoftwareTable";
import useSoftware from "../hooks/useSoftware";

export default function SoftwarePage() {
    const software = useSoftware();

    return (
        <div>
            <h1>Software Licenses</h1>

            <SoftwareForm
                form={software.form}
                editId={software.editId}
                onChange={software.handleChange}
                onSubmit={software.handleSubmit}
                onCancel={software.resetForm}
            />

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
                    onEdit={software.startEdit}
                    onDelete={software.handleDelete}
                />
            </div>
        </div>
    );
}