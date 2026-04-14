export default function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white shadow-lg p-5 rounded-xl hover:scale-105 transition">
      <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}