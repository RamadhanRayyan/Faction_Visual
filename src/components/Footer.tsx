export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold text-white">Faction Visual</span>
          </div>

          <div className="flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-white transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('terms')}
              className="hover:text-white transition-colors duration-300"
            >
              Terms
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Faction Visual. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
