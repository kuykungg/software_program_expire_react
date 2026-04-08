import { formatDate } from "../utils/licenseUtils";

export default function SoftwareTable({
                                          data,
                                          editingStatusId,
                                          setEditingStatusId,
                                          onStatusChange,
                                          onEdit,
                                          onDelete,
                                      }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Program</th>
                <th>Vendor</th>
                <th>License</th>
                <th>Max</th>
                <th>Using</th>
                <th>Left</th>
                <th>Status</th>
                <th>Start</th>
                <th>End</th>
                <th>Description</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.program_name}</td>
                    <td>{item.program_vendor}</td>
                    <td>{item.license_key}</td>
                    <td>{item.seat_max}</td>
                    <td>{item.seat_using}</td>
                    <td>{item.seat_left}</td>
                    <td
                        onClick={() => setEditingStatusId(item.id)}
                        style={{ cursor: "pointer", minWidth: "90px" }}
                    >
                        {editingStatusId === item.id ? (
                            <select
                                autoFocus
                                defaultValue={String(item.is_active)}
                                onChange={(e) =>
                                    onStatusChange(item.id, e.target.value === "true")
                                }
                                onBlur={() => setEditingStatusId(null)}
                            >
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        ) : (
                            <span>{item.is_active ? "Active" : "Inactive"}</span>
                        )}
                    </td>
                    <td>{formatDate(item.license_start_at)}</td>
                    <td>{formatDate(item.license_expire_at)}</td>
                    <td>{item.description}</td>
                    <td>
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}