import '../styles/globals.css'; // Import global styles for the entire application
import Layout from '../components/Layout'; // Import the shared Layout component

/**
 * Custom App component for Next.js.
 * This component wraps all pages in the application, allowing for:
 * - Persisting layout between page changes (e.g., Navbar, Footer)
 * - Injecting global styles
 * - Adding global data (e.g., from a context provider)
 * - Handling errors
 *
 * @param {object} props - The props for the App component.
 * @param {React.ComponentType} props.Component - The current page component to be rendered.
 * @param {object} props.pageProps - Initial props pre-fetched by Next.js for the page component.
 */
function MyApp({ Component, pageProps }) {
  return (
    // The Layout component provides a consistent structure (e.g., Navbar, Footer, main content wrapper)
    // across all pages of the portfolio website. This ensures a unified look and feel.
    <Layout>
      {/*
        The Component prop represents the active page (e.g., pages/index.js, pages/about.js).
        We spread pageProps onto it to pass any initial data fetched by Next.js (e.g., via getServerSideProps or getStaticProps).
      */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;