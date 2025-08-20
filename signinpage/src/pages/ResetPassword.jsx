import { Link } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout.jsx";
import TextField from "../components/TextField.jsx";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // TODO: call API to send reset email
    alert(`Reset link sent to ${email}`);
  };

  return (
    <AuthLayout title="Reset Password">
      <form onSubmit={submit} className="space-y-5">
        <TextField
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="user"
        />

        <button type="submit" className="w-full py-3 rounded-full bg-white text-black font-semibold hover:opacity-95 active:opacity-90 transition">
          Send Reset Link
        </button>

        <p className="text-center text-white/90">
          Remembered it?{" "}
          <Link to="/signin" className="font-semibold underline text-white">Back to Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
