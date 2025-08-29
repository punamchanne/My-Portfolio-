
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20 sm:pt-24 md:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-slide-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              Hello, I'm <span className="gradient-text">Punam Channe</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0">
              Passionate About AI & Web Development | Exploring the Future of Technology
            </p>
            <p className="text-gray-400 mb-8 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              B.Tech student specializing in Artificial Intelligence with experience in machine learning and web development. Creating innovative solutions for tomorrow's challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button className="w-full sm:w-auto bg-portfolio-primary hover:bg-portfolio-primary-dark text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#portfolio" className="flex items-center justify-center">
                  Explore My Work <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base transition-all duration-300">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in mt-8 lg:mt-0">
            <div className="relative">
              {/* Updated to use the uploaded profile image */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-portfolio-primary purple-glow">
                <img 
                  src="/lovable-uploads/jpg2png/WhatsApp Image 2025-08-28 at 20.03.12_4ddc8d03.png" 
                  alt="Punam Kishor Channe" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-80 lg:h-80 xl:w-88 xl:h-88 border-2 border-portfolio-secondary/30 rounded-full"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-88 lg:h-88 xl:w-96 xl:h-96 border border-portfolio-primary/20 rounded-full"></div>
              
              {/* Tech stack badges */}
              <div className="absolute top-0 -right-4 sm:-right-8 bg-portfolio-dark-gray p-2 sm:p-3 rounded-full shadow-lg border border-portfolio-primary/20">
                <span className="text-portfolio-primary text-xs font-bold">AI</span>
              </div>
              <div className="absolute bottom-8 sm:bottom-12 -left-4 sm:-left-8 bg-portfolio-dark-gray p-2 sm:p-3 rounded-full shadow-lg border border-portfolio-secondary/20">
                <span className="text-portfolio-secondary text-xs font-bold">ML</span>
              </div>
              <div className="absolute top-8 sm:top-12 -left-8 sm:-left-12 bg-portfolio-dark-gray p-2 sm:p-3 rounded-full shadow-lg border border-portfolio-accent/20">
                <span className="text-portfolio-accent text-xs font-bold">React</span>
              </div>
              <div className="absolute bottom-0 -right-2 sm:-right-4 bg-portfolio-dark-gray p-2 sm:p-3 rounded-full shadow-lg border border-portfolio-primary/20">
                <span className="text-portfolio-primary text-xs font-bold">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
