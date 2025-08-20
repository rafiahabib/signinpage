import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout.jsx";
import TextField from "../components/TextField.jsx";
import { registerUser } from "../utils/authMock.js";

export default function SignUp() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const res = registerUser(form);
    if (!res.ok) { setErr(res.message); return; }
    nav("/signin");
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={submit} className="space-y-5">
        <TextField name="username" placeholder="Username" required icon="user" value={form.username} onChange={onChange}/>
        <TextField name="email" type="email" placeholder="Email" autoComplete="email" required icon="user" value={form.email} onChange={onChange}/>
        <TextField name="password" placeholder="Create Password" autoComplete="new-password" required icon="lock" withEye value={form.password} onChange={onChange}/>

        {err && <p className="text-red-200 text-sm">{err}</p>}

        <button type="submit" className="w-full py-3 rounded-full bg-white text-black font-semibold hover:opacity-95 active:opacity-90 transition">
          Register
        </button>

        <p className="text-center text-white/90">
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold underline text-white">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
