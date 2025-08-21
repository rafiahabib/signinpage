// src/components/PageShell.jsx
import Navbar from "./Navbar";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-2xl px-5">{children}</main>
    </div>
  );
}
