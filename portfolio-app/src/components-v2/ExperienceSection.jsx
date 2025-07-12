export default function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Software Engineer",
      company: "Yondu Inc.",
      duration: "April 2024 - Present",
      workType: "Full-time",
      description: [
        "Developing and integrating secure, enterprise-grade applications for insurance clients under Yondu Inc.",
        "Integrated AWS Cognito (User Pool) for secure user authentication into the MS BPI Insurance system, aligning with enterprise security standards ",
        "Assigned as the Frontend Developer for the Renewal Quotation Tool used by Pacific Cross, improving their internal policy management and renewal workflows Collaborated with stakeholders and backend engineer to ensure seamless integration of authentication, business logic, and UI components ",
      ],
      // description:
      //   "Participated in the frontend development of Spotter.ai’s trucking management system. Collaborated with cross-functional teams to deliver responsive dashboards, fix complex Front end bugs, and develop table templates features with backend integration.",
      technologies: ["React", "NextJS", "Nest JS", "AWS", "GIT"],
    },
    {
      role: "Backend Developer",
      company: "Gametime Solutions Inc.",
      duration: "March 2023 – April 2024",
      workType: "Full Time",
      description: [
        "Developed and maintained backend services for real-time gaming and admin dashboard systems.",
        "Designed and built backend APIs for Easy 2 and Easy 3 gaming platforms, handling player entry, draw results, and transactions",
        "Integrated real-time winner declaration and balance updates using WebSocket technology.",
        "Maintained and enhanced internal admin dashboard supporting operator workflows and reporting.",
      ],
      technologies: ["PHP", "MySQL", "WebSocket", "REST API", "AWS"],
    },
    {
      role: "Full Stack Developer",
      company: "FinXP",
      duration: "July 2021 – March 2023",
      workType: "Full Time",
      description: [
        "Built and maintained core business applications for a fintech company serving EU-based clients.",
        "Implemented the Maltese creditor identifier feature in the client portal, improving regulatory compliance.",
        "Integrated APIs and developed backend model structures to support financial application-requirement workflows.",
        "Developed the Apply Corporate application for client onboarding and document verification.",
      ],
      technologies: [
        "React",
        "Laravel",
        "Nest JS",
        "MySQL",
        "Azure",
        "KeyCloak",
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
            {/* <p className="text-gray-300 mt-4">{exp.description}</p> */}
            <ul className="text-sm mt-2 list-disc ml-5">
              {exp?.description?.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
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
