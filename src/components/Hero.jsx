import { ChevronRight, Send } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-cream animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-16">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-950">
              Kroma <span className="text-amber-800">Coffee & Eatery</span>
            </h1>
            <p className="mt-4 text-stone-700 max-w-xl mx-auto text-lg">
              Experience the perfect blend of specialty coffee and cozy ambiance in the heart of the city.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#menu"
                className="flex-1 sm:flex-none bg-amber-800 hover:bg-amber-900 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-amber-900/20 transition-all transform hover:-translate-y-0.5"
              >
                Lihat Menu <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="flex-1 sm:flex-none bg-white hover:bg-amber-50 text-amber-950 border border-amber-200 font-medium px-6 py-3 rounded-xl transition-all transform hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pesan via WhatsApp <Send className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
              alt="Kroma Coffee & Eatery Interior"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop'; // fallback to first menu image
              }}
              className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover rounded-2xl lg:rounded-3xl shadow-xl border border-amber-900/5"
            />
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-warm-amber/5"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-espresso/5"></div>
      </div>
    </section>
  );
};

export default Hero;