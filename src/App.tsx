import { useState, useEffect } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />
      case 'about': return <About />
      case 'contact': return <Contact />
      default: return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DARZEE
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-2xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '🌞' : '🌛'}
              </button>
              <ul className="flex space-x-8">
              <li>
                <button 
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === 'home' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setCurrentPage('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === 'about' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setCurrentPage('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === 'contact' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setCurrentPage('contact')}
                >
                  Contact
                </button>
              </li>
              </ul>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-2xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '🌞' : '🌛'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 mt-1 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 mt-1 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <button
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all ${
                  currentPage === 'home'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => {
                  setCurrentPage('home')
                  setMobileMenuOpen(false)
                }}
              >
                Home
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all ${
                  currentPage === 'about'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => {
                  setCurrentPage('about')
                  setMobileMenuOpen(false)
                }}
              >
                About
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all ${
                  currentPage === 'contact'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => {
                  setCurrentPage('contact')
                  setMobileMenuOpen(false)
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        {currentPage === 'home' ? (
          <>
            <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Junior Frontend Developer</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  Eager to learn and grow while building modern, user-friendly web applications
                </p>
                <button 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => setCurrentPage('about')}
                >
                  Learn More
                </button>
              </div>
            </section>
            
            <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">My Skills</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <div className="text-6xl mb-6">🚀</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Learning React & JS</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Developing skills in React, JavaScript ES6+, and modern frontend frameworks</p>
                  </div>
                  <div className="text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <div className="text-6xl mb-6">🔒</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">CSS & Responsive Design</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Building responsive layouts with CSS3, Tailwind CSS, and mobile-first approach</p>
                  </div>
                  <div className="text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <div className="text-6xl mb-6">💡</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Growing Skills</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Continuously learning Git, best practices, and modern development workflows</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-20 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Ready to bring your ideas to life with clean, modern web development
                </p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => setCurrentPage('contact')}
                >
                  Contact Us
                </button>
              </div>
            </section>
            
            <footer className="bg-black dark:bg-gray-950 text-white py-12 transition-colors duration-300">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-lg">
                  &copy; {new Date().getFullYear()} • Developed by{' '}
                  <a 
                    href="https://iamdarzee.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative inline-block font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group"
                  >
                    DARZEE
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">✨</span>
                  </a>
                </p>
              </div>
            </footer>
          </>
        ) : (
          renderPage()
        )}
      </main>
    </div>
  )
}

export default App
