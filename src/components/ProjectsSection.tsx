import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Dar Chems - Luxury Hotel Website",
      description: "A responsive, modern hotel website built with React and Next.js, featuring elegant UI design inspired by high-end boutique hotels. Includes interactive sections like gallery, spa, dining, and cultural visits with a booking enging.",
      image: "/darchems.png",
      category: "web",
      technologies: ["React", "Next.js", "Tailwind CSS", "Sanity.io", "Vercel", "Framer Motion"],
      demoLink: "https://dar-chems-hotel.vercel.app ",
      //codeLink: "https://github.com/Soukasb/Dar-chems- "
    },
    {
      id: 2,
      title: "Your Bake - Bakery Store",
      description: "A modern, responsive bakery website built with React and Next.js. Showcasing product lines, daily production stats, quality ratings, and operations status in a clean and engaging design. Perfectly suited for small businesses looking to build an online presence.",
      image: "/yourbake.png",
      category: "web",
      technologies: ["React", "Nextjs", "Tailwind CSS", "Framer Motion", "Laravel", "voyager", "Axios"],
      demoLink: "https://your-bake.vercel.app "
      //codeLink:"#"

    },
    {
      id: 3,
      title: "Ellegado Drinks - Premium Beverage Brand",
      description: "A fully customized WordPress website for Ellegado Drinks, a premium beverage brand. Enhanced with custom features including responsive design, product showcase sections, and improved site performance. Built with Elementor ",
      image: "/ellegado.png", 
      category: "web",
      technologies: ["WordPress", "Elementor", "PHP", "MySQL", "CSS"],
      demoLink: "https://ellegadodrinks.com ",
      //codeLink: "#" // Optional: leave blank or link to private repo
    },
    {
      id: 4,
      title: "Ilyatex - Shopify Textile Store",
      description: "A professional Shopify store built for Ilyatex, a textile brand specializing in high-quality fabrics. integrated with Shopify’s native tools for seamless e-commerce functionality including product filtering, cart management, and responsive design.",
      image: "/ilyatexshopify.png", 
      category: "web",
      technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript",],
      demoLink: "https://shop.ilyatex.com ",
      //codeLink: "#" // Optional: leave blank or link to private repo
    },
    {
      id: 5,
      title: "Ilyatex - Branding Website",
      description: "A clean and modern branding website built for a fictional brand, showcasing product presentation, services, and company values. Designed with a focus on visual storytelling and responsiveness.",
      category: "web",
      image: "/ilyatex.jpeg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Laravel", "Voyager", "Web Animation"],
      demoLink: "https://ilyatex.com ",
      //codeLink:"#" // Optional: Replace with GitHub link if you want to share it
    },
    {
      id: 6,
      title: "Osaka Maroc - Presentative  Website",
      description: "A clean and modern branding website built for a fictional brand, showcasing product presentation, services, and company values. Designed with a focus on visual storytelling.",
      image: "/osakamaroc.jpeg",
      category: "web",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Laravel", "Voyager", "Web Animation"],
      demoLink: "https://www.osakamaroc.ma",
      //codeLink:"#"

    }

  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a selection of my recent work and technical projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            variant={filter === 'all' ? "default" : "outline"}
            onClick={() => setFilter('all')}
            className="transition-all duration-300"
          >
            All Projects
          </Button>
          {/*  
          <Button 
            variant={filter === 'web' ? "default" : "outline"} 
            onClick={() => setFilter('web')}
            className="transition-all duration-300"
          >
            Web Development
          </Button>
          <Button 
            variant={filter === 'app' ? "default" : "outline"} 
            onClick={() => setFilter('app')}
            className="transition-all duration-300"
          >
            App Development
          </Button>
          <Button 
            variant={filter === 'dashboard' ? "default" : "outline"} 
            onClick={() => setFilter('dashboard')}
            className="transition-all duration-300"
          >
            Dashboards
          </Button>*/}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item} className="h-full">
              <Card className="project-card overflow-hidden border-none shadow-md h-full flex flex-col">
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between mt-auto pt-4 flex-shrink-0">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm">Live Demo</Button>
                  </motion.a>
                  {/* Projects Grid 
                  <motion.a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="default" size="sm">View Code</Button>
                  </motion.a>*/}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;