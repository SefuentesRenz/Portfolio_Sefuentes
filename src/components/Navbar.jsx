import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const activeSectionRef = useRef('hero');

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'Skills', 'projects', 'experience', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    let frameId = null;

    const updateActiveSection = () => {
      const focusLine = window.innerHeight * 0.35;
      let nextActiveId = sections[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= focusLine && rect.bottom >= focusLine) {
          nextActiveId = section.id;
          closestDistance = -1;
          return;
        }

        if (closestDistance === -1) return;

        const sectionCenter = rect.top + rect.height / 2;
        const distanceToFocus = Math.abs(sectionCenter - focusLine);

        if (distanceToFocus < closestDistance) {
          closestDistance = distanceToFocus;
          nextActiveId = section.id;
        }
      });

      if (nextActiveId !== activeSectionRef.current) {
        activeSectionRef.current = nextActiveId;
        setActiveSection(nextActiveId);
      }
    };

    const handleScrollOrResize = () => {
      if (frameId !== null) return;

      frameId = requestAnimationFrame(() => {
        updateActiveSection();
        frameId = null;
      });
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'Skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const getLinkClass = (sectionId, isMobile = false) => {
    const activeClass = 'bg-linear-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent';

    if (isMobile) {
      return `${activeSection === sectionId ? activeClass : 'text-gray-300 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`;
    }

    return `${activeSection === sectionId ? activeClass : 'text-gray-300'} hover:bg-linear-to-r hover:from-pink-400 hover:via-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent px-3 py-2 rounded-md transition-colors duration-200 font-medium cursor-pointer`;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a onClick={() => scrollToSection('hero')} className="text-2xl font-bold bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent  transition-all cursor-pointer">
              RENZ
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={getLinkClass(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-1 rounded-md transition-all"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 border-t border-purple-900/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={getLinkClass(item.id, true)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
