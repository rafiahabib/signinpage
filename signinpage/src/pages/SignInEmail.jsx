// src/pages/SignInEmail.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import TextField from "../components/TextField";

const PURPLE = "#7B2CBF";

export default function SignInEmail() {
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState(false);
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // Normally you'd check if the email exists, then continue:
    nav("/signin/password", { state: { email, remember } });
  };

  return (
    <PageShell>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Who goes there?
      </h1>

      <form onSubmit={submit} className="mt-8 space-y-6">
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full rounded-lg px-4 py-3 font-semibold text-white"
          style={{ backgroundColor: PURPLE }}
        >
          Next
        </button>

        <div className="grid gap-3">
          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="•••••••"
            value=""
            onChange={() => {}}
          />
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300"
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
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 font-medium"
          >
            <span role="img" aria-label="g">🔵</span> Sign in with Google
          </button>
          <button
            type="button"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 font-medium"
          >
            <span role="img" aria-label="apple">🍎</span> Sign in with Apple
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-700 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </PageShell>
  );
}
