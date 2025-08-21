// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white h-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo on the left */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
