export default function SoftwareSearch({ search, setSearch }) {

    return (
        <input
            type="text"
            placeholder="Search name or vendor"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );

}