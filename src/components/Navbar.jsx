import { useState, useEffect } from 'react';
import { Coffee, MapPin, Menu, Phone, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      // Assuming WIB is UTC+7
      const now = new Date();
      const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' };
      const timeString = now.toLocaleTimeString('en-US', options);
      const [hours, minutes] = timeString.split(':').map(Number);
      const totalMinutes = hours * 60 + minutes;

      // Open from 08:00 (480 minutes) to 22:00 (1320 minutes)
      setIsOpen(totalMinutes >= 480 && totalMinutes < 1320);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-amber-900/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Coffee className="w-5 h-5 text-amber-800" />
              <span className="text-xl font-bold text-espresso whitespace-nowrap">Kroma Coffee & Eatery</span>
            </div>
            <div className="hidden md:flex">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-sm font-medium text-espresso hover:text-amber-800 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#menu"
                  className="text-sm font-medium text-espresso hover:text-amber-800 transition-colors"
                >
                  Menu
                </a>
                <a
                  href="#ambience"
                  className="text-sm font-medium text-espresso hover:text-amber-800 transition-colors"
                >
                  Ambience
                </a>
                <a
                  href="#location"
                  className="text-sm font-medium text-espresso hover:text-amber-800 transition-colors"
                >
                  Location
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              className="rounded-md p-2 text-espresso hover:text-warm-amber"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-2 text-sm bg-amber-100 text-amber-900 border border-amber-200 rounded-full px-3 py-1">
              {isOpen ? (
                <>
                  <Coffee className="h-4 w-4" />
                  <span>Open</span>
                </>
              ) : (
                <>
                  <X className="h-4 w-4" />
                  <span>Closed</span>
                </>
              )}
            </div>
            <div className="ml-4 flex items-center space-x-2">
              <button
                className="rounded-md p-2 text-espresso hover:text-warm-amber"
                aria-label="Location"
              >
                <MapPin className="h-5 w-5" />
              </button>
              <button
                className="rounded-md p-2 text-espresso hover:text-warm-amber"
                aria-label="Contact"
              >
                <Phone className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="block px-4 py-2 rounded-md text-sm font-medium text-espresso hover:bg-amber-50"
              >
                Home
              </a>
              <a
                href="#menu"
                className="block px-4 py-2 rounded-md text-sm font-medium text-espresso hover:bg-amber-50"
              >
                Menu
              </a>
              <a
                href="#ambience"
                className="block px-4 py-2 rounded-md text-sm font-medium text-espresso hover:bg-amber-50"
              >
                Ambience
              </a>
              <a
                href="#location"
                className="block px-4 py-2 rounded-md text-sm font-medium text-espresso hover:bg-amber-50"
              >
                Location
              </a>
            </div>
            <div className="flex flex-col space-y-3 mt-4">
              <a
                href="https://wa.me/6281234567890"
                className="block w-full text-center bg-amber-800 hover:bg-amber-900 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-amber-900/20 transition-all transform hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;