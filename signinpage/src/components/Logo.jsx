// src/components/Logo.jsx
import logo from "../assets/logo.png"; // adjust path if needed

export default function Logo() {
  return (
    <div className="p-6">
      <img 
        src={logo} 
        alt="FoneGoGo Logo" 
        className="h-12 w-auto object-contain" 
      />
    </div>
  );
}
