import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar'; // Assuming Navbar is in the same components directory

/**
 * Layout component for the Interactive Portfolio Website.
 * This component provides a consistent structure for all pages,
 * including the navigation bar and a main content area.
 * It also manages the document head for SEO and page titles.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * @param {string} [props.title='My Interactive Portfolio'] - The title for the document head.
 * @param {string} [props.description='A personal portfolio website showcasing projects, skills, and contact information.'] - The meta description for the document head.
 */
const Layout = ({ children, title = 'My Interactive Portfolio', description = 'A personal portfolio website showcasing projects, skills, and contact information with smooth animations and responsive design.' }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased flex flex-col">
      {/* Head component for managing document metadata */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com/" /> {/* Replace with actual URL */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://yourportfolio.com/og-image.jpg" /> {/* Replace with actual image */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourportfolio.com/" /> {/* Replace with actual URL */}
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://yourportfolio.com/twitter-image.jpg" /> {/* Replace with actual image */}
      </Head>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow container mx-auto px-4 py-8 md:px-8 lg:px-12">
        {children}
      </main>

      {/* Optional: Footer component can be added here if needed */}
      {/* <footer className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </footer> */}
    </div>
  );
};

export default Layout;