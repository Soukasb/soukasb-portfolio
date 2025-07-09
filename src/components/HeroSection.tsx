
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements - NOW IN AMBER GLOW! */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 right-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ 
            duration: 10, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-lg md:text-xl font-medium text-amber-600 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              SOUKAINA BYA
            </motion.h1>
            <motion.h3 
              className="text-xl md:text-2xl font-medium text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Full-Stack Engineer | Shopify & WordPress Problem-Solver
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-8 text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              I craft beautiful, functional, and user-friendly Web applications with clean code and modern technologies.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <Button size="lg" className="bg-amber-600 hover:bg-amber-600/90 text-white">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-dashed border-amber-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-4 bg-gradient-to-br from-white to-amber-50 rounded-full shadow-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/Soukaina_about.jpg" 
                  alt="Soukaina BYA" 
                  className="object-cover w-full h-full rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
