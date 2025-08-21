// src/components/TextField.jsx
export default function TextField({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  autoComplete,
}) {
  return (
    <label className="block">
      {label && (
        <div className="mb-2 text-sm font-medium text-gray-800">{label}</div>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
      />
    </label>
  );
}
