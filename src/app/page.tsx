"use client";

import { useState, useEffect } from "react";
import StructuredData from "./components/StructuredData";
import Navbar from "./components/Navbar";
import WelcomePopup from "./components/WelcomePopup";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import { Products } from "./components";

export default function Home() {
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
      const sections = ["home", "about", "services", "products", "contact"];
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

  const closePopup = () => {
    setShowPopup(false);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <StructuredData />

      <WelcomePopup
        showPopup={showPopup}
        closePopup={closePopup}
      />

      <div className="min-h-screen bg-white">
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <HeroSection
          handleCallClick={handleCallClick}
          scrollToSection={scrollToSection}
        />

        <AboutSection />

        <ServicesSection />

        <Products />

        <Footer handleCallClick={handleCallClick} />
      </div>
    </>
  );
}
