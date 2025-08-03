'use client';

interface HeroSectionProps {
  handleCallClick: () => void;
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ handleCallClick, scrollToSection }: HeroSectionProps) {
  return (
    <header
      id="home"
      className="relative pt-2 md:pt-16  min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
      role="banner"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>

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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="relative z-10">Consult With Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Our Services</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
