import NearExpireTable from "../components/NearExpireTable";
import useSoftware from "../hooks/useSoftware";

export default function ReportsPage() {
    const { nearExpire } = useSoftware();

    return (
        <div>
            <h1>Near Expire Report</h1>

            <NearExpireTable data={nearExpire} />
        </div>
    );
}

