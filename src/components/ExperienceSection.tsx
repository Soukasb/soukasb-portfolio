
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Full stack Developper",
      company: "Black Concept",
      period: "Jan 2025 - Present",
      description: "I develop and maintain full-stack web applications using modern technologies like React and Laravel. My role involves debugging critical issues in Shopify and WordPress sites to ensure optimal performance. I collaborate with designers and project managers to deliver functional, user-friendly products on schedule. Additionally, I mentor junior team members while continuously expanding my technical skills.",
      technologies: ["React","Nextjs","Tailwind CSS","Laravel", "Php","Voyager","wordpress", "shopify"]
    },
    {
      id: 2,
      title: "Web Developer",
      company: "System Base",
      period: "Aug 2023 – Dec 2024",
      description: "I collaborated within a dedicated IT department to maintain and enhance the company's private web app system, focusing on marketing campaign management. I also played a key role in developing automation scripts to optimize workflow efficiency.",
      technologies: ["Javascript", "HTML", "CSS", "PHP"]
    },
    {
      id: 3,
      title: "Full-stack Developer Intern",
      company: "Proyak Sarl · Internship",
      period: "May 2023 - Jun 2023",
      description: "Internship experience includes frontend development with React and backend systems with Laravel, focusing on scalable web applications.",
      technologies: ["React", "JavaScript", "HTML/CSS", "PHP", "MySQL","Laravel"]
    },
    
  ];

  const education = [
    {
      id: 1,
      degree: "3rd Year – Engineering Cycle ",
      institution: "ENSA University, Tangier-Morroco",
      period: "2025 - present",
      description: "3rd year coursework in the 5-year engineering program, focusing on software development, algorithms, and systems architecture."
    },
    {
      id: 2,
      degree: "DUT in Computer Science ",
      institution: "ISTA ISMONTIC,",
      period: "2021 - 2023",
      description: "Earned a 2-year technical degree specializing in full-stack web development (front-end/back-end), OOP, and database management, with additional experience in cloud-native applications, cybersecurity, and Agile web project management."
    },
    {
      id: 3,
      degree: " Baccalaureate(BAC) - Physical Sciences",
      institution: "Abi El Abas Sebti High School",
      period: "2020 - 2021",
      description: "Scientific methodology trained me to break down problems systematically—a skill I now use daily in full-stack development."
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and career milestones.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex flex-col md:flex-row ${index % 2 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2"></div>
                <motion.div 
                  className="hidden md:flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center z-10">
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                  </div>
                </motion.div>
                <div className="md:w-1/2 md:px-8">
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      x: index % 2 ? 50 : -50 
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0 
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <h4 className="text-primary font-medium">{exp.company}</h4>
                          </div>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span 
                              key={techIndex} 
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ 
                                duration: 0.3,
                                delay: 0.5 + techIndex * 0.1
                              }}
                              viewport={{ once: true }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <h4 className="text-primary font-medium">{edu.institution}</h4>
                      </div>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
