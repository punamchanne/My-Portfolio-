
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Green Skills using AI Technologies",
      company: "Edunet Foundation",
      type: "Internship",
      duration: "Apr 2025 - Apr 2025 (1 month)",
      location: "Remote (India)",
      description: "Contributed to the Shell-Edunet Skills4Future AICTE Internship focused on Green Skills using AI technologies. Worked on a project independently under the guidance of an industry mentor. Attended personalized mentorship sessions, learned dashboard creation, model selection, and data modeling. Delivered a final AI-powered project prototype aimed at solving real-world sustainability challenges. Participated in weekly milestones, mock presentations, and presented the final project to industry experts. Successfully earned certifications from Shell, AICTE, and Edunet Foundation.",
      skills: ["Artificial Intelligence (AI)", "Data Modeling", "Dashboard Visualization","+2 skills"]
    },
    {
      id: 2,
      title: "AI: Transformative Learning with TechSaksham",
      company: "Edunet Foundation",
      type: "Internship",
      duration: "Dec 2024 - Jan 2025 (2 months)",
      location: "G H Raisoni College of Engineering, Nagpur, India · Remote",
      description: "Completed an internship on AI: Transformative Learning with TechSaksham, a joint CSR initiative by Microsoft & SAP, implemented by Edunet Foundation. Developed skills in Artificial Intelligence through transformative learning modules and practical projects.",
      skills: ["Artificial Intelligence (AI)", "Transformative Learning", "+1 skill"]
    },
    {
      id: 3,
      title: "VOIS for Tech Intern",
      company: "_VOIS",
      type: "Internship",
      duration: "Oct 2023 - Nov 2023 (2 months)",
      location: "Nagpur, Maharashtra, India · Remote",
      description: "Chosen for an immersive internship sponsored by the Connecting Dreams Foundation, in partnership with the _VOIS for Tech Program on Artificial Intelligence by VOIS and Vodafone Idea Foundation. Enrolled in a unique four-week program focused on elevating technical skills through the _VOIS for Tech e-Learning Platform, where I gained hands-on experience tackling real-world challenges in the dynamic field of AI. Spearheaded an independent project under the guidance of a mentor, identifying innovative solutions and translating them into actionable projects. Cultivated expertise in AI through meticulously curated courses, mentorship from industry experts, and demonstrated problem-solving prowess, resulting in certifications from AICTE and CDF. Fueled accelerated learning within a collaborative environment, actively participating in masterclasses led by Subject Matter Experts, and acquiring invaluable insights into the practical application of AI principles.",
      skills: ["Data Analysis", "Problem Solving", "+6 skills"]
    },
    {
      id: 4,
      title: "Python Developer",
      company: "iBase Electrosoft LLP",
      type: "Internship",
      duration: "Jul 2022 - Aug 2022 (2 months)",
      location: "Nagpur, Maharashtra, India · On-site",
      description: "During my valuable internship at iBase Electrosoft LLP in Nagpur, I delved into the realm of Python, with a focus on machine learning. Throughout this internship, I actively participated in practical projects that enhanced my Python programming abilities and allowed me to explore the ever-evolving field of machine learning. Working closely with a skilled team of professionals, I contributed to the company's innovative initiatives. This hands-on experience deepened my understanding of Python's role in machine learning, and I applied this knowledge to address real-world challenges. This immersive experience not only expanded my technical skills but also provided insight into the cutting-edge work happening at iBase Electrosoft LLP.",
      skills: ["Python (Programming Language)", "MySQL", "+3 skills"]
    }
  ];

  return (
        <section id="experience" className="section-padding bg-portfolio-dark-gray/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Professional <span className="gradient-text">Experience</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            My journey through various internships and professional experiences
          </p>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="card-border animate-fade-in hover:border-portfolio-purple/40 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                    <Briefcase size={20} className="text-portfolio-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm sm:text-base">
                        <span className="text-portfolio-secondary font-medium">{exp.company}</span>
                        <span className="hidden sm:inline text-gray-400">•</span>
                        <span className="text-gray-400">{exp.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 sm:mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1 sm:mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2 sm:px-3 py-1 bg-portfolio-primary/20 text-portfolio-primary rounded text-xs">
                        {skill}
                      </span>
                    ))}
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

export default Experience;
