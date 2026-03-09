import SoftwareForm from "../components/CreateSoftwareForm";

export const getSoftware = async () => {
    const res = await fetch("http://localhost:3001/apiv1/software/getdata");
    return res.json();
};

export const createSoftware = async (data) => {
    const res = await fetch("http://localhost:3001/apiv1/software/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

};
<SoftwareForm onSubmit={createSoftware} />
return res.json();