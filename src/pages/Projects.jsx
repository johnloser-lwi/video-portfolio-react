const Projects = () => {
  // Mock Data
  const projects = [
    {
      id: 1,
      title: "Neon Nights - Music Video",
      description: "A high-energy music video featuring rapid cuts and glitch effects synchronized to the beat. Handled offline editing and color grading.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Tech Review 2025",
      description: "Long-form content focused on narrative flow and clean graphical overlays. Designed the motion graphics package used throughout the series.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
    },
    {
      id: 3,
      title: "Indie Game Launch Trailer",
      description: "Sound design and video editing for an atmospheric indie game. The focus was on building tension through pacing and audio cues.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Corporate Documentary",
      description: "Interview-driven storytelling. Condensed 4 hours of footage into a compelling 5-minute narrative about sustainable energy.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
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