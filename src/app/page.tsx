"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import StructuredData from "./components/StructuredData";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedTechVibe");
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("hasVisitedTechVibe", "true");
    }

    // Handle scroll for active navigation
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCallClick = () => {
    window.location.href = "tel:+8801320504151";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <StructuredData />

      {/* Welcome Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full translate-y-12 -translate-x-12"></div>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative p-8 text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to TechVibe Global! 🚀
              </h3>

              <div className="space-y-3 text-gray-600 mb-6">
                <p className="text-sm leading-relaxed">
                  <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  This is currently an <strong>under-development</strong>{" "}
                  project
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  An updated version will be available soon
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  You can still <strong>explore our services</strong> and
                  contact us
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    closePopup();
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  Explore Our Services
                </button>

                <button
                  onClick={closePopup}
                  className="w-full px-6 py-2 text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200"
                >
                  Continue Browsing
                </button>
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  This message appears only on your first visit
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <nav className=" backdrop-blur-xl bg-white/90 shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center ">
                <Image
                  src="/logo.png"
                  alt="TechVibe Global Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 mr-3 rounded-full overflow-hidden"
                  priority
                />
                <div>
                  <h1 className="text-xl font-bold text-blue-700">
                    TechVibe Global
                  </h1>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-1">
                  <button
                    onClick={() => scrollToSection("home")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === "home"
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === "about"
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === "services"
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === "contact"
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isMenuOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
                <button
                  onClick={() => scrollToSection("home")}
                  className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === "home"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === "about"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === "services"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === "contact"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Banner Section */}
        <header
          id="home"
          className="relative pt-9 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
          role="banner"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div
            className="absolute inset-0 bg-black opacity-40"
            aria-hidden="true"
          ></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-left text-white max-w-4xl">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-blue-400/30">
                  🚀 Engineering Excellence Since 2017
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">INNOVATIVE</span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SOLUTIONS
                </span>
                <span className="block text-white">IN ENGINEERING</span>
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-blue-100">
                Connecting Technology and Sustainability
              </h2>

              <p className="text-lg md:text-xl font-medium mb-8 text-gray-300 max-w-2xl">
                Specialized in Fire Safety • Electrical Safety • IT Surveillance
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCallClick}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                  aria-label="Contact TechVibe Global at +880 13205-04151"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="relative z-10">Consult With Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => scrollToSection("services")}
                  className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>Our Services</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* About Us Section */}
        <section
          id="about"
          className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
          aria-labelledby="about-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                About TechVibe Global
              </div>
              <h2
                id="about-heading"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Welcome to our company
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </div>

            {/* Story Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Our Beginning
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Founded in 2017 in Bangladesh, TechVibe Global set out to
                    transform sustainable infrastructure design. Built by
                    experienced engineers passionate about innovation, we strive
                    to revolutionize outdated industry practices.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We combine technical precision with creativity and ethical
                    responsibility. Every project is an opportunity to solve
                    real-world problems, improve lives, and shape a sustainable
                    future through continuous improvement and collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-12">
                Our Core Values
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🔥</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Fire Safety
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive fire protection and life safety solutions
                  </p>
                </div>

                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Electrical Safety
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Advanced electrical system safety and compliance
                  </p>
                </div>

                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">💻</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    IT Solutions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Cutting-edge surveillance and IT infrastructure
                  </p>
                </div>

                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🏗️</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Engineering Consultancy
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sustainable infrastructure and building solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    2017
                  </div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    2
                  </div>
                  <div className="text-gray-600">Office Locations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <main>
          <section
            id="services"
            className="py-20 bg-gradient-to-br from-white to-gray-50"
            aria-labelledby="services-heading"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                  What We Offer
                </div>
                <h2
                  id="services-heading"
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                  OUR SERVICES
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive engineering solutions designed to meet your
                  specific needs with precision, innovation, and reliability.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Fire and Life Safety
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 mt-2"></div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Over 8 years of experience in fire protection systems and
                    safety protocols across commercial and industrial settings.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Fire Risk Assessment & Mitigation
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Design of Fire Suppression and Detection Systems
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Compliance with NFPA and OSHA Standards
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Emergency Response Planning
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Safety Audits and Inspections
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Project Management and Team Leadership
                    </li>
                  </ul>
                </div>

                <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-yellow-200 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Electrical Safety
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-2"></div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Over 15 years of expertise in electrical system safety and
                    compliance across industrial and commercial sectors.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Electrical Hazard Analysis
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Risk Assessment & Mitigation
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Regulatory Compliance (NFPA 70E, OSHA)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Plan, Design and Implementation
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Lockout/Tagout Procedures
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Safety Audits and Inspections
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Incident Investigation
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Personal Protective Equipment (PPE) Implementation
                    </li>
                  </ul>
                </div>

                <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        IT and Surveillance Solutions
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Over 15 years of experience in scalable software
                    applications and IT infrastructure solutions.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      CCTV Systems - Installs and maintains surveillance systems
                      to enhance security
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Access Control Implements biometric, fingerprint, and face
                      recognition systems
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Hardware & Software Support: Troubleshooting and
                      maintenance services
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Product Sales: Computers, laptops, printers, projectors,
                      accessories
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Contact Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="TechVibe Global Logo"
                  width={64}
                  height={64}
                  className="h-16 w-auto mr-4"
                  priority
                />
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    TechVibe Global
                  </h2>
                  <p className="text-blue-400 text-sm">
                    Engineering Excellence Since 2017
                  </p>
                </div>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to transform your engineering challenges into innovative
                solutions? Let&apos;s connect and build the future together.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Contact Info */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+8801320504151"
                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +880 13205-04151
                  </a>
                  <a
                    href="mailto:info@techvibeglobal.com"
                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    info@techvibeglobal.com
                  </a>
                  <a
                    href="mailto:techvibeglobal@gmail.com"
                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    techvibeglobal@gmail.com
                  </a>
                </div>
              </div>

              {/* Services */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Our Services
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>🔥 Fire and Life Safety</p>
                  <p>⚡ Electrical Safety</p>
                  <p>💻 IT and Surveillance</p>
                  <p>🏗️ Engineering Consultancy</p>
                </div>
              </div>

              {/* Offices */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Our Offices
                </h3>
                <div className="space-y-4 text-gray-300 text-sm">
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">
                      🏢 Dhaka Office
                    </p>
                    <p>
                      4th Floor, House #07, Road #09,
                      <br />
                      Sector #11, Uttara, Dhaka
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">
                      🏢 Chottogram Office
                    </p>
                    <p>
                      2nd Floor, Wali Khan Bhaban,
                      <br />
                      Chowmuhoni, Chottogram
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mb-8">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCallClick}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call for Consultation
                </button>
                <a
                  href="mailto:info@techvibeglobal.com"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                © 2024 TechVibe Global. All rights reserved. | Connecting
                Technology and Sustainability
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
