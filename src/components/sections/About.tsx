
const About = () => {
  // Define skills with proficiency percentage
  const technicalSkills = [
    { name: "Artificial Intelligence", proficiency: 90 },
    { name: "Machine Learning", proficiency: 85 },
    { name: "Python", proficiency: 90 },
    { name: "Data Science", proficiency: 80 },
    { name: "Web Development", proficiency: 75 },
  ];
  
  const webSkills = [
    { name: "React.js", proficiency: 80 },
    { name: "Next.js", proficiency: 75 },
    { name: "Node.js", proficiency: 70 },
    { name: "Tailwind CSS", proficiency: 85 },
    { name: "MySQL", proficiency: 75 },
  ];
  
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
                <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-slide-up">About <span className="gradient-text">Me</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            Learn more about my journey, skills, and passion for technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
          {/* Career Journey */}
          <div className="card-border animate-slide-right">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Career Journey</h3>
            <div className="space-y-4 text-sm sm:text-base">
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm Punam Channe, a passionate and driven student currently pursuing my B.Tech in Artificial Intelligence. As a pre-final year student passionate about using Data Science, Machine Learning, and Web Development to create real-world solutions. I enjoy transforming ideas into impactful projects, such as malware classification models, AI-based agriculture platforms, flood prediction systems, and disease prediction systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I have gained practical experience through internships as an AI Intern and Python Developer Intern, where I worked on AI-driven solutions and automation projects. My technical skill set includes Python, Java, JavaScript, HTML, CSS, and frameworks/tools like Pandas, NumPy, Matplotlib, and Scikit-learn.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond academics, I aim to build a strong foundation in the IT industry as a Data Scientist or Full Stack Developer, while continuously learning and exploring emerging technologies. In the long run, I aspire to establish my own tech-driven startup, combining my passion for innovation and problem-solving.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through various internships, I've gained hands-on experience in AI, machine learning, and web development. I've worked with the Edunet Foundation on Green Skills using AI Technologies and participated in transformative learning through Microsoft & SAP's TechSaksham initiative.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond academics, I'm actively involved with the Art of Living community and passionate about social work, which helps me maintain a balanced perspective and contribute positively to society alongside my technical pursuits.
              </p>
            </div>
          </div>
          
          {/* Skills */}
          <div className="flex flex-col space-y-6 lg:space-y-8">{`}`}
            {/* Technical Skills */}
            <div className="card-border animate-slide-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Technical Skills</h3>
              <div className="space-y-3 sm:space-y-4">
                {technicalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-xs sm:text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-portfolio-primary">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Web Development Skills */}
            <div className="card-border animate-slide-left" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Web Development</h3>
              <div className="space-y-3 sm:space-y-4">
                {webSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-xs sm:text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-portfolio-secondary">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Personal Statement */}
        <div className="card-border mt-8 sm:mt-10 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.3s"}}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Personal Statement</h3>
          <div className="space-y-4 text-sm sm:text-base">
            <p className="text-gray-300 leading-relaxed">
              I believe that technology, when applied thoughtfully and innovatively, can transform lives and address real-world challenges. My aspiration is to become a skilled AI engineer and Data Scientist, contributing to the development of solutions that are sustainable, inclusive, and impactful for society.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As I deepen my expertise in Artificial Intelligence and Machine Learning, I am particularly interested in exploring their applications in agriculture, healthcare, sustainability, and education.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am always open to collaborations, learning opportunities, and projects that challenge me to grow both technically and personally, while enabling me to create meaningful change through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
