import { formatDate, getDaysLeft } from "../utils/licenseUtils";

export default function NearExpireTable({ data }) {
    return (
        <>
            <h2>Near expire license table</h2>
            <table className="wide-table">
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
                    <th>Expire Date</th>
                    <th>Date left</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => {
                    const diffDays = getDaysLeft(item.license_expire_at);

                    return (
                        <tr key={item.id}>
                            <td>{item.program_name}</td>
                            <td>{item.program_vendor}</td>
                            <td>{item.license_key}</td>
                            <td>{item.seat_max}</td>
                            <td>{item.seat_using}</td>
                            <td>{item.seat_left}</td>
                            <td>{item.is_active ? "Active" : "Inactive"}</td>
                            <td>{formatDate(item.license_start_at)}</td>
                            <td>{formatDate(item.license_expire_at)}</td>
                            <td style={{ color: "red", fontWeight: "bold" }}>
                                {diffDays} days
                            </td>
                            <td>{item.description}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}