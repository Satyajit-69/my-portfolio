const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold mb-6">Selected Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">Project 1</div>
          <div className="p-6 border rounded-lg">Project 2</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
