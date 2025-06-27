export default function ExperienceSection() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Spotter.ai",
      duration: "December 2024 – June 2025",
      workType: "Project- based",
      description:
        "Participated in the frontend development of Spotter.ai’s trucking management system. Collaborated with cross-functional teams to deliver responsive dashboards, fix complex Front end bugs, and develop table templates features with backend integration.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Material UI",
        "RESTful API",
        "GIT",
      ],
    },
    {
      role: "Backend Developer",
      company: "Gametime Solutions Inc.",
      duration: "March 2024 – November 2024",
      workType: "Full Time",
      description:
        "Developed the backend of betting app gaming platform (Easy2/Easy3). Integrated winner declaration, balance systems, and built an API web socket for real time data appearances of winning amounts and game results declaration per round.",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "PHP"],
    },
    {
      role: "Full Stack Developer",
      company: "FinXP",
      duration: "July 2022 – March 2024",
      workType: "Full Time",
      description:
        "Developed major features for the FinXP Admin Portal including the Maltese Creditor Identifier (MCI) and built the Apply Corporate Application. Focused on scalable UI, complex API integrations, and well maintained codes for better reusability and smooth feature enhancement.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Laravel",
        "PHP",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-[#0f172a] text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">
        Experience
      </h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#1e293b] p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold">
                  {exp.role} @ {exp.company}
                </h3>
                <p className="text-gray-400 text-sm py-1">{exp.duration}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{exp?.workType}</p>
            <p className="text-gray-300 mt-4">{exp.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-900 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
