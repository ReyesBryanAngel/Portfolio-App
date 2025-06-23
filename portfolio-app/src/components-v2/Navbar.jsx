import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm fixed w-full bg-[#0f172a] z-50">
      <h1 className="text-white text-xl font-bold">
        <span className="text-blue-400">Coder</span>Bryan
      </h1>
      <div className="space-x-6 text-white text-sm font-medium">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
