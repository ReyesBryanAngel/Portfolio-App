import { useState } from "react";
import { ApplyCorporate, PortalAdmin, Fintrack } from "../assets";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
const applyCorporateLink = "https://apply.finxp.com/";
const finXPPortalAdminLink = "https://portal-admin.finxp.com/";
const fintrackLink = "https://financetracker-app.com/";
const fintrackCode = "https://github.com/ReyesBryanAngel/expense-tracker-app";
const projects = [
  {
    image: Fintrack,
    title: "Finance Tracker App",
    features: [
      "Secure sign-in and personalized user profiles.",
      "Automatically notifies users through email about upcoming bills, ensuring they never miss a payment.",
      "Keep track of bills with custom billing statuses and set them to recur at specified intervals for easy management.",
      "Monitor user's finances with an intuitive interface featuring Line and Pie Charts for a clear overview of your income and spending",
      "Automatically logs out inactive users after a set period for added security",
      "Allows users to upload and display their photo for a personalized experience",
    ],
    demoColor: "bg-orange-500",
    demoLink: fintrackLink,
    code: fintrackCode,
  },
  {
    image: ApplyCorporate,
    title: "Apply Corporate",
    description:
      "A web application that enables companies to apply to FinXP as their financial payment solution. It features complex API and frontend integrations, including auto-save functionality, document upload/download, conditional form rendering, section-based validation with error tracking, and full field disabling upon submission.",

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
  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentImage(null);
  };

  return (
    <section id="projects" className="bg-[#0f172a] text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="text-blue-400">Featured</span> Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects?.map((project, index) => (
          <div key={index} className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
            <div
              className={`w-full h-31 lg:h-32 rounded-t-xl flex items-center justify-center text-3xl text-white cursor-pointer`}
              onClick={() => handleImageClick(project?.image)}
            >
              <Box
                component="img"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
                src={project?.image}
                alt={project?.title}
              />
            </div>
            <h3 className="text-xl font-semibold mt-7">{project?.title}</h3>
            <p className="text-gray-300 mt-2">{project?.description}</p>
            <ul className="text-sm mt-2 list-disc ml-5">
              {project?.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
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

      <Dialog open={openModal} onClose={handleCloseModal} fullWidth>
        <DialogTitle>Project Image</DialogTitle>
        <DialogContent>
          {currentImage && (
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
              src={currentImage}
              alt="Project Preview"
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
