import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle navigation and close menu
  const handleNavLinkClick = (e, href) => {
    // If it's an internal hash link on the same page, prevent default and scroll
    if (href.startsWith('/#') && router.pathname === '/') {
      e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      closeMenu();
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-sm fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold hover:text-indigo-400 transition-colors duration-300">
              {'<Dev />'}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                onClick={(e) => handleNavLinkClick(e, '/')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === '/' ? 'text-white bg-indigo-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } transition-colors duration-300`}
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={(e) => handleNavLinkClick(e, '/#about')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/#projects"
                onClick={(e) => handleNavLinkClick(e, '/#projects')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="/#skills"
                onClick={(e) => handleNavLinkClick(e, '/#skills')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                Skills
              </Link>
              <Link
                href="/#contact"
                onClick={(e) => handleNavLinkClick(e, '/#contact')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
              {/* Example of cross-project link */}
              {process.env.NEXT_PUBLIC_TODO_APP_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_TODO_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                >
                  My Todo App
                </a>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open. */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all ease-in-out duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            onClick={(e) => handleNavLinkClick(e, '/')}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              router.pathname === '/' ? 'text-white bg-indigo-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            } transition-colors duration-300`}
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={(e) => handleNavLinkClick(e, '/#about')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/#projects"
            onClick={(e) => handleNavLinkClick(e, '/#projects')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            onClick={(e) => handleNavLinkClick(e, '/#skills')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleNavLinkClick(e, '/#contact')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
          {process.env.NEXT_PUBLIC_TODO_APP_URL && (
            <a
              href={process.env.NEXT_PUBLIC_TODO_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
            >
              My Todo App
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;