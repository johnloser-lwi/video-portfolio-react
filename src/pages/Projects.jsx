const Projects = () => {
  // Mock Data
  const projects = [
    {
      id: 1,
      title: "COMLEX 2026 Changes Every DO Med Student and Resident Must Know",
      description: "Long-form 'edutainment' content, balancing complex information with comedic timing. Utilized dynamic pacing, custom sound design, and background scores to maximize viewer retention throughout the video.",
      videoUrl: "https://www.youtube.com/embed/cmX-ms_74vM"
    },
    {
      id: 2,
      title: "$140,000 Lost Because Of A Med School Practice Test",
      description: "Crafted hook for an interview segment designed to grab attention immediately. Leveraged rhythmic editing, sound effects, and music to clarify the core message and drive early viewer retention.",
      videoUrl: "https://www.youtube.com/embed/QF1rschvtyY" 
    },
    {
      id: 3,
      title: "DaVinci Resolve Could Be Perfect... If They Fixed This",
      description: "An end-to-end production demonstrating full creative control. From scripting and filming to the final edit, I integrated custom motion graphics and immersive sound design to elevate the narrative flow.",
      videoUrl: "https://www.youtube.com/embed/G_suqS6sOz0" 
    },
  ];

  return (
    <div className="min-h-screentext-slate-200 px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto space-y-24">
        <h1 className="text-4xl font-bold mb-12 text-white">Selected Works</h1>

        {projects.map((project, index) => (
          <div 
            key={project.id} 
            // Logic: if index is even (0, 2, 4), standard row. If odd (1, 3), reverse row.
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-12 items-center`}
          >

            <div className="w-full md:w-1/2 aspect-video bg-black rounded-xl overflow-hidden border border-slate-800">
              <iframe 
                className="w-full h-full"
                src={project.videoUrl} 
                title={project.title}
                allowFullScreen
              ></iframe>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;