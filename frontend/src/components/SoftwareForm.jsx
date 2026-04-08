export default function SoftwareForm({
                                         form,
                                         editId,
                                         onChange,
                                         onSubmit,
                                         onCancel,
                                     }) {
    return (
        <div className="form-box">
            <h2>{editId ? "Edit Software" : "Create Software"}</h2>

            <input
                name="program_name"
                placeholder="Program Name"
                value={form.program_name}
                onChange={onChange}
            />

            <input
                name="program_vendor"
                placeholder="Vendor"
                value={form.program_vendor}
                onChange={onChange}
            />

            <input
                name="license_key"
                placeholder="License Key"
                value={form.license_key}
                onChange={onChange}
            />

            <input
                name="seat_max"
                type="number"
                placeholder="Seat Max"
                value={form.seat_max}
                onChange={onChange}
            />

            <input
                name="seat_using"
                type="number"
                placeholder="Seat Using"
                value={form.seat_using}
                onChange={onChange}
            />

            <input
                name="license_start_at"
                type="date"
                value={form.license_start_at}
                onChange={onChange}
            />

            <input
                name="license_expire_at"
                type="date"
                value={form.license_expire_at}
                onChange={onChange}
            />

            <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={onChange}
            />

            {editId ? (
                <>
                    <button onClick={onSubmit}>Update</button>
                    <button onClick={onCancel}>Cancel</button>
                </>
            ) : (
                <button onClick={onSubmit}>Create</button>
            )}
        </div>
    );
}