type SelectProps = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

export default function Select({ options, value, onChange }: SelectProps) {

    const optionsList = options.map((option) => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
    ));

    return (
        <select
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {optionsList}
        </select>
    );
}