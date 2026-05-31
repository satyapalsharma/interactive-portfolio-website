import Head from 'next/head';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import { motion } from 'framer-motion'; // For smooth animations

/**
 * Home Page Component
 *
 * This component serves as the main landing page for the interactive portfolio website.
 * It integrates various sections like Hero, About Me, Skills, Projects, and Contact,
 * leveraging Next.js for SSR/SSG capabilities, React for component-based UI,
 * Tailwind CSS for utility-first styling, and Framer Motion for smooth animations.
 */
export default function Home() {
  // Define animation variants for Framer Motion to orchestrate entry animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // List of skills to display, including icons (assuming devicon is available globally)
  const skills = [
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Next.js', icon: 'devicon-nextjs-original' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express.js', icon: 'devicon-express-original' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain