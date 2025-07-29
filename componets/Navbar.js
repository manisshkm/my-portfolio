"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 👈 State to track scroll

  useEffect(() => {
    gsap.from(navRef.current, {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power4.out",
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 shadow-lg ${
        scrolled ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Manish</h1>

        <div className="hidden md:flex gap-6 font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#home" className="block py-2">Home</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}
