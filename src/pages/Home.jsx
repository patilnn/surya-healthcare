import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <main className="space-y-10">
      <section className="bg-blue-100 text-center py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-5xl font-bold tracking-tight text-blue-700">
            Welcome to Surya Hospital
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Advanced healthcare with compassionate care and trusted medical expertise.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="p-10 grid md:grid-cols-3 gap-6">
        <ServiceCard title="Cardiology" desc="Heart care & treatment" />
        <ServiceCard title="ICU Care" desc="24/7 emergency services" />
        <ServiceCard title="Diagnostics" desc="Advanced lab facilities" />
      </section>

      {/* Doctor Section */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold">Meet Our Doctor</h2>
        <p className="mt-4 text-gray-600">
          Dr. Suryawanshi - Experienced Physician with 13+ years experience
        </p>
      </section>

      {/* Testimonials */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold">Patient Testimonials</h2>
        <p className="mt-4 text-gray-600">
          "Excellent care and friendly staff!"  
        </p>
      </section>

      {/* Emergency */}
      <section className="bg-red-100 p-10 text-center">
        <h2 className="text-xl font-bold text-red-600">
          Emergency? Call Now
        </h2>
        <p className="mt-2">📞 +91 9876543210</p>
      </section>
    </main>
  );
}