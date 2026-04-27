const ProjectCard = ({ title, image, description, techStack = [], codeLink = '#', demoLink = '#' }) => (
  <div className="group mt--10 mx-auto w-full max-w-[540px] bg-black/40 hover:bg-purple-950/40 border border-purple-900/40 hover:border-purple-400/60 rounded-3xl p-3.5 md:p-4 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
    <div className="flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full aspect-video object-cover rounded-2xl border border-purple-900/50 mb-4"
      />
      <h3 className="text-lg md:text-xl font-bold text-white tracking-wide mb-2">
        {title}
      </h3>
      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs font-medium text-purple-100 bg-purple-500/15 border border-purple-400/35"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
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
          Live Site
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;

