import { Link } from "react-router-dom";
import { Phone, Clock, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-100" aria-label="Primary navigation">
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-2">
        <div className="mx-auto max-w-6xl px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>Emergency: +91 9876543210</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>24/7 Service Available</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>Caring for Your Health</span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">MediCare Plus Clinic</h1>
              <p className="text-xs text-gray-600">Advanced Healthcare Solutions</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
            >
              About Doctor
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}