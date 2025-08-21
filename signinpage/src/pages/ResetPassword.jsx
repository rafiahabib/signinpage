// src/pages/ResetPassword.jsx
import { useState } from "react";
import PageShell from "../components/PageShell";
import TextField from "../components/TextField";

const PURPLE = "#7B2CBF";

function isStrong(pw) {
  return (
    pw.length >= 8 &&
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /\d/.test(pw)
  );
}

export default function ResetPassword() {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [touched, setTouched] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isStrong(pw)) return;
    if (pw !== confirm) return;
    // call your backend to set the new password
    alert("Password updated!");
  };

  const showRules = touched && !isStrong(pw);
  const mismatch = touched && pw !== confirm;

  return (
    <PageShell>
      <h1 className="text-4xl md:text-5xl font-bold text-purple-900">
        Reset the password
      </h1>

      <p className="mt-6 text-xl text-gray-700">
        At least 8 characters, including 1 uppercase letter, 1 lowercase letter
        and 1 digit. Because you never know.
      </p>

      <form onSubmit={submit} className="mt-8 space-y-6">
        <TextField
          label="New Password"
          name="new-password"
          type="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          autoComplete="new-password"
        />
        {showRules && (
          <ul className="text-sm text-red-600 ml-1 space-y-1">
            <li>• Minimum 8 characters</li>
            <li>• At least one uppercase letter</li>
            <li>• At least one lowercase letter</li>
            <li>• At least one digit</li>
          </ul>
        )}

        <TextField
          label="Confirm Password"
          name="confirm-password"
          type="password"
          placeholder="Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          autoComplete="new-password"
        />
        {mismatch && (
          <div className="text-sm text-red-600 ml-1">
            Passwords don’t match.
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-lg px-4 py-3 font-semibold text-white"
          style={{ backgroundColor: PURPLE }}
        >
          Submit
        </button>
      </form>
    </PageShell>
  );
}
