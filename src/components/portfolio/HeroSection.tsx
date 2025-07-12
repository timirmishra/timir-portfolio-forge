
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Glass card container */}
          <div className="backdrop-blur-xl bg-card/20 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm shadow-xl">
                <span className="text-4xl font-bold text-primary drop-shadow-lg">TM</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight drop-shadow-sm">
              Timir Mishra
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto backdrop-blur-sm">
              Electronics Technician & Tech Enthusiast
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary/20 text-primary-foreground shadow-xl">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm bg-white/5 border-white/20 hover:bg-white/10 shadow-xl">
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 shadow-lg">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 shadow-lg">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 shadow-lg">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-200 mt-8 p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 shadow-lg"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};
