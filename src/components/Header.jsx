import { useState } from "react"; // Import useState for managing toggle
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage menu visibility
  const { origin } = location;

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="px-4 py-3 bg-white shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <Link to="/">
            <img
              src={`${origin}/images/logo.png`}
              alt="Logo"
              className="max-w-36"
            />
          </Link>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex gap-4 items-center">
            <Link
              to="/"
              className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
            >
              Products
            </Link>
            <Link
              to="/intraday-calls"
              className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
            >
              Intraday Calls
            </Link>
            <Link
              to="/our-branches"
              className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
            >
              Our Branches
            </Link>
            <Link
              to="/contact-us"
              className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="uppercase font-medium text-sm cursor-pointer px-5 py-2 text-white rounded bg-customTheme-theme1 hover:bg-customTheme-theme2"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu} // Toggle menu state
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && ( // Show the mobile menu based on state
          <div className="md:hidden bg-white shadow-md rounded-lg p-4 mt-2">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                onClick={closeMenu} // Close menu on link click
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                onClick={closeMenu} // Close menu on link click
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                onClick={closeMenu} // Close menu on link click
              >
                Services
              </Link>
              <Link
                to="/products"
                className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                onClick={closeMenu} // Close menu on link click
              >
                Products
              </Link>
              <Link
                to="/intraday-calls"
                className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                onClick={closeMenu} // Close menu on link click
              >
                Intraday Calls
              </Link>
              <Link
                to="/our-branches"
                className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                onClick={closeMenu} // Close menu on link click
              >
                Our Branches
              </Link>
              <Link
                to="/contact-us"
                className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                onClick={closeMenu} // Close menu on link click
              >
                Contact Us
              </Link>
              <Link
                to="/login"
                className="uppercase font-medium text-sm cursor-pointer px-5 py-2 text-white rounded bg-customTheme-theme1 hover:bg-customTheme-theme2"
                onClick={closeMenu} // Close menu on link click
              >
                Log In
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
