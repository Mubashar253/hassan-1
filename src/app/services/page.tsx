export default function ServicesPage() {
  const services = [
    { title: "AI Automation", desc: "Building smart solutions powered by AI and Machine Learning." },
    { title: "Web Development", desc: "Modern full-stack applications using Next.js and React." },
    { title: "UI/UX Design", desc: "Creating user-friendly, elegant, and responsive designs." },
  ];

  return (
    <section className="text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
