
import { School, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "G.H. Raisoni College of Engineering(GHRCE), Nagpur",
      degree: "B.Tech, Artificial Intelligence",
      duration: "Sep 2023 - Present",
      logo: School
    },
    {
      id: 2,
      institution: "Government Polytechnic Bramhapuri",
      degree: "Diploma in Computer Engineering",
      duration: "2020 - 2023",
      logo: School
    }
  ];

  return (
    <section id="education" className="section-padding bg-portfolio-dark-gray/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            Academic background and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className="card-border animate-fade-in hover:shadow-lg hover:shadow-portfolio-primary/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start flex-col sm:flex-row">
                <div className="p-3 sm:p-4 bg-portfolio-primary/20 rounded-full mb-4 sm:mb-0 sm:mr-6 self-center sm:self-start">
                  <edu.logo size={20} className="text-portfolio-primary sm:w-6 sm:h-6" />
                </div>
                
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{edu.institution}</h3>
                  <p className="text-portfolio-secondary mb-2 sm:mb-3 text-sm sm:text-base">{edu.degree}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start text-xs sm:text-sm text-gray-400">
                    <Calendar size={14} className="mr-2 sm:w-4 sm:h-4" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
