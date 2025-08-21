// src/pages/ForgotPassword.jsx
import { useState } from "react";
import PageShell from "../components/PageShell";
import TextField from "../components/TextField";

const PURPLE = "#7B2CBF";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // Trigger your backend to send reset link
    alert(`Reset link sent to ${email}`);
  };

  return (
    <PageShell>
      <h1 className="text-4xl md:text-5xl font-bold text-purple-900">
        Reset the password
      </h1>

      <p className="mt-6 text-xl text-gray-700">
        Enter the email address associated with your account, and we’ll email
        you a link to your password.
      </p>

      <form onSubmit={submit} className="mt-8 space-y-6">
        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

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
