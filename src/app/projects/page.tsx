export default function ProjectsPage() {
  const projects = [
    { name: "AI Chatbot", link: "https://example.com/chatbot" },
    { name: "Solar Panel Dashboard", link: "https://example.com/solar" },
    { name: "E-Commerce Store", link: "https://example.com/store" },
    { name: "Smart Portfolio", link: "https://example.com/portfolio" },
    { name: "Data Analytics App", link: "https://example.com/data" },
  ];

  return (
    <section className="pt-28 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">My Projects</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <li
            key={project.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:underline">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
