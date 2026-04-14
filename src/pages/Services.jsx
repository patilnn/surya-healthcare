import { Heart, Activity, Stethoscope, Brain, Bone, Eye, Baby, Syringe, Shield, Clock, Phone, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
    title: "General Medicine",
    desc: "Comprehensive primary care for all ages including preventive medicine, health screenings, and treatment of common illnesses.",
    features: ["Annual Health Checkups", "Vaccination", "Preventive Care", "Minor Illness Treatment"]
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Cardiology",
    desc: "Specialized heart care including diagnosis and treatment of cardiovascular diseases, hypertension, and heart conditions.",
    features: ["ECG & Echocardiogram", "Blood Pressure Management", "Heart Disease Prevention", "Cardiac Rehabilitation"]
  },
  {
    icon: <Activity className="w-8 h-8 text-blue-500" />,
    title: "Emergency Care",
    desc: "24/7 emergency medical services for acute conditions, injuries, and urgent medical needs with immediate attention.",
    features: ["24/7 Emergency Service", "Trauma Care", "Acute Illness Management", "First Aid & Stabilization"]
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    title: "Neurology",
    desc: "Diagnosis and treatment of nervous system disorders including headaches, seizures, and neurological conditions.",
    features: ["Headache Management", "Neurological Screening", "Nerve Disorder Treatment", "Stroke Prevention"]
  },
  {
    icon: <Bone className="w-8 h-8 text-gray-600" />,
    title: "Orthopedics",
    desc: "Comprehensive bone and joint care including fracture treatment, arthritis management, and musculoskeletal disorders.",
    features: ["Fracture Care", "Arthritis Management", "Joint Pain Treatment", "Physical Therapy"]
  },
  {
    icon: <Eye className="w-8 h-8 text-green-600" />,
    title: "Ophthalmology",
    desc: "Complete eye care services including vision testing, eye examinations, and treatment of common eye conditions.",
    features: ["Vision Testing", "Eye Examinations", "Eye Infection Treatment", "Vision Correction"]
  },
  {
    icon: <Baby className="w-8 h-8 text-pink-500" />,
    title: "Pediatrics",
    desc: "Specialized healthcare for infants, children, and adolescents including vaccinations, growth monitoring, and pediatric care.",
    features: ["Child Health Checkups", "Vaccination Program", "Growth Monitoring", "Pediatric Illness Care"]
  },
  {
    icon: <Syringe className="w-8 h-8 text-indigo-600" />,
    title: "Diabetes Care",
    desc: "Comprehensive diabetes management including blood sugar monitoring, insulin therapy, and lifestyle counseling.",
    features: ["Blood Sugar Monitoring", "Insulin Therapy", "Diabetes Education", "Nutrition Counseling"]
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-600" />,
    title: "Preventive Medicine",
    desc: "Proactive healthcare services focused on disease prevention, health maintenance, and wellness programs.",
    features: ["Health Screenings", "Lifestyle Counseling", "Risk Assessment", "Wellness Programs"]
  }
];

const Services = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-teal-50">
            Comprehensive healthcare services delivered with expertise and compassion. 
            From preventive care to specialized treatments, we're here for your health needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose MediCare Plus Clinic</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our patient-centered approach and comprehensive medical care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">5000+ Happy Patients</h3>
              <p className="text-gray-600">Trusted by thousands of patients for their healthcare needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">13+ Years Experience</h3>
              <p className="text-gray-600">Extensive medical expertise across multiple specialties</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Emergency Support</h3>
              <p className="text-gray-600">Always available when you need medical attention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl mb-8 text-teal-50">
            Take the first step towards better health with our expert medical care
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;