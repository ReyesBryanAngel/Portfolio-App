import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center text-white"
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-400">Angel Bryan Reyes</span>
        </h1>
        <p className="mt-4 text-xl font-medium">Full Stack Developer</p>
        <p className="mt-3 text-gray-300 max-w-xl mx-auto">
          I build exceptional digital experiences with modern technologies.
          Specializing in creating robust web applications from front-end to
          back-end.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <Link to="projects" smooth duration={500}>
              View My Work
            </Link>
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded">
            <Link to="about" smooth duration={500}>
              About Me
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
