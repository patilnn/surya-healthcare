import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { Phone, Clock, Award, Users, Stethoscope, Heart, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6" />
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">13+ Years Experience</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Health is Our <span className="text-yellow-300">Top Priority</span>
              </h1>
              <p className="text-xl mb-8 text-teal-50">
                Dr. John Smith provides compassionate healthcare with advanced medical expertise and personalized treatment plans.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold">5000+</div>
                    <div className="text-sm text-teal-100">Happy Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Stethoscope className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold">13+</div>
                    <div className="text-sm text-teal-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm text-teal-100">Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm text-teal-100">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-gray-50 border-b">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-8 h-8 text-teal-600" />
              <div>
                <div className="font-semibold text-gray-800">Working Hours</div>
                <div className="text-sm text-gray-600">Mon-Sat: 9AM-8PM</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-8 h-8 text-teal-600" />
              <div>
                <div className="font-semibold text-gray-800">Emergency</div>
                <div className="text-sm text-gray-600">24/7 Available</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-teal-600" />
              <div>
                <div className="font-semibold text-gray-800">Special Care</div>
                <div className="text-sm text-gray-600">Personalized Treatment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services with modern medical facilities and experienced medical staff.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="General Medicine" desc="Primary healthcare and preventive medicine" />
            <ServiceCard title="Chronic Disease Management" desc="Long-term care for diabetes, hypertension, and more" />
            <ServiceCard title="Emergency Care" desc="24/7 emergency medical services" />
            <ServiceCard title="Health Checkups" desc="Comprehensive health screening packages" />
            <ServiceCard title="Vaccination" desc="Immunization services for all ages" />
            <ServiceCard title="Telemedicine" desc="Online consultations for remote care" />
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Meet Dr. John Smith
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 13 years of dedicated medical practice, Dr. Smith is committed to providing exceptional healthcare with a patient-centered approach.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">MBBS, MD - Internal Medicine</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Specialized in Chronic Disease Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Experienced in Emergency Medicine</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Member of Indian Medical Association</span>
                </div>
              </div>
              <Link
                to="/about"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
              >
                Learn More About Doctor
              </Link>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Stethoscope className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. John Smith</h3>
              <p className="text-gray-600 mb-4">MBBS, MD (Internal Medicine)</p>
              <p className="text-sm text-gray-500">"Committed to your health and well-being"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">{"\u2605"}</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Dr. Smith is an excellent physician. He takes time to listen and provides thorough care."
              </p>
              <div className="font-semibold text-gray-800">- Michael Johnson</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">{"\u2605"}</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The best medical care I've received. Dr. Smith's expertise and compassion are unmatched."
              </p>
              <div className="font-semibold text-gray-800">- Sarah Williams</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">{"\u2605"}</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Professional, caring, and knowledgeable. I trust Dr. Smith completely with my family's health."
              </p>
              <div className="font-semibold text-gray-800">- David Brown</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 text-white py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Medical Care?</h2>
          <p className="text-xl mb-6">We're here for you 24/7</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919876543210" 
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 9876543210
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Visit Clinic
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}