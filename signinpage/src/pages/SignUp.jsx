// src/pages/SignUp.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import TextField from "../components/TextField";

const PURPLE = "#7B2CBF";

export default function SignUp() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    roles: { customer: false, shopkeeper: false, admin: false },
    terms: false,
  });
  const [touched, setTouched] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const toggleRole = (key) =>
    setForm((f) => ({ ...f, roles: { ...f.roles, [key]: !f.roles[key] } }));

  const submit = (e) => {
    e.preventDefault();
    setTouched(true);

    const pwOk =
      form.password.length >= 8 &&
      /[A-Z]/.test(form.password) &&
      /[a-z]/.test(form.password) &&
      /\d/.test(form.password);

    const same = form.password === form.confirm;
    const anyRole =
      form.roles.customer || form.roles.shopkeeper || form.roles.admin;

    if (!pwOk || !same || !form.terms || !anyRole) return;

    // TODO: call your API for signup with `form`
    alert("Account created!");
    nav("/signin");
  };

  const pwWeak =
    touched &&
    !(form.password.length >= 8 &&
      /[A-Z]/.test(form.password) &&
      /[a-z]/.test(form.password) &&
      /\d/.test(form.password));

  const pwMismatch = touched && form.password !== form.confirm;
  const noRole =
    touched &&
    !(
      form.roles.customer ||
      form.roles.shopkeeper ||
      form.roles.admin
    );
  const noTerms = touched && !form.terms;

  return (
    <PageShell>
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
        Join FoneGoGo to start buying &amp; selling devices.
      </h1>

      <form onSubmit={submit} className="mx-auto mt-8 max-w-2xl space-y-5 rounded-2xl border border-gray-200 p-6">
        <TextField
          label="Full Name"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="email address"
          value={form.email}
          onChange={onChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          placeholder="*****"
          value={form.password}
          onChange={onChange}
          autoComplete="new-password"
        />
        <TextField
          label="Confirm password"
          name="confirm"
          type="password"
          placeholder="******"
          value={form.confirm}
          onChange={onChange}
          autoComplete="new-password"
        />

        {pwWeak && (
          <div className="text-sm text-red-600">
            Password must be 8+ chars and include 1 uppercase, 1 lowercase and 1 digit.
          </div>
        )}
        {pwMismatch && (
          <div className="text-sm text-red-600">Passwords don’t match.</div>
        )}

        {/* Roles (checkboxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
              checked={form.roles.customer}
              onChange={() => toggleRole("customer")}
            />
            <span>Customer</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
              checked={form.roles.shopkeeper}
              onChange={() => toggleRole("shopkeeper")}
            />
            <span>Shopkeeper</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
              checked={form.roles.admin}
              onChange={() => toggleRole("admin")}
            />
            <span>Admin</span>
          </label>
        </div>
        {noRole && (
          <div className="text-sm text-red-600">Please choose at least one role.</div>
        )}

        {/* Terms */}
        <label className="mt-2 inline-flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-300"
            checked={form.terms}
            onChange={(e) =>
              setForm((f) => ({ ...f, terms: e.target.checked }))
            }
          />
          <span className="text-gray-800">
            Accept Terms &amp; Conditions.
          </span>
        </label>
        {noTerms && (
          <div className="text-sm text-red-600">You must accept Terms &amp; Conditions.</div>
        )}

        <button
          type="submit"
          className="w-full rounded-lg px-4 py-3 font-semibold text-white"
          style={{ backgroundColor: PURPLE }}
        >
          Sign Up
        </button>

        <button
          type="button"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 font-medium"
        >
          <span role="img" aria-label="g">🔵</span> Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-purple-700 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </PageShell>
  );
}
