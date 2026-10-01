import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Ambience from './components/Ambience';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 relative overflow-x-hidden">
      {/* Ambient Soft Blur Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed top-[40%] right-[-10%] w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Navbar/>
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-6">
        <section className="bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-amber-900/10 shadow-sm hover:shadow-md transition-all">
          <Hero/>
        </section>
        <section className="bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-amber-900/10 shadow-sm hover:shadow-md transition-all">
          <Menu/>
        </section>
        <section className="bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-amber-900/10 shadow-sm hover:shadow-md transition-all">
          <Ambience/>
        </section>
        <section className="bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-amber-900/10 shadow-sm hover:shadow-md transition-all">
          <Location/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;