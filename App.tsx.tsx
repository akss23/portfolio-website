import React from 'react';
import { Github, Linkedin, Youtube, Instagram, Download, ExternalLink, Play, Code, Trophy, GraduationCap, Mic, Film, Database, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            &lt;<span className="text-purple-400">Akshat Parashar</span>/&gt;
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
            <a href="#education" className="text-gray-300 hover:text-purple-400 transition-colors">Education</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/akss23" className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akshat-parashar-9982b4256/" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/user3012lg/" className="text-gray-300 hover:text-white transition-colors">
              <Brain size={20} />
            </a>
            <a href="https://www.youtube.com/playlist?list=PLi52nqmVi6up8BqNGPZ2ZPElwQ_lPifjJ" className="text-gray-300 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
                Akshat
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Parashar
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 space-y-2">
                <div className="typewriter-text animate-fade-in-up animation-delay-500">
                  I am a
                </div>
                <div className="typewriter-text animate-fade-in-up animation-delay-1000 text-purple-400 font-semibold">
                  Content Creator & Podcast Host
                </div>
                <div className="typewriter-text animate-fade-in-up animation-delay-1500 text-pink-400 font-semibold">
                  Data Structures Enthusiast
                </div>
                <div className="typewriter-text animate-fade-in-up animation-delay-2000 text-blue-400 font-semibold">
                  Short Film Creator
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed animate-fade-in-up animation-delay-2500">
              I am a passionate content creator and podcast host with expertise in data structures and algorithms. 
              I create engaging 90-second short films on Instagram and host the popular podcast "Be Delusional". 
              Currently pursuing B.Tech in Computer Science Engineering at DCRUST Murthal, I have won multiple 
              awards in dramatics and public speaking competitions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-3000">
              <div className="text-center">
                <p className="text-purple-400 font-semibold">Let's connect and create something amazing together!</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src="/WhatsApp Image 2025-06-23 at 15.53.41_08b46632.jpg" 
                alt="Akshat Parashar" 
                className="w-96 h-96 object-cover rounded-full mx-auto border-4 border-purple-500/30 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20"></div>
            </div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-pink-500/20 rounded-full animate-ping animation-delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Content Creation */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Film className="text-purple-400" size={24} />
                Content Creation
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <Youtube size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">YouTube</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Instagram size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">Instagram</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Mic size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">Podcasting</span>
                </div>
              </div>
            </div>

            {/* Programming */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="text-blue-400" size={24} />
                Programming
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C++</span>
                  </div>
                  <span className="text-gray-300">C++</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">JS</span>
                  </div>
                  <span className="text-gray-300">JavaScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Brain size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">LeetCode</span>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Trophy className="text-yellow-400" size={24} />
                Performance
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">🎭</span>
                  </div>
                  <span className="text-gray-300">Dramatics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">🎤</span>
                  </div>
                  <span className="text-gray-300">Public Speaking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">🎵</span>
                  </div>
                  <span className="text-gray-300">Group Singing</span>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="text-green-400" size={24} />
                Leadership
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">👑</span>
                  </div>
                  <span className="text-gray-300">Cabinet Vice Captain</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">🏆</span>
                  </div>
                  <span className="text-gray-300">Competition Winner</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">🎯</span>
                  </div>
                  <span className="text-gray-300">Team Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* College Paao */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center p-4">
                <img 
                  src="/image.png" 
                  alt="College Paao Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">College Paao</h3>
                <p className="text-gray-400 mb-4">
                  An educational platform designed to help students navigate their college journey with resources, 
                  guidance, and community support.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Education</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Platform</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://collegepaao.netlify.app/"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit Platform
                  </a>
                </div>
              </div>
            </div>

            {/* Be Delusional Podcast */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <img 
                  src="/WhatsApp Image 2025-06-23 at 15.39.06_cd133578.jpg" 
                  alt="Be Delusional Podcast Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Be Delusional Podcast</h3>
                <p className="text-gray-400 mb-4">
                  A popular podcast show where I host engaging conversations and discussions. 
                  Running since March 2023 with growing audience engagement.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Podcasting</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Content Creation</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://www.youtube.com/playlist?list=PLi52nqmVi6up8BqNGPZ2ZPElwQ_lPifjJ"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Play size={16} />
                    Watch Episodes
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Short Films */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center">
                <Film size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">90-Second Short Films</h3>
                <p className="text-gray-400 mb-4">
                  Creating engaging 90-second short films on Instagram with different emotions and storytelling techniques.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Filmmaking</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Storytelling</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://www.instagram.com/haii_akshat/"
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Films
                  </a>
                </div>
              </div>
            </div>

            {/* Data Structures Project */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                <Database size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Data Structures & Algorithms</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive study and implementation of various data structures and algorithms in C++.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">C++</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Algorithms</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://leetcode.com/u/user3012lg/"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    LeetCode Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Education</h2>
          
          <div className="space-y-8">
            {/* DCRUST */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Computer Science & Engineering Department DCRUST Murthal</h3>
                  <p className="text-purple-400 font-medium">B.Tech, Computer Science Engineering</p>
                </div>
                <div className="text-gray-400">2022 - 2026</div>
              </div>
              <p className="text-gray-300 mb-4">
                Currently pursuing Bachelor of Technology in Computer Science Engineering. Active participant in various 
                inter-college and intra-college events including drama fests at IIT Mandi, IIT Roorkee, and IIT Kanpur.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">
                  <strong className="text-purple-400">Achievements:</strong>
                </p>
                <ul className="text-sm text-gray-400 space-y-1 ml-4">
                  <li>• 2nd Position in Annual Youth Fest "RHYTHM'23"</li>
                  <li>• 1st Position in "RHYTHM'24"</li>
                  <li>• Participated in drama fests at IIT Mandi, IIT Roorkee, IIT Delhi, IIT Kanpur, PU Chandigarh, DTU, NSUT</li>
                  <li>• Won 1st Prize in Dramatics Street Play</li>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">C++</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Public Speaking</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Leadership</span>
              </div>
            </div>

            {/* School */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">St Thomas Senior Secondary School Faridabad</h3>
                  <p className="text-purple-400 font-medium">Senior Secondary Education</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Completed senior secondary education with active participation in various extracurricular activities 
                and leadership roles.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">
                  <strong className="text-purple-400">Achievements:</strong>
                </p>
                <ul className="text-sm text-gray-400 space-y-1 ml-4">
                  <li>• Cabinet Vice Captain of School House</li>
                  <li>• First Prize at State Level in Patriotic Group Singing (Haryana, 2022)</li>
                  <li>• Performed in various interschool skit competitions</li>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Leadership</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Group Singing</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/akss23" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/akshat-parashar-9982b4256/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/user3012lg/" className="text-gray-400 hover:text-white transition-colors">
              <Brain size={24} />
            </a>
            <a href="https://www.youtube.com/playlist?list=PLi52nqmVi6up8BqNGPZ2ZPElwQ_lPifjJ" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
            <a href="https://www.instagram.com/haii_akshat/" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Akshat Parashar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;