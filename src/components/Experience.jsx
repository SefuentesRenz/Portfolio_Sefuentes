const Experience = () => {
  const experiences = [
    {
      title: 'Technician',
      company: 'Mobile Service Center',
      period: 'Jan 2026 - March 2026',
      description: 'Performed diagnostics and hardware repairs on iPhones and MacBooks. Used Fixably system to manage service tickets and documentation.'
    },
    {
      title: 'Social Media Manager',
      company: 'Pixel Pickers',
      period: 'August 2025 - March 2026',
      description: 'Managed and created engaging content for the camera rental business across social media platforms. And also Responded to customer inquiries and messages, ensuring timely communication and improved client satisfaction'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-linear-to-b from-black/45 via-purple-950/20 to-black/45">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20 bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-24">
              <div className="absolute left-0 top-2 md:top-4 w-4 h-4 bg-pink-500 rounded-full ring-4 ring-pink-500/30"></div>
              <div className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-pink-500 to-purple-500"></div>
              <div className="bg-black/40 border border-purple-900/40 rounded-2xl p-8 hover:bg-purple-950/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
                  <span className="text-gray-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

