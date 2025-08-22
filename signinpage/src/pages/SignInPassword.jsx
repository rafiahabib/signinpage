// src/pages/SignInPassword.jsx
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import PageShell from "../components/PageShell";
import TextField from "../components/TextField";

const PURPLE = "#7B2CBF";

export default function SignInPassword() {
  const loc = useLocation();
  const nav = useNavigate();
  const emailFromState = loc.state?.email ?? "";
  const [email, setEmail] = useState(emailFromState);
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(!!loc.state?.remember);

  const submit = (e) => {
    e.preventDefault();
    // Handle your auth here
    alert("Signed in!");
    nav("/");
  };

  return (
    <PageShell>
      <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mt-6">
        Glad to see you back again!
      </h1>
      <p className="mt-2 text-lg text-gray-500">
        Enter your password to retrieve your information
      </p>

      <form onSubmit={submit} className="mx-auto mt-8 max-w-2xl space-y-5 rounded-2xl border border-gray-200 p-6">
        <div className="space-y-2">
          <div className="text-sm text-gray-800">Email@gmail.com</div>
          <TextField
            label=""
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        <TextField
          label="Password"
          name="password"
          type="password"
          placeholder="•••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-purple-300"
            />
            Remember for 30 days
          </label>
          <Link
            to="/forgot-password"
            className="text-purple-700 hover:underline"
          >
            Forgot password
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg px-4 py-3 font-semibold text-white"
          style={{ backgroundColor: PURPLE }}
        >
          Next
        </button>
      </form>
    </PageShell>
  );
}
