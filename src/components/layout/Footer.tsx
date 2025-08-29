
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark-gray py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-display text-xl font-bold gradient-text mb-2">Punam Kishor Channe</h3>
            <p className="text-gray-400">B.Tech Student, Artificial Intelligence</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="text-gray-400 text-sm md:text-right">
              <p>G.H. Raisoni College of Engineering</p>
              <p>Nagpur, Maharashtra, India</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/punamchanne51/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/punamchanne" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-purple transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:punam.channe@example.com" 
                className="text-gray-400 hover:text-portfolio-purple transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-3 md:mb-0">
            © {currentYear} Punam Channe. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with passion and code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
