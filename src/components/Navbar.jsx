import { useState } from "react";
import logo from "../images/logos.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src={logo}
            alt="Getfly Technologies Logo"
            style={{ height: "60px", width: "50px" }}
          />
        </div>
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
          <Link to="/" className="text-gray-300 hover:text-white text-lg">
            Home
          </Link>
          <Link
            to="/notifications"
            className="text-gray-300 hover:text-white text-lg"
          >
            Notifications
          </Link>
          <Link to="/faq" className="text-gray-300 hover:text-white text-lg">
            FAQ
          </Link>
        </div>
      </div>

      {showMenu && (
        <div className="lg:hidden">
          <Link
            to="/"
            className="block text-gray-300 hover:text-white px-2 py-1 text-lg"
          >
            Home
          </Link>
          <Link
            to="/notifications"
            className="block text-gray-300 hover:text-white px-2 py-1 text-lg"
          >
            Notifications
          </Link>
          <Link
            to="/faq"
            className="block text-gray-300 hover:text-white px-2 py-1 text-lg"
          >
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
}
