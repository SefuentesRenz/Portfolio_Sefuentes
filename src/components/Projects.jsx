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
    description: 'AutiSync V2.0 is a web-based gamified learning platform for children with Autism Spectrum Disorder (ASD) that provides academic and daily life skills activities to support both cognitive and practical development.',
    codeLink: 'https://github.com/SefuentesRenz/Final-AutiSync_v2.0.git',
    demoLink: 'https://autisync.uic.edu.ph/home'
  },
  {
    title: 'UIC - CLINIC MANAGEMENT SYSTEM',
    image: uicClinicMS,
    description: 'The UIC – Clinic Management System is a web-based platform that streamlines clinic operations by managing patient records, appointments, and medical services in one centralized system. It helps staff efficiently organize workflows and ensures accurate, accessible patient information.',
    codeLink: 'https://github.com/SefuentesRenz/UIC-CMS.git',
    demoLink: 'https://uic-cms.vercel.app/dashboard?demo=1'
  },
  {
    title: 'ALUMNI PORTAL',
    image: AlumniPortal,
    description: 'An Alumni Portal is a web-based platform that connects graduates with their institution, enabling them to stay updated, network with fellow alumni, and access announcements, events, and career opportunities.',
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
          <p className="text-xl text-gray-400 text-center mb-15 max-w-2xl mx-auto leading-relaxed">
            Showcasing my work in building responsive and modern web applications
          </p>
        </FadeUp>

        <StaggerReveal
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
