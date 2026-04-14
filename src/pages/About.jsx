import { Link } from "react-router-dom";
import { GraduationCap, Award, Users, Stethoscope, Heart, Clock, MapPin, Phone, Mail, CheckCircle, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MediCare Plus Clinic</h1>
          <p className="text-xl max-w-3xl mx-auto text-teal-50">
            Delivering exceptional healthcare with compassion, expertise, and a patient-centered approach for over 13 years.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Dr. John Smith
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-teal-600" />
                  <span className="text-lg font-semibold text-gray-700">MBBS, MD (Internal Medicine)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-teal-600" />
                  <span className="text-lg text-gray-700">13+ Years of Medical Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-teal-600" />
                  <span className="text-lg text-gray-700">5000+ Happy Patients Treated</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Dr. John Smith is a highly respected physician with extensive experience in internal medicine and chronic disease management. 
                Known for his compassionate approach and thorough diagnostic skills, he has dedicated his career to providing exceptional healthcare to the community.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Specializations</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>Internal Medicine</li>
                    <li>Chronic Disease Management</li>
                    <li>Emergency Medicine</li>
                    <li>Preventive Healthcare</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Professional Memberships</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>Indian Medical Association</li>
                    <li>Association of Physicians of India</li>
                    <li>Medical Council of India</li>
                    <li>Local Medical Society</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-8">
              <div className="w-32 h-32 bg-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Stethoscope className="w-16 h-16 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. John Smith</h3>
                <p className="text-gray-600 mb-4">MBBS, MD (Internal Medicine)</p>
                <p className="text-gray-600 mb-6">Committed to providing the highest standard of medical care with integrity and compassion.</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-teal-700">13+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-700">5000+</div>
                    <div className="text-sm text-gray-600">Patients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-700">15+</div>
                    <div className="text-sm text-gray-600">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Healthcare Facility</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern medical infrastructure equipped with advanced diagnostic facilities and comfortable patient care environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We prioritize patient comfort and well-being with personalized treatment plans and compassionate care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Diagnostics</h3>
              <p className="text-gray-600">
                State-of-the-art medical equipment for accurate diagnosis and effective treatment planning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Emergency Support</h3>
              <p className="text-gray-600">
                Round-the-clock medical emergency services with immediate response and critical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-teal-600" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-6">
                To provide exceptional healthcare services with compassion, integrity, and medical excellence. 
                We are committed to improving the health and well-being of our community through personalized care, 
                advanced medical technology, and continuous innovation in treatment approaches.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Deliver quality healthcare with trust and compassion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Maintain highest standards of medical ethics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Ensure affordable and accessible healthcare</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-teal-600" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-6">
                To be the leading healthcare provider in our region, recognized for medical excellence, 
                innovative treatment approaches, and unwavering commitment to patient care. We envision a 
                healthier community where quality healthcare is accessible to all.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Pioneer innovative medical treatments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Expand healthcare accessibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Build healthier communities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visit Our Clinic</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">
                  123 Healthcare Road<br />
                  Medical District, City<br />
                  State - 400001
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Contact</h3>
                <p className="text-gray-600">
                  Phone: +91 9876543210<br />
                  Emergency: +91 9876543211<br />
                  WhatsApp: +91 9876543210
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">
                  info@drsuryawanshi.com<br />
                  appointments@drsuryawanshi.com<br />
                  emergency@drsuryawanshi.com
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}