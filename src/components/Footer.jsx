import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="bg-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Clinic Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">MediCare Plus Clinic</h3>
                  <p className="text-sm text-gray-400">Advanced Healthcare Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Providing compassionate healthcare with 13+ years of medical excellence. 
                Your health is our top priority.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <span className="text-sm">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <span className="text-sm">i</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors">
                    About Doctor
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    General Medicine
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Emergency Care
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Chronic Disease Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Health Checkups
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Telemedicine
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <div>
                    <p className="text-gray-300">+91 9876543210</p>
                    <p className="text-sm text-gray-400">Emergency: +91 9876543211</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <div>
                    <p className="text-gray-300">info@medicareplus.com</p>
                    <p className="text-sm text-gray-400">appointments@medicareplus.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300">123 Healthcare Road</p>
                    <p className="text-gray-300">Medical District, City</p>
                    <p className="text-gray-300">State - 400001</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-400" />
                  <div>
                    <p className="text-gray-300">Mon-Sat: 9AM-8PM</p>
                    <p className="text-gray-300">Sunday: 10AM-2PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; 2026 MediCare Plus Clinic. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Medical Disclaimer
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-xs">
            <p>Designed with <Heart className="w-3 h-3 inline text-red-500" /> for your healthcare needs</p>
          </div>
        </div>
      </div>
    </footer>
  );
}