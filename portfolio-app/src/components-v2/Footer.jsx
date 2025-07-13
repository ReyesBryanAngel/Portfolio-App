export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 text-center py-8">
      <h3 className="text-white text-xl font-bold">
        <span className="text-blue-400">Coder</span>Bryan
      </h3>
      <p className="mt-2">Tech Made Life Simple.</p>
      <p className="mt-2">© 2025 Angel Bryan Reyes. All rights reserved.</p>
      <div className="flex justify-center gap-4 text-lg mt-4">
        <a
          href={"https://github.com/ReyesBryanAngel/CoderBryan"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github cursor-pointer" />
        </a>
        <a
          href={"https://www.linkedin.com/in/angel-bryan-reyes-043571244/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin cursor-pointer" />
        </a>
      </div>
    </footer>
  );
}
