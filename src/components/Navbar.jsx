import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md" aria-label="Primary navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <h1 className="text-xl font-bold">Surya Hospital</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <Link to="/" className="hover:text-slate-100">
            Home
          </Link>
          <Link to="/about" className="hover:text-slate-100">
            About
          </Link>
          <Link to="/services" className="hover:text-slate-100">
            Services
          </Link>
          <Link to="/contact" className="hover:text-slate-100">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}