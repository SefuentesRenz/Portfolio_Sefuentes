const ProjectCard = ({ title, image, description, codeLink = '#', demoLink = '#' }) => (
  <div className="group mx-auto w-full max-w-[420px] bg-black/40 hover:bg-purple-950/40 border border-purple-900/40 hover:border-purple-400/60 rounded-3xl p-3.5 md:p-4 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
    <div className="flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full aspect-video object-cover rounded-2xl border border-purple-900/50 mb-4"
      />
      <p className="text-gray-300 leading-relaxed mb-4 grow text-sm md:text-[15px]">
        {description}
      </p>
      <div className="flex gap-2.5 pt-3 border-t border-purple-900/50">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border border-purple-300/35 hover:border-purple-300 hover:bg-purple-500/15 text-white text-center py-2 px-3 rounded-xl text-sm font-semibold transition-all duration-300"
        >
          Repository
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white text-center py-2 px-3 rounded-xl text-sm font-semibold transition-all duration-300"
        >
          Demo
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;

