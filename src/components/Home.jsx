import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-between min-h-[34rem] bg-gray-100">
        <header className="pt-4 px-8 w-full text-center">
          <h1 className="text-3xl font-bold">
            Welcome to Getfly Technologies!
          </h1>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center max-h-screen p-4">
          <p className="text-lg mb-4 text-center">
            Your one-stop solution for all placement updates and notifications.
          </p>
          <Link
            to="/notifications"
            className="bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Go to Notifications
          </Link>

          <Link
            to="/faq"
            className="bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-700 m-5"
          >
            Go to FAQ
          </Link>
        </main>
      </div>
      <Footer />
    </>
  );
}
