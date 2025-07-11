
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Zap, Cpu, Wrench, Settings, Monitor, Database } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Electronics & Hardware',
      icon: Cpu,
      skills: [
        { name: 'Circuit Analysis', level: 85 },
        { name: 'PCB Design', level: 70 },
        { name: 'Soldering & Assembly', level: 90 },
        { name: 'Multimeter Usage', level: 95 },
      ],
    },
    {
      title: 'Industrial Systems',
      icon: Settings,
      skills: [
        { name: 'PLC Programming', level: 75 },
        { name: 'Motor Control', level: 80 },
        { name: 'Sensor Integration', level: 85 },
        { name: 'Control Panels', level: 70 },
      ],
    },
    {
      title: 'Maintenance & Repair',
      icon: Wrench,
      skills: [
        { name: 'Troubleshooting', level: 90 },
        { name: 'Preventive Maintenance', level: 85 },
        { name: 'Equipment Calibration', level: 75 },
        { name: 'Safety Protocols', level: 95 },
      ],
    },
    {
      title: 'Technical Skills',
      icon: Monitor,
      skills: [
        { name: 'Technical Documentation', level: 80 },
        { name: 'Quality Control', level: 85 },
        { name: 'Project Management', level: 70 },
        { name: 'Team Collaboration', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, label: 'High Voltage Systems', color: 'text-yellow-500' },
              { icon: Database, label: 'Data Analysis', color: 'text-blue-500' },
              { icon: Monitor, label: 'HMI Programming', color: 'text-green-500' },
              { icon: Settings, label: 'System Integration', color: 'text-purple-500' },
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/20 hover:bg-card/50 transition-all duration-300"
              >
                <item.icon className={`h-8 w-8 ${item.color}`} />
                <span className="text-sm font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
