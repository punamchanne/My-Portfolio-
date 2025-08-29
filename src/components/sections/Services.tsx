
const Services = () => {
  // Define services
  const services = [
    {
      id: 1,
      title: "AI Solutions Development",
      description: "Custom AI solutions including machine learning models, natural language processing, computer vision, and predictive analytics tailored to your business needs.",
      icon: "🤖"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Modern, responsive, and user-friendly web applications using React.js, Next.js, and Node.js with clean code and optimal performance.",
      icon: "💻"
    },
    {
      id: 3,
      title: "Data Analysis & Visualization",
      description: "Comprehensive data analysis, insights extraction, and interactive visualization dashboards to help make data-driven decisions.",
      icon: "📊"
    },
    {
      id: 4,
      title: "Machine Learning Models",
      description: "Development and deployment of custom machine learning models for classification, regression, clustering, and recommendation systems.",
      icon: "🧠"
    },
    {
      id: 5,
      title: "AI Research & Prototyping",
      description: "Research-based exploration of AI concepts and rapid prototyping for proof of concept applications in emerging technologies.",
      icon: "🔬"
    },
    {
      id: 6,
      title: "Technical Consultation",
      description: "Expert advice on technology stack selection, system architecture, and implementation strategies for AI and web development projects.",
      icon: "💡"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-slide-up">My <span className="gradient-text">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            Specialized expertise in AI, machine learning, and web development to bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="card-border group hover:-translate-y-2 transition-all duration-300 animate-fade-in hover:shadow-lg hover:shadow-portfolio-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-full bg-portfolio-primary/10 text-2xl sm:text-3xl group-hover:bg-portfolio-primary/20 transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-portfolio-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="card-border mt-8 sm:mt-12 max-w-3xl mx-auto animate-slide-up">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Looking for Collaboration?</h3>
          <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
            I'm open to project collaborations, internships, and part-time opportunities where I can apply my skills in AI, machine learning, and web development. Whether you're a startup, established company, or fellow researcher, I'm interested in working together on challenging and innovative projects.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Please reach out through the contact form below to discuss how we can work together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
