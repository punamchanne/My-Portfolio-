
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  // Define projects with updated information
  const projects = [
    {
      id: 1,
      title: "InterviewPro",
      description: "The Interview Mocker System is an innovative AI-driven platform designed to help you prepare effectively. By simulating real-life interview scenarios, it offers valuable feedback on speech, allowing you to refine your performance in a safe and supportive environment. Key features include customizable mock sessions tailored to your industry and job role, speech-to-text analysis, and personalized feedback reports that highlight areas for improvement.",
      technologies: ["Problem Solving", "React.js", "clerk", "Node.js"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070",
      githubUrl: "https://github.com/punamchanne",
      liveUrl: "https://liveinterviewpro.vercel.app/",
      duration: "Nov 2024 - Present",
      association: "G.H. Raisoni College of Engineering(GHRCE), Nagpur"
    },
    {
    id: 2,
      title: "Malware Classification using Machine Learning",
      description: "This project focuses on developing a machine learning model to classify different types of malware based on extracted features. The dataset was preprocessed to remove noise, followed by feature selection and engineering to improve model efficiency. Several classification algorithms (such as Decision Trees, Random Forest, and SVM) were tested, and performance metrics like accuracy, precision, and recall were used for evaluation. The system can assist in enhancing cybersecurity by detecting and categorizing malicious software effectively.",
      technologies: ["Python, Scikit-learn, Pandas, NumPy, Data Preprocessing, Feature Engineering, Classification Models"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070",
      githubUrl: "https://github.com/punamchanne",
      liveUrl: "#",
      duration: "June 2024 - Oct 2024 - Present",
      association: "G.H. Raisoni College of Engineering(GHRCE), Nagpur"
    },
    {
      id: 3,
      title: "Disease Prediction Using Machine Learning",
      description: "The 'Disease Prediction using Machine Learning' project is an innovative solution that leverages the power of machine learning algorithms to predict diseases based on the symptoms provided by patients. With the increasing prevalence of diseases and the need for early detection, this project aims to enhance the accuracy and efficiency of disease diagnosis. Using a user-friendly interface, patients can input their symptoms into the system, which then analyzes the data using advanced machine learning techniques.",
      technologies: ["Python (Programming Language)", "HTML", "Cascading Style Sheets (CSS)", "Machine Learning", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      githubUrl: "https://github.com/mrvishalg2004/Disease-Prediction-using-Django-and-Machine-Learning",
      liveUrl: "#",
      duration: "Sep 2022 - Jun 2023",
      association: "Government Polytechnic Bramhapuri"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-portfolio-black/50">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-slide-up">My <span className="gradient-text">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            Explore my latest projects and work in AI, machine learning, and web development
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="card-border overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="relative h-48 sm:h-64 lg:h-full overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-black to-transparent opacity-60"></div>
                </div>
                
                <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                    <div className="text-xs sm:text-sm text-portfolio-secondary flex-shrink-0">{project.duration}</div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    Associated with {project.association}
                  </p>
                  
                  <p className="text-gray-300 mb-6 line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-portfolio-primary/10 border border-portfolio-primary/20 px-3 py-1 rounded-full text-portfolio-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex space-x-3">
                      <a 
                        href={project.githubUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-portfolio-primary transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-portfolio-secondary transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    
                    <Button variant="link" className="text-portfolio-primary p-0 hover:text-portfolio-secondary">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        View Project <ArrowRight size={16} className="ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white px-8 py-6 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-primary/25">
            <a href="https://github.com/punamchanne" target="_blank" rel="noopener noreferrer" className="flex items-center">
              View More Projects <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
