const skills = {
  "Frontend Development": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Material UI",
  ],
  "Backend Development": [
    "Node.js",
    "Express",
    "PHP",
    "Laravel",
    "RESTful APIs",
  ],
  "Database & DevOps": [
    "MongoDB",
    "MySQL",
    "Docker",
    "AWS",
    "Github Actions",
    "Git",
  ],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0f172a] text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">
        My Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-900 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
