// A reusable layout: starry forest bg + glass card wrapper
import bg from "../assets/auth-bg.jpg"; // <-- put your purple forest image here

export default function AuthLayout({ title, children }) {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* purple gradient tint over bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/60 to-indigo-800/60 " />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8 hover:outline-none focus:outline-none hover:ring-2 hover:ring-purple-300/60  hover:border-white/40">
            {title && (
              <h1 className="text-3xl font-extrabold text-white text-center mb-6 drop-shadow">
                {title}
              </h1>
            )}
            {children}
          </div>
          <p className="mt-4 text-center text-white/80 text-sm">Fone<span className="text-purple-200">GOGO</span></p>
        </div>
      </div>
    </div>
  );
}
