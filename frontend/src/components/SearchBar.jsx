export default function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Search program or vendor..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}