
import { Code, Database, Laptop, BrainCircuit } from "lucide-react";

const Skills = () => {
  // Define skills categories
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: BrainCircuit,
      skills: [
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Python",
        "Data Science",
        "Data Analysis",
        "Problem Solving"
      ]
    },
    {
      title: "Web Development",
      icon: Laptop,
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "C++",
        "Java"
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: [
        "MySQL",
        "MongoDB",
        "Git",
        "GitHub",
        "VS Code",
        //"Jupyter Notebook"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            Core competencies and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-border animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-portfolio-primary/20 rounded-full mb-3 sm:mb-4">
                  <category.icon size={24} className="text-portfolio-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{category.title}</h3>
              </div>
              
              <ul className="space-y-2 sm:space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-300 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-portfolio-secondary rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
