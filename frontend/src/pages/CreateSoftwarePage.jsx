import { useNavigate } from "react-router-dom";
import SoftwareForm from "../components/SoftwareForm";
import useSoftware from "../hooks/useSoftware";

export default function CreateSoftwarePage() {
    const software = useSoftware();
    const navigate = useNavigate();

    const handleCreate = async (e) => {
        await software.handleSubmit(e);
        navigate("/software");
    };

    return (
        <div>
            <h1>Create Software</h1>

            <SoftwareForm
                form={software.form}
                editId={null}
                onChange={software.handleChange}
                onSubmit={handleCreate}
                onCancel={() => navigate("/software")}
            />
        </div>
    );
}