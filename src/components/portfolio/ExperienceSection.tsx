
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Tata Steel',
      position: 'Helper - Electronics Department',
      duration: 'Current Position',
      location: 'India',
      description: [
        'Assist in maintenance and repair of industrial electronic equipment',
        'Support senior technicians in troubleshooting complex electronic systems',
        'Perform routine inspections and preventive maintenance tasks',
        'Maintain detailed documentation of equipment status and repairs',
        'Collaborate with cross-functional teams to ensure operational efficiency',
      ],
      technologies: ['Industrial Electronics', 'PLCs', 'Motor Control', 'Safety Systems'],
    },
  ];

  const education = [
    {
      institution: 'Industrial Training Institute (ITI)',
      course: 'Electronics Trade',
      duration: 'Completed',
      description: [
        'Comprehensive training in electronic circuits and systems',
        'Hands-on experience with electronic components and instruments',
        'Industrial electronics and automation fundamentals',
        'Safety protocols and industry standards',
      ],
    },
    {
      institution: 'Secondary Education',
      course: 'Class 12th',
      duration: '2022',
      description: [
        'Completed higher secondary education with focus on science',
        'Strong foundation in physics and mathematics',
      ],
    },
    {
      institution: 'Secondary Education',
      course: 'Class 10th',
      duration: '2020',
      description: [
        'Completed secondary education with good academic performance',
        'Developed interest in electronics and technology',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Experience & Education
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="mr-1 h-4 w-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.course}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="mr-1 h-4 w-4" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {edu.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
