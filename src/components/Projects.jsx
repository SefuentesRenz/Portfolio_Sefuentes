import ProjectCard from './ProjectCard';
import FadeUp from './FadeUp';
import StaggerReveal from './StaggerReveal';
import uicClinicMS from '/UIC-CMS.png';
import autisync from '/autisync.png';
import AlumniPortal from '/AlumniPortal.png';

const projects = [
  {
    title: 'AUTISYNC V2.0',
    image: autisync,
    description: 'Designed and developed the user interface using React.js. Collaborated using Git and GitHub. Implemented form validation, state management, and user-friendly navigation.',
    codeLink: 'https://github.com/SefuentesRenz/Final-AutiSync_v2.0.git',
    demoLink: 'https://autisync.uic.edu.ph/'
  },
  {
    title: 'UIC - CLINIC MANAGEMENT SYSTEM',
    image: uicClinicMS,
    description: 'Built a web-based system using Vue.js and Supabase. Implemented student medical records, consultations, and admin dashboard. Managed source code using Git and GitHub.',
    codeLink: 'https://github.com/SefuentesRenz/UIC-CMS.git',
    demoLink: 'https://uic-cms.vercel.app/'
  },
  {
    title: 'ALUMNI PORTAL',
    image: AlumniPortal,
    description: 'Developed responsive UI using React.js. Collaborated using Git and GitHub.',
    codeLink: 'https://github.com/SefuentesRenz/Alumni-Portal.git',
    demoLink: 'https://alumni-portal-tphm.vercel.app/'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-60 bg-linear-to-b from-black/45 via-purple-950/20 to-black/45">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-2xl mx-auto leading-relaxed">
            Showcasing my work in building responsive and modern web applications
          </p>
        </FadeUp>

        <StaggerReveal
          className="grid md:grid-cols-2 lg:grid-cols-3 "
          stagger={0.1}
          delayChildren={0.08}
        >
          {projects.map((project) => (
            <StaggerReveal.Item key={project.title}>
              <ProjectCard {...project} />
            </StaggerReveal.Item>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default Projects;
