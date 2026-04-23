import { motion } from 'framer-motion';
import profilePic from '../assets/Profile.JPG';
import FadeUp from './FadeUp';
import { Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-linear-to-b from-black/45 via-purple-950/20 to-black/45 pt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp className="text-center lg:text-left space-y-8 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl  text-white/95 font-bold  tracking-tight ">
              Renz Angelo T. Sefuentes
            </h1>
            <h2 className="text-2xl lg:text-4xl font-black bg-linear-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight font-medium">
              Frontend Developer
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              A results-driven frontend developer with a strong foundation in building responsive web applications using React.js and Vue.js.  
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download="Renz_Resume.pdf"
                
    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white rounded-lg"
              >
                Download Resume 
                <Download size={18} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="border-3 border-purple-300/50 hover:border-purple-500 hover:bg-purple-500/12 text-white duration-300  hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent px-10 py-3 rounded-2xl font-semibold text-lg backdrop-blur-sm"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </FadeUp>

        <FadeUp className="flex justify-center lg:justify-end" delay={0.15}>
          <motion.div className="relative">
            <img
              src={profilePic}
              alt="Renz Angelo T. Sefuentes"
className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full shadow-[0_0_80px_rgba(168,85,247,0.7)] ring-8 ring-purple-500/20 shrink-0"
            />
            
          </motion.div>
        </FadeUp> 
      </div>
    </section>
  );
};

export default Hero;

