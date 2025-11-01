import Image from "next/image";

export default function TeamPage() {
  const members = [
    {
      name: "Malik Mubashar Hassan",
      role: "Founder & AI Developer",
      img: "/malik.jpg",
    },
    {
      name: "Malik Intazar Khan",
      role: "Frontend Engineer",
      img: "/intazar.jpg",
    },
    {
      name: "Malik Faisal Hayat",
      role: "Backend Engineer",
      img: "/faisal.jpg",
    },
    {
      name: "Aqsa Rubab",
      role: "UI/UX Designer",
      img: "/aqsa.jpg",
    },
    {
      name: "Malik Khurram Shahzad Nissoana",
      role: "DevOps Specialist",
      img: "/khurram.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-100 py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">Our Team</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          Meet our talented and passionate team members who bring creativity,
          innovation, and excellence to every project. Together, we’re building
          intelligent digital solutions for the future.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition duration-300 w-60"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={120}
                height={120}
                className="mx-auto rounded-full border-2 border-blue-500 shadow-sm"
              />
              <h3 className="text-xl font-semibold text-blue-700 mt-4">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
