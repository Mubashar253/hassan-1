export default function TestimonialsPage() {
  const feedback = [
    { name: "John Smith", review: "Mubashar’s AI solutions revolutionized our workflow!" },
    { name: "Sarah Khan", review: "Amazing UI/UX — truly next-level professionalism." },
    { name: "David Lee", review: "Incredible work ethic and futuristic ideas." },
  ];

  return (
    <section className="text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Client Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {feedback.map((f) => (
          <div
            key={f.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <p className="text-gray-700 italic">“{f.review}”</p>
            <h4 className="mt-4 font-semibold text-blue-600">{f.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
