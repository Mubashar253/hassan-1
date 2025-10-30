import Image from "next/image";

export default function TeamPage() {
  const members = [
    { name: "Malik Mubashar Hassan", role: "Founder & AI Developer", img: "/malik.jpg" },
    { name: "Intazar Khan", role: "Frontend Engineer", img: "/intazar.jpg" },
    { name: "faisal Hayat", role: "Backend Engineer", img: "/faisal.jpg" },
  ];

  return (
    <section className="text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <Image
              src={member.img}
              alt={member.name}
              width={120}
              height={120}
              className="mx-auto rounded-full border-2 border-blue-500"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
