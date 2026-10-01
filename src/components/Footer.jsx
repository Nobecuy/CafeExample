import { useEffect, useState } from 'react';
import { Camera, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getViews() {
      try {
        const res = await fetch('/api/views');
        if (!res.ok) throw new Error('API route not active in local dev');

        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await res.json();
          setVisitorCount(data.views || data.count || 0);
        } else {
          setVisitorCount(0);
        }
      } catch (err) {
        console.log('Visitor counter (Vercel Serverless Function) active on production/Vercel deployment.');
        setVisitorCount(0);
      }
    }

    getViews();
  }, []);

  return (
    <footer className="bg-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-cream">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">Kroma Coffee & Eatery</h3>
            <p className="text-muted/70">
              Specialty coffee and cozy ambiance since 2023.
            </p>
          </div>
          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-1">
              <a href="#home" className="hover:text-warm-amber transition-colors">Home</a>
              <a href="#menu" className="hover:text-warm-amber transition-colors">Menu</a>
              <a href="#ambience" className="hover:text-warm-amber transition-colors">Ambience</a>
              <a href="#location" className="hover:text-warm-amber transition-colors">Location</a>
            </nav>
          </div>
          {/* Social Media */}
          <div className="space-y-2">
            <h3 className="font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/kromacoffee"
                className="hover:text-warm-amber transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@kromacoffee"
                className="hover:text-warm-amber transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Visitor Counter */}
          <div className="space-y-2">
            <h3 className="font-semibold mb-4">Visitor Counter</h3>
            <div className="flex items-center space-x-3">
              <div className="bg-warm-amber/20 rounded-xl px-3 py-1 text-sm">
                {loading ? 'Loading...' : `${visitorCount}`}
              </div>
              <span className="text-muted/70 text-sm">visitors today</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-muted/20 text-center text-sm text-muted/60">
          © {new Date().getFullYear()} Kroma Coffee & Eatery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;