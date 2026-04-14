import { Heart, Activity, Stethoscope } from "lucide-react";

const services = [
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Cardiology",
    desc: "Advanced heart care and treatments.",
  },
  {
    icon: <Activity className="w-8 h-8 text-blue-500" />,
    title: "ICU Care",
    desc: "24/7 critical care support.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-green-500" />,
    title: "General Medicine",
    desc: "Complete health checkups and treatments.",
  },
];

const Services = () => {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;