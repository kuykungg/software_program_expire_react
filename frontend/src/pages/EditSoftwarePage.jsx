import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SoftwareForm from "../components/SoftwareForm";
import useSoftware from "../hooks/useSoftware";

export default function EditSoftwarePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const software = useSoftware();

    useEffect(() => {
        software.startEdit(id);
    }, [id]);

    const handleUpdate = async (e) => {
        await software.handleSubmit(e);
        navigate("/software");
    };

    return (
        <div>
            <h1>Edit Software</h1>

            <SoftwareForm
                form={software.form}
                editId={id}
                onChange={software.handleChange}
                onSubmit={handleUpdate}
                onCancel={() => navigate("/software")}
            />
        </div>
    );
}