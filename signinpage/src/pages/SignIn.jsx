import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout.jsx";
import TextField from "../components/TextField.jsx";
import { loginUser } from "../utils/authMock.js";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    const res = loginUser(form);
    if (!res.ok) {
      setErr(res.message);
      if (res.message.toLowerCase().includes("no account")) {
        setTimeout(() => nav("/signup"), 800); // nudge to signup
      }
      return;
    }
    // Success: Navigate where you want (home/dashboard)
    alert(`Welcome ${res.user.username || res.user.email}!`);
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={submit} className="space-y-5">
        <TextField name="email" type="email" placeholder="Username" autoComplete="email" required icon="user" value={form.email} onChange={onChange}/>
        <TextField name="password" placeholder="Password" autoComplete="current-password" required icon="lock" withEye value={form.password} onChange={onChange}/>

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2 text-white/90">
            <input type="checkbox" name="remember" checked={form.remember} onChange={onChange}
              className="rounded border-white/30 bg-white/10 text-purple-400 focus:ring-purple-400"/>
            Remember Me
          </label>
          <Link to="/reset" className="text-white/90 hover:text-white underline">Forgot Password</Link>
        </div>

        {err && <p className="text-red-200 text-sm">{err}</p>}

        <button type="submit" className="w-full py-3 rounded-full bg-white text-black font-semibold hover:opacity-95 active:opacity-90 transition">
          Login
        </button>

        <p className="text-center text-white/90">
          Don&apos;t have account?{" "}
          <Link to="/signup" className="font-semibold underline text-white">Register</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
