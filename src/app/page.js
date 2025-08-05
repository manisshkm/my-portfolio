'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);
  const formRef = useRef(null);
  const projectsContainerRef = useRef(null);
  const scrollContentRef = useRef(null);

  const projects = [
    {
      title: "MY PORTFOLIO",
      desc: "A PORTFOLIO OF MINE MADE USING NEXT.JS AND GSAP",
      img: "/manish.jpg",
    },
    {
      title: "CHAT-BOT",
      desc: "A GROUP CHATTING PLATFORM MADE USING SOCKET AND NEXT.JS ",
      img: "https://d2vrvpw63099lz.cloudfront.net/do-i-need-a-chatbot/header-chat-box.png",
    },
    {
      title: "Weather App",
      desc: "Weather forecast web app using API integration",
      img: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886301/EducationHub/photos/lightning-bolts.jpg",
    },
    {
      title: "ECCOMERCE WEBSITE",
      desc: "A SLEEK MODERN ECOOMERCE WEBSITE USING NEXT.JS",
      img: "https://miro.medium.com/v2/resize:fit:1340/0*EVTnmRoDHotaLydW",
    },
    {
      title: "DAHEJ CALCULATER",
      desc: "A MINIMAL PROJECT FOR AWARENESS OF DOWRY IS CRIME",
      img: "https://ijlsi.com/wp-content/uploads/Dowry-System-images.jpg",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }
    gsap.from(contentRef.current, {
      x: 200,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!scrollContentRef.current || !projectsContainerRef.current) return;
    gsap.to(scrollContentRef.current, {
      x: () =>
        -(
          scrollContentRef.current.scrollWidth -
          projectsContainerRef.current.offsetWidth
        ),
      ease: "none",
      scrollTrigger: {
        trigger: projectsContainerRef.current,
        start: "top top",
        end: () =>
          "+=" +
          (scrollContentRef.current.scrollWidth -
            projectsContainerRef.current.offsetWidth),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    return () => ScrollTrigger.killAll();
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="scroll-smooth font-sans">
      {/* Home Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center md:justify-start bg-gradient-to-br from-blue-100 to-purple-100 px-6 overflow-hidden"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 z-0"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
            },
            particles: {
              color: { value: "#7c3aed" },
              links: {
                color: "#7c3aed",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: { enable: false },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                speed: 1,
              },
              number: { value: 40 },
              opacity: { value: 0.4 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />

        <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
          <div
            ref={imageRef}
            className="w-[400px] h-[400px] border-4 border-gradient-to-tr from-purple-500 via-pink-400 to-yellow-300 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition duration-500 ease-in-out"
          >
            <Image
              src="/manish.jpg"
              alt="Manish"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            ref={contentRef}
            className="flex-1 text-center md:text-left space-y-4 md:mt-12"
          >
            <h1 className="text-5xl font-extrabold text-gray-800">
              Hi, I&apos;m <span className="text-purple-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Manish</span>
            </h1>
            <p className="text-xl text-gray-700">
              <Typewriter
                words={["Frontend Developer", "React Enthusiast", "Next.js", "MongoDB"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="text-xl text-gray-700">
              Frontend Developer | Passionate Coder with high dreams
            </p>
            <p className="text-2xl text-red-500 font-semibold">
              Going more deep with passion of code
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-purple-200 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl items-center">
          {/* Left: Brief Intro */}
          <div className="space-y-4 text-left animate-fade-in-left">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-700">
              Hi, I&apos;m <span className='text-blue-400 font-bold font-sans text-2xl'> Manish</span>, a 20-year-old third-year B.Tech student in Electronics and Communication Engineering at College <span className='text-red-400'>JNU</span>. I&apos;m passionate about creating user-friendly and visually appealing web interfaces as a skilled Frontend Developer. My expertise lies in building dynamic, responsive applications using <span className='underline text-blue-400'> Next.js, React, CSS, and Tailwind CSS </span>. Beyond coding, I&apos;m proficient in soft skills, including Microsoft Word and Excel, which help me manage projects efficiently and communicate effectively. With a strong foundation in both technical and interpersonal skills, I love bringing innovative ideas to life through clean code and modern design. Let&apos;s connect to create something amazing together!
            </p>
          </div>
          {/* Middle: Skills */}
          <div className="space-y-2 text-left animate-fade-in-up">
            <h3 className="text-2xl font-extrabold top-0.5">Skills</h3>
            <ul className="list-disc list-inside font-bold text-black">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Next.js, Tailwind CSS</li>
              <li>MongoDB, Node.js</li>
              <li>Git, GitHub</li>
            </ul>
          </div>
          {/* Right: Image + Button */}
          <div className="flex flex-col items-center animate-fade-in-right space-y-4">
            <Image
              src="/manish.jpg"
              alt="Your Portrait"
              width={256}
              height={256}
              className="w-64 h-64 rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
            />
            <button className="px-6 py-3 rounded-e-full border-2 bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-purple-100">
        <div ref={projectsContainerRef} className="relative h-screen overflow-hidden">
          <h2 className="text-3xl font-bold text-center pt-10 pb-4">Projects</h2>
          <div
            ref={scrollContentRef}
            className="flex space-x-8 px-10 py-10 w-max position:relative gap-16"
            style={{ height: "calc(100vh - 6rem)" }}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className="horizontal-card bg-white w-[300px] flex-shrink-0 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
              >
                <div className="h-64 w-full overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={300}
                    height={256}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    unoptimized={project.img.startsWith('http')}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center relative bg-red-300"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div
          ref={formRef}
          className="relative z-10 max-w-lg w-full bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Contact Me
          </h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="text-center text-sm text-gray-600 pt-4">
            Or reach me at: <br />
            <a
              href="mailto:km9474789@gmail.com"
              className="text-purple-700 underline"
            >
              Email Me
            </a>{" "}
            | +91-8383082278
          </div>
        </div>
      </section>
    </div>
  );
}
