import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="mx-auto max-w-5xl p-10 space-y-10">
      <section className="rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="text-4xl font-bold text-blue-700">About Surya Hospital</h1>
        <p className="mt-4 text-slate-600">
          Surya Hospital is dedicated to providing high-quality healthcare with compassion, advanced technology, and a patient-first mindset.
        </p>
      </section>

      <section className="grid gap-8 rounded-3xl bg-slate-50 p-10 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Doctor Profile</h2>
          <p className="mt-3 text-slate-600">
            Dr. Suryawanshi is a highly experienced physician leading our medical team with expertise and empathy.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Hospital Information</h2>
          <p className="mt-3 text-slate-600">
            Our facility offers advanced medical services, modern diagnostics, and compassionate care for every patient.
          </p>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-10 shadow-lg">
        <h2 className="text-2xl font-semibold">Mission & Vision</h2>
        <p className="mt-3 text-slate-600">
          Our mission is to deliver quality healthcare with trust, innovation, and a commitment to improving every life we serve.
        </p>
      </section>

      <section className="rounded-3xl bg-blue-600 p-10 text-center text-white shadow-lg">
        <h2 className="text-2xl font-semibold">Need care today?</h2>
        <p className="mt-3 text-slate-100">
          Reach out now and schedule an appointment with our team.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-blue-700 font-semibold transition hover:bg-slate-100"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}