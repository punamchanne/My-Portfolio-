
import { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

/**
 * Contact Component with EmailJS Integration
 * 
 * Clean implementation with only EmailJS functionality
 * Service ID: service_huqs3za
 * Template ID: template_foz6zt8
 * Public Key: akn8eSZXqFog0WW7P
 */

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    console.log('Initializing EmailJS...');
    emailjs.init('akn8eSZXqFog0WW7P');
    console.log('EmailJS initialized successfully');
  }, []);

  // Test EmailJS connection
  const testEmailJS = async () => {
    console.log('Testing EmailJS connection...');
    try {
      const result = await emailjs.send(
        'service_huqs3za',
        'template_foz6zt8',
        {
          from_name: 'Test User',
          from_email: 'test@example.com',
          message: 'This is a test message from your portfolio contact form.',
          to_name: 'Punam Channe'
        },
        'akn8eSZXqFog0WW7P'
      );
      console.log('Test email sent successfully:', result);
      toast.success('Test email sent successfully!');
    } catch (error: any) {
      console.error('Test email failed:', error);
      toast.error(`Test failed: ${error.text || error.message}`);
    }
  };

  // Copy email to clipboard
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('punamchanne51@gmail.com');
      toast.success('Email copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy email:', error);
      toast.error('Failed to copy email');
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission started with data:', formData);
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log('Attempting to send email with EmailJS...');
      
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_huqs3za',
        'template_foz6zt8',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Punam Channe'
        },
        'akn8eSZXqFog0WW7P'
      );
      
      console.log('Email sent successfully:', result);
      
      // Show success message
      toast.success('Message sent successfully!', {
        description: "Thanks for reaching out! I'll get back to you soon."
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error: any) {
      console.error('EmailJS error details:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      
      // Show error message with more details
      toast.error('Failed to send message', {
        description: `Error: ${error.text || error.message || 'Please try again or contact me directly at punamchanne51@gmail.com'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-portfolio-dark-gray/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Contact <span className="gradient-text">Me</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            Have a project in mind or want to collaborate? Let's get in touch!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Form */}
          <div className="card-border animate-slide-right">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send me a message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-gray-300 mb-2 text-sm sm:text-base">Your Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-portfolio-primary/20 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:border-portfolio-primary focus:ring-1 focus:ring-portfolio-primary transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="from_email" className="block text-gray-300 mb-2 text-sm sm:text-base">Your Email</label>
                <input
                  type="email"
                  id="from_email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-portfolio-primary/20 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:border-portfolio-primary focus:ring-1 focus:ring-portfolio-primary transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm sm:text-base">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or inquiry"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-portfolio-primary/20 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:border-portfolio-primary focus:ring-1 focus:ring-portfolio-primary resize-none transition-colors text-sm sm:text-base"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-white py-4 sm:py-6 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-primary/25"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="card-border mb-4 sm:mb-6 animate-slide-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 mt-1 bg-portfolio-primary/20 p-2 sm:p-3 rounded-full">
                    <a href="mailto:punamchanne51@gmail.com" className="text-portfolio-primary hover:text-portfolio-secondary transition-colors">
                      <Mail size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-medium text-white mb-1">Email</h4>
                    <div className="flex items-center gap-2">
                      <a 
                        href="mailto:punamchanne51@gmail.com" 
                        className="text-gray-400 hover:text-portfolio-primary transition-colors text-sm sm:text-base"
                      >
                        punamchanne51@gmail.com
                      </a>
                      <button 
                        onClick={copyEmailToClipboard}
                        className="text-gray-500 hover:text-portfolio-primary transition-colors text-sm px-2 py-1 rounded"
                        title="Copy email to clipboard"
                      >
                        📋
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 mt-1 bg-portfolio-primary/20 p-2 sm:p-3 rounded-full">
                    <Linkedin size={18} className="text-portfolio-primary sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-white mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/punamchanne51/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-portfolio-primary transition-colors text-sm sm:text-base"
                    >
                      linkedin.com/in/punamchanne51
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 mt-1 bg-portfolio-primary/20 p-2 sm:p-3 rounded-full">
                    <Github size={18} className="text-portfolio-primary sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-white mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/punamchanne" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-portfolio-primary transition-colors text-sm sm:text-base"
                    >
                      github.com/punamchanne
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-border animate-slide-left" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let's Connect!</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                I'm currently open to freelance projects, internship opportunities, and collaborations in the field of AI, machine learning, and web development.
              </p>
              
              <p className="text-gray-400 text-sm sm:text-base">
                Whether you have a project idea, a job opportunity, or just want to say hello, I'd be happy to hear from you. I'm committed to responding to all messages within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
