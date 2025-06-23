import { ApplyCorporate, PortalAdmin, Fintrack } from "../assets";
import { Box } from "@mui/material";
const applyCorporateLink = "https://apply.finxp.com/";
const finXPPortalAdminLink = "https://portal-admin.finxp.com/";
const fintrackLink = "https://financetracker-app.com/";
const fintrackCode = "https://github.com/ReyesBryanAngel/expense-tracker-app";
const projects = [
  {
    image: Fintrack,
    title: "Finance Tracker App",
    description:
      "A modern personal finance management application built to help users track income, expenses, and budgeting goals efficiently. The app features secure user authentication, responsive dashboard analytics with interactive charts, transaction history filtering, and profile customization with photo upload. It supports real-time data updates and ensures data privacy using token-based authentication. The app emphasizes usability, clean design, and practical financial insights for day-to-day money management.",
    technologies: ["React", "Material UI", "Node.js", "MongoDB", "AWS"],
    demoColor: "bg-orange-500",
    demoLink: fintrackLink,
    code: fintrackCode,
  },
  {
    image: ApplyCorporate,
    title: "Apply Corporate",
    description:
      "A web application that enables companies to apply to FinXP as their financial payment solution. It features complex API and frontend integrations, including auto-save functionality, document upload/download, conditional form rendering, section-based validation with error tracking, and full field disabling upon submission.",
    // features: [
    //   "User authentication and profiles",
    //   "Product search and filtering",
    //   "Shopping cart and checkout",
    //   "Payment gateway integration",
    //   "Order tracking system",
    // ],
    technologies: ["React", "Laravel", "KeyCloak", "MySQL", "Typescript"],
    demoColor: "bg-blue-500",
    demoLink: applyCorporateLink,
  },
  {
    image: PortalAdmin,
    title: "Maltese Creditor Identifier",
    description:
      "A core feature added to the FinXP Portal Admin system. I developed a custom MCI generator algorithm to streamline client identifier tracking. The MCI is essential for financial processes like banking transactions, credit reporting, and tax documentation, enabling accurate creditor identification within the system.",

    technologies: ["Angular", "Laravel", "Typescript", "MySQL"],
    demoColor: "bg-pink-500",
    demoLink: finXPPortalAdminLink,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0f172a] text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="text-blue-400">Featured</span> Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects?.map((project, index) => (
          <div key={index} className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
            <div
              className={`w-full h-31 lg:h-32 rounded-t-xl flex items-center justify-center text-3xl text-white`}
            >
              <Box
                component="img"
                sx={{ maxWidth: "100%", height: "auto", width: "600px" }}
                src={project?.image}
                alt="Banner"
              />
            </div>
            <h3 className="text-xl font-semibold mt-7">{project?.title}</h3>
            <p className="text-gray-300 mt-2">{project?.description}</p>
            <ul className="text-sm mt-2 list-disc ml-5 text-gray-400">
              {project?.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {project?.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-900 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              {!["Apply Corporate", "Maltese Creditor Identifier"]?.includes(
                project.title
              ) && (
                <a
                  href={project?.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-700 px-3 py-1 rounded">
                    Code
                  </button>
                </a>
              )}
              <a
                href={project?.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={`${project.demoColor} px-3 py-1 rounded`}>
                  Website Link
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
