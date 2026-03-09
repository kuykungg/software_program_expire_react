import { useState } from "react";

export default function SoftwareForm({ onSubmit }) {

    const [formData, setFormData] = useState({
        program_name: "",
        program_vendor: "",
        description: "",
        license_key: "",
        seat_max: 0,
        seat_using: 0,
        is_active: true,
        license_start_at: "",
        license_expire_at: ""
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                name="program_name"
                placeholder="Program Name"
                value={formData.program_name}
                onChange={handleChange}
            />

            <input
                name="program_vendor"
                placeholder="Vendor"
                value={formData.program_vendor}
                onChange={handleChange}
            />

            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />

            <input
                name="license_key"
                placeholder="License Key"
                value={formData.license_key}
                onChange={handleChange}
            />

            <input
                type="number"
                name="seat_max"
                placeholder="Max Seat"
                value={formData.seat_max}
                onChange={handleChange}
            />

            <input
                type="number"
                name="seat_using"
                placeholder="Seat Using"
                value={formData.seat_using}
                onChange={handleChange}
            />

            <label>
                Active
                <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleChange}
                />
            </label>

            <input
                type="date"
                name="license_start_at"
                value={formData.license_start_at}
                onChange={handleChange}
            />

            <input
                type="date"
                name="license_expire_at"
                value={formData.license_expire_at}
                onChange={handleChange}
            />

            <button type="submit">
                Save
            </button>

        </form>
    );
}