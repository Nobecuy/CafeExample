import { Wifi, ExternalLink, Send } from 'lucide-react';

const Ambience = () => {
  const ambienceImages = [
    {
      src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop',
      alt: 'Indoor seating area with warm lighting',
      description: 'Cozy indoor seating with warm lighting for a relaxing atmosphere'
    },
    {
      src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop',
      alt: 'Outdoor garden seating',
      description: 'Fresh outdoor garden seating area surrounded by greenery'
    },
    {
      src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
      alt: 'Cozy corner with bookshelf',
      description: 'Quiet corner with bookshelf for reading and contemplation'
    },
    {
      src: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=800&auto=format&fit=crop',
      alt: 'Workspace with laptop and coffee',
      description: 'Dedicated workspace with ample power outlets and comfortable seating'
    }
  ];

  const amenities = [
    { icon: Wifi, label: 'Free Wi-Fi', description: 'High-speed internet for work or leisure' },
    { icon: Send, label: 'Air Conditioning', description: 'Comfortable indoor temperature' },
    { icon: ExternalLink, label: 'Power Outlets', description: 'Available at every seat' }
  ];

  return (
    <section className="bg-cream animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-espresso sm:text-4xl">
            Café Ambience
          </h2>
          <p className="mt-4 text-stone-700 max-w-xl mx-auto">
            Enjoy our thoughtfully designed spaces perfect for relaxation, work, or social gatherings.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ambienceImages.map((image, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-0.5">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop";
                }}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="font-semibold text-xl mb-2">{image.alt}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities List */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="bg-amber-100 text-amber-800 p-3 rounded-xl flex-shrink-0">
                  <amenity.icon className="w-5 h-5" />
                  <span className="sr-only">{amenity.label} icon</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-espresso">{amenity.label}</h3>
                <p className="text-stone-700 text-sm">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambience;