'use client';

import { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

 const projects = [
    {
      title: "Mechanography Desktop Application",
      description: "A desktop application for typing practice with customizable lessons and progress tracking.",
      image: "https://picsum.photos/400/300?random=1",
      tags: ["C#", "SQLServer", "Windows Forms"],
    },
    {
      title: "Accounting System Application",
      description: "A desktop accounting system for managing financial transactions, invoicing.",
      image: "https://picsum.photos/400/300?random=2",
      tags: ["C#", "SQLServer", "Windows Forms"],
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">My<span className="text-indigo-900">Portfolio</span></h1>
          <ul className="hidden md:flex space-x-8">
            {['home', 'about', 'projects'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`capitalize hover:text-indigo-600 transition-colors ${
                    activeSection === section ? 'text-indigo-600 font-semibold' : ''
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                <span className="text-indigo-600">Salvador Espinoza</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Software Engineering student and developer specializing in C#, Python, C++, and database management. Driven to build innovative solutions that 
                combine technical expertise with practical problem-solving.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform"
                >
                  View My Work
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://picsum.photos/600/600"
                alt="Profile"
                className="rounded-full w-113 h-113 object-cover shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-16 h-1 bg-indigo-600 rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://picsum.photos/400/600" alt="Me working" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Hi there!</h3>
                  <p className="text-gray-600 mb-4">
                  I am Salvador, a Versatile developer proficient in C#, Python, C++, and Java with expertise in SQL, PostgreSQL, and MySQL. Currently pursuing a
                  Software Engineering degree while building practical experience through hands-on projects. Strong problem-solving skills with 
                  a passion for creating efficient, scalable solutions.
                  </p>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["C#","Python","Java","C++","Sql","JavaScript","Git","Github"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
              <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-lg mx-auto">
                Here are some of my recent work examples. Each project represents my commitment to quality and attention to detail.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-indigo-400">My<span className="text-indigo-300">Portfolio</span></h3>
              <p className="mt-2 text-gray-400">Creating beautiful and functional web experiences.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/salvador-espinoza-07b13a312" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.962 0-1.74-.79-1.74-1.764s.778-1.764 1.74-1.764 1.74.79 1.74 1.764-.778 1.764-1.74 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://github.com/espinoza05dev" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}