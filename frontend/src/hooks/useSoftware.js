import { useEffect, useMemo, useState } from "react";
import {
    createSoftware,
    deleteSoftware,
    getSoftware,
    updateSoftware,
    updateSoftwareStatus,
} from "../services/softwareService";
import { getNearExpireLicenses } from "../utils/licenseUtils";

const initialForm = {
    program_name: "",
    program_vendor: "",
    license_key: "",
    seat_max: 0,
    seat_using: 0,
    is_active: true,
    license_start_at: "",
    license_expire_at: "",
    description: "",
};

export default function useSoftware() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);
    const [editingStatusId, setEditingStatusId] = useState(null);
    const [form, setForm] = useState(initialForm);

    const loadData = async () => {
        const result = await getSoftware();
        setData(result);
    };

    useEffect(() => {
        loadData();
    }, []);

    const resetForm = () => {
        setForm(initialForm);
        setEditId(null);
    };

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value,
        }));
    };

    const handleSubmit = async () => {
        if (editId) {
            await updateSoftware(editId, form);
        } else {
            await createSoftware(form);
        }
        await loadData();
        resetForm();
    };

    const startEdit = (item) => {
        setEditId(item.id);
        setForm({
            program_name: item.program_name,
            program_vendor: item.program_vendor,
            license_key: item.license_key,
            seat_max: item.seat_max,
            seat_using: item.seat_using,
            is_active: item.is_active,
            license_start_at: item.license_start_at?.split("T")[0] || "",
            license_expire_at: item.license_expire_at?.split("T")[0] || "",
            description: item.description || "",
        });
    };

    const handleDelete = async (id) => {
        await deleteSoftware(id);
        await loadData();
    };

    const handleStatusChange = async (id, newStatus) => {
        await updateSoftwareStatus(id, newStatus);
        setEditingStatusId(null);
        await loadData();
    };

    const filteredData = useMemo(() => {
        return data.filter((item) =>
            item.program_name.toLowerCase().includes(search.toLowerCase()) ||
            item.program_vendor.toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search]);

    const nearExpire = useMemo(() => getNearExpireLicenses(data), [data]);

    return {
        data,
        filteredData,
        nearExpire,
        search,
        setSearch,
        form,
        editId,
        editingStatusId,
        setEditingStatusId,
        handleChange,
        handleSubmit,
        startEdit,
        handleDelete,
        handleStatusChange,
        resetForm,
    };
}