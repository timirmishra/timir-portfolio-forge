
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Timir Mishra, a dedicated electronics technician currently working as a helper at Tata Steel. 
              With a strong foundation in electronics through my ITI certification, I'm passionate about technology 
              and continuously expanding my skills in the ever-evolving tech landscape.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in electronics began with my fascination for how things work, and I've been committed 
              to learning and growing in this field. I believe in combining theoretical knowledge with practical 
              experience to solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {['Problem Solving', 'Team Collaboration', 'Technical Documentation', 'Quality Assurance'].map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="bg-card/50 backdrop-blur-sm border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-sm text-muted-foreground">ITI in Electronics</p>
                    <p className="text-sm text-muted-foreground">Class 12 (2022) • Class 10 (2020)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Current Role</h3>
                    <p className="text-sm text-muted-foreground">Helper at Tata Steel</p>
                    <p className="text-sm text-muted-foreground">Electronics Department</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Experience</h3>
                    <p className="text-sm text-muted-foreground">Industrial Electronics</p>
                    <p className="text-sm text-muted-foreground">Equipment Maintenance & Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
