// src/components/PageShell.jsx
import Logo from "./Logo";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Logo />
      <div className="mx-auto w-full max-w-2xl px-5">{children}</div>
    </div>
  );
}
