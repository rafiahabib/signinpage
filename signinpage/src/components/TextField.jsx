import { useState } from "react";

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 3-9 6v1h18v-1c0-3-4-6-9-6Z"/>
    </svg>
  );
}
function IconLock() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM10 7a2 2 0 0 1 4 0v2h-4Z"/>
    </svg>
  );
}
function IconEye({ open }) {
  return open ? (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 5C5 5 2 12 2 12s3 7 10 7 10-7 10-7-3-7-10-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M3 3 21 21l-1.5 1.5-2.1-2.1A12.6 12.6 0 0 1 12 19C5 19 2 12 2 12a16 16 0 0 1 6-6l-2.2-2.2L3 3Zm7.7 7.7a3 3 0 0 0 3.6 3.6l-3.6-3.6ZM8.6 6A12.6 12.6 0 0 1 12 5c7 0 10 7 10 7a15.8 15.8 0 0 1-3.1 4.3l-2-2A5 5 0 0 0 12 7a5 5 0 0 0-3.4 1.3L8.6 6Z"/>
    </svg>
  );
}

export default function TextField({
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
  icon = "user",        // "user" | "lock" | null
  withEye = false,
  value,
  onChange,
}) {
  const [show, setShow] = useState(false);
  const inputType = withEye ? (show ? "text" : "password") : type;

  return (
    <div className="relative">
      {/* left icon */}
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-white/70 pointer-events-none">
          {icon === "user" ? <IconUser /> : <IconLock />}
        </div>
      )}

      <input
        name={name}
        type={inputType}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl bg-white/10 text-white placeholder-white/70 border border-white/20 
        hover:outline-none focus:outline-none hover:ring-2 hover:ring-purple-300/60  hover:border-white/40
        px-12 py-3 pr-${withEye ? "12" : "4"} shadow-inner`}
      />

      {/* eye toggle */}
      {withEye && (
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/80 hover:text-white"
          aria-label={show ? "Hide password" : "Show password"}
        >
          <IconEye open={show} />
        </button>
      )}
    </div>
  );
}
