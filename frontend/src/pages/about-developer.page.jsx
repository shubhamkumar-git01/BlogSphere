import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import AnimationWrapper from '../common/page-animation';

const AboutDeveloper = () => {
    return (
        <AnimationWrapper>
            <div className="h-cover flex flex-col justify-center items-center px-4 md:px-0 bg-white dark:bg-dark-bg transition-colors duration-300">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full max-w-3xl bg-white dark:bg-dark-card shadow-premium dark:shadow-premium-dark rounded-2xl overflow-hidden border border-grey dark:border-dark-grey transition-colors"
                >
                    <div className="h-48 bg-dark-grey dark:bg-black relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
                    </div>
                    
                    <div className="flex flex-col items-center -mt-20 px-8 pb-10 relative z-10">
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                            className="w-40 h-40 bg-white dark:bg-dark-card p-2 rounded-full shadow-lg"
                        >
                            <img 
                                src="/profile.jpg" 
                                alt="Shubham Kumar" 
                                className="w-full h-full rounded-full bg-grey dark:bg-black object-cover"
                            />
                        </motion.div>

                        <h1 className="text-3xl font-bold mt-4 text-black dark:text-white transition-colors">Shubham Kumar</h1>
                        <p className="text-dark-grey dark:text-accent text-lg font-medium mt-1 transition-colors">Full Stack Developer | AI Enthusiast</p>

                        <p className="text-center mt-6 text-dark-grey dark:text-text-light leading-relaxed max-w-xl transition-colors">
                            Hey! I'm Shubham, a passionate developer engineering modern web applications. 
                            I built <b>BlogSphere</b> using the MERN stack to demonstrate scalable full-stack development, 
                            secure authentication, and a clean, premium user experience. I love turning complex problems 
                            into simple, beautiful, and intuitive designs.
                        </p>

                        <div className="flex gap-6 mt-8">
                            <a href="https://github.com/shubhamkumar-git01" target="_blank" className="w-12 h-12 rounded-full bg-grey dark:bg-black flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-black dark:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 relative z-20">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/shubham-kumar-sk01/" target="_blank" className="w-12 h-12 rounded-full bg-grey dark:bg-black flex items-center justify-center hover:bg-[#0A66C2] hover:text-white dark:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 relative z-20">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:shubham.kumar.cse27@gmail.com" className="w-12 h-12 rounded-full bg-grey dark:bg-black flex items-center justify-center hover:bg-[#EA4335] hover:text-white dark:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 relative z-20">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimationWrapper>
    );
};

export default AboutDeveloper;
