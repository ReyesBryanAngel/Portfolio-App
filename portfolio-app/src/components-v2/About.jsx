import { MyPicture } from "../assets";
import { Box } from "@mui/material";
export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0f172a] text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center">
        {/* <div className="w-32 h-32 rounded-full bg-blue-800 flex items-center justify-center text-5xl"> */}
        <Box
          component="img"
          className="h-56 lg:h-80"
          alt="my image"
          src={MyPicture}
        />
        {/* </div> */}
        <div className="text-gray-300">
          <p>
            I’m a passionate Full Stack Developer with four years of experience
            crafting web applications that deliver exceptional user experiences.
            My journey in tech began with a Computer Science degree, and I’ve
            been honing my skills ever since.
          </p>
          <p className="mt-4">
            I'm experienced Developer in JavaScript and PHP ecosystems, working
            with modern frameworks like React, Node.js, and Laravel. I’m
            committed to writing clean, maintainable code and building scalable
            applications that solve real-world problems.
          </p>
          <p className="mt-4">
            When I’m not coding, you’ll find me exploring new technologies, and
            playing Lawn Tennis.
          </p>
          <div className="mt-4 flex space-x-4 text-xl">
            <a
              href={"https://github.com/ReyesBryanAngel/CoderBryan"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github hover:text-blue-400 cursor-pointer" />
            </a>
            <a
              href={"https://www.linkedin.com/in/angel-bryan-reyes-043571244/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin hover:text-blue-400 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
