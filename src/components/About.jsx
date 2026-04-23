import profilePic from '/profilePic.jpg';
import FadeUp from './FadeUp';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-linear-to-b from-black/45 via-purple-950/20 to-black/45">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center px-2">
        <FadeUp className="order-1 md:order-1 flex justify-center" delay={0.2} amount={0.35} distance={56} duration={0.65} once={false}>
          <div className="relative group  ">
            <img
              src={profilePic}
              alt="Renz About"
              className="w-68 h-68 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full shadow-[0_0_80px_rgba(168,85,247,0.7)] ring-8 ring-purple-500/20 shrink-0"
            />
            <div className="absolute -inset-2 hover:border-purple-500 hover:bg-purple-500/12 text-white duration-300 hover:bg-linear-to-r hover:from-pink-400 hover:via-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent"></div>
          </div>
        </FadeUp>
        <FadeUp className="order-2 md:order-2" amount={0.35} distance={56} duration={0.65} once={false}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <FadeUp delay={0.08} amount={0.35} distance={42} duration={0.6} once={false}>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
            A passionate frontend developer based in Davao City, Philippines, I focus on building responsive and modern web applications using React.js and Vue.js. 
            </p>
          </FadeUp>
          <FadeUp delay={0.14} amount={0.35} distance={42} duration={0.6} once={false}>
            <p className="text-xl text-gray-300 leading-relaxed">
            I thrive in collaborative environments, leveraging Git and GitHub for version control, and Figma for design collaboration. My adaptability, teamwork skills, and commitment to continuous learning drive me to deliver high-quality solutions and contribute effectively to real-world projects.
            </p>
          </FadeUp>
        </FadeUp>


      </div>
    </section>
  );
};

export default About;

