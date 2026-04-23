import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVuedotjs
} from 'react-icons/si';

const TechStack = () => {
  const techStack = [
    { name: 'HTML', icon: SiHtml5, iconColor: '#E34F26', color: 'orange' },
    { name: 'CSS', icon: SiCss, iconColor: '#1572B6', color: 'blue' },
    { name: 'JavaScript', icon: SiJavascript, iconColor: '#F7DF1E', color: 'yellow' },
    { name: 'React.js', icon: SiReact, iconColor: '#61DAFB', color: 'cyan' },
    { name: 'Vue.js', icon: SiVuedotjs, iconColor: '#42B883', color: 'green' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, iconColor: '#38BDF8', color: 'pink' },
    { name: 'Supabase', icon: SiSupabase, iconColor: '#3ECF8E', color: 'purple' }
  ];

  const tools = [
    { name: 'Git', icon: SiGit, iconColor: '#F05032', color: 'gray' },
    { name: 'GitHub', icon: SiGithub, iconColor: '#E2E8F0', color: 'slate' },
    { name: 'Figma', icon: SiFigma, iconColor: '#F24E1E', color: 'pink' }
  ];

  return (
    <section id="Skills" className="py-24 px-4 bg-linear-to-b from-black/45 via-purple-950/20 to-black/4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {techStack.map((item) => (
            <div key={item.name} className="group text-center p-6 rounded-2xl bg-black/45 backdrop-blur-sm hover:bg-purple-950/45 hover:scale-[1.03] transition-all duration-300 border border-purple-900/40 hover:border-purple-400/55 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex justify-center  text-4xl mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={40} color={item.iconColor} aria-label={item.name} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
              <div className="w-24 h-2 bg-purple-950/70 rounded-full mx-auto overflow-hidden">
                <div className={`w-full h-full bg-linear-to-r from-${item.color}-400 to-${item.color}-600 rounded-full transform group-hover:scale-x-110 transition-transform duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-white mb-8 text-center">Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {tools.map((item) => (
            <div key={item.name} className="group text-center p-6 rounded-2xl bg-black/45 backdrop-blur-sm hover:bg-purple-950/45 hover:scale-[1.03] transition-all duration-300 border border-purple-900/40 hover:border-purple-400/55 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={40} color={item.iconColor} aria-label={item.name} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
              <div className="w-24 h-2 bg-purple-950/70 rounded-full mx-auto overflow-hidden">
                <div className={`w-full h-full bg-linear-to-r from-${item.color}-400 to-${item.color}-600 rounded-full transform group-hover:scale-x-110 transition-transform duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
