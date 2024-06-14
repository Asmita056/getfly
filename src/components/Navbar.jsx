import { useState } from "react";
export default function () {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyLogo</div>
        {/* Toggle button for the dropdown menu */}
        <div className="block lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {/* Toggle icon */}
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
        {/* Regular menu for larger screens */}
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
      {/* Dropdown menu for smaller screens */}
      {showMenu && (
        <div className="lg:hidden">
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            Contact
          </a>
        </div>
      )}
    </nav>

    //  <div className="App">
    //    <nav className="bg-gray-800 p-4">
    //      <div className="container mx-auto flex justify-between items-center">
    //        <div className="text-white text-xl font-bold">
    //          MyLogo
    //        </div>
    //        <div className="text-gray-400 text">Getfly</div>
    //        <div className="space-x-4">
    //          <a href="#" className="text-gray-300 hover:text-white">Home</a>
    //          <a href="#" className="text-gray-300 hover:text-white">About</a>
    //          <a href="#" className="text-gray-300 hover:text-white">Services</a>
    //          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
    //        </div>
    //      </div>
    //    </nav>
    //  </div>

    // <div className={styles.navbarContainer}>
    //    {/* <img src="/images/logo.jpeg" alt="" /> */}

    //       <div className={styles.navbarList}>
    //          <ul >
    //          <a href=""><li className={styles.navItem}>Home</li></a>
    //             <a href=""><li className={styles.navItem}>Notifications</li></a>
    //             <a href=""><li className={styles.navItem}>FAQ</li></a>
    //             <a href=""><li className={styles.navItem}>About</li></a>
    //             <a href=""><li className={styles.navItem}>Contact Us</li></a>
    //          </ul>
    //       </div>
    //  </div>
  );
}
