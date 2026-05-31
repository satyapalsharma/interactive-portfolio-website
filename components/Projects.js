import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define project data
const projectsData = [
  {
    id: 1,
    title: "Interactive Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information with smooth animations and responsive design. Built with modern web technologies.",
    image: "/images/portfolio-thumbnail.jpg", // Placeholder image, ensure this path exists in public/images
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/yourusername/interactive-portfolio",
    liveLink: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "Todo App (Microservice Demo)",
    description: "A full-stack Todo application demonstrating CRUD operations, user authentication, and integration with a backend API. This project is part of a larger microservice ecosystem, showcasing inter-service communication.",
    image: "/images/todo-app-thumbnail.jpg", // Placeholder image
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Docker"],
    githubLink: "https://github.com/yourusername/todo-app-frontend",
    liveLink: "https://todo.yourdomain.com", // Simulating a separate service endpoint
  },
  {
    id: 3,
    title: "E-commerce Storefront",
    description: "A modern e-commerce platform with product listings, shopping cart functionality, and secure checkout process. Focus on user experience and scalable architecture.",
    image: "/images/ecommerce-thumbnail.jpg", // Placeholder image
    techStack: ["Next.js", "TypeScript", "Stripe API", "GraphQL", "Chakra UI"],
    githubLink: "https://github.com/yourusername/ecommerce-store",
    liveLink: "https://ecommerce.yourdomain.com",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "A real-time chat application featuring instant messaging, user presence, and group chats. Utilizes WebSockets for efficient communication.",
    image: "/images/chat-app-thumbnail.jpg", // Placeholder image
    techStack: ["React", "Socket.IO", "Node.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/realtime-chat-app",
    liveLink: "https://chat.yourdomain.com",
  },
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

/**
 * Projects Component
 * Displays a grid of project cards with details and links.
 * Utilizes Framer Motion for smooth entrance animations.
 */
const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          variants={itemVariants}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out group"
              variants={itemVariants}
              whileHover={{ y: -5 }} // Slight lift on hover
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-purple-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center text-sm font-medium"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.686-.208.686-.467 0-.232-.008-.757-.012-1.868-2.782.603-3.37-1.34-3.37-1.34-.454-1.158-1.11-1.465-1.11-1.465-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.592 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .26.216.559.692.462C20.146 20.18 23 16.425 23 12.017 23 6.484 18.522 2 13 2h-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors duration-200 flex items-center text-sm font-medium"
                    >
                      Live Demo
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7"
                        ></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;