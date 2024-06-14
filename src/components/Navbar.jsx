import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">MyLogo</div>
          <div className="block lg:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {showMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              )}
            </button>
          </div>

          <div className="hidden lg:flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link
              to="/notifications"
              className="text-gray-300 hover:text-white"
            >
              Notifications
            </Link>
            <Link to="/faq" className="text-gray-300 hover:text-white">
              FAQ
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {showMenu && (
          <div className="lg:hidden">
            <Link
              to="/"
              className="block text-gray-300 hover:text-white px-2 py-1"
            >
              Home
            </Link>
            <Link
              to="/notifications"
              className="block text-gray-300 hover:text-white px-2 py-1"
            >
              Notifications
            </Link>
            <Link
              to="/faq"
              className="block text-gray-300 hover:text-white px-2 py-1"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-white px-2 py-1"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </Router>
  );
}
