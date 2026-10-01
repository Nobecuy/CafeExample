import { Clock, MapPin, Phone, Calendar, Send } from 'lucide-react';

const Location = () => {
  const locationImages = [
    {
      src: 'https://images.unsplash.com/photo-1514933651103-005eec06c54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzY1Nzl8MHwxfHNlYXJjaHwxfHxjb2ZmZWV8fGVufDB8fHx8MTYyNjM0NTIwMg&ixlib=rb-1.2.1&q=80&w=800',
      alt: 'Krona Coffee & Eatery Storefront',
      description: 'Our welcoming storefront located in the heart of the city'
    },
    {
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzY1Nzl8MHwxfHNlYXJjaHwxfHxjb2ZmZWV8fGVufDB8fHx8MTYyNjM0NTIwMw&ixlib=rb-1.2.1&q=80&w=800',
      alt: 'Cozy Indoor Seating',
      description: 'Comfortable indoor seating area with warm lighting'
    },
    {
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzY1Nzl8MHwxfHNlYXJjaHwxfHxjb2ZmZWV8fGVufDB8fHx8MTYyNjM0NTIwNA&ixlib=rb-1.2.1&q=80&w=800',
      alt: 'Outdoor Garden Area',
      description: 'Relaxing outdoor garden space surrounded by greenery'
    }
  ];

  const operatingHours = [
    { day: 'Senin - Jumat', hours: '08:00 - 22:00', icon: Clock },
    { day: 'Sabtu', hours: '08:00 - 23:00', icon: Clock },
    { day: 'Minggu', hours: '08:00 - 22:00', icon: Clock }
  ];

  return (
    <section className="bg-cream animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Location Photos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-espresso mb-6 text-center">
            Lokasi Kami
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locationImages.map((image, index) => (
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-espresso">Alamat</h3>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 text-amber-800 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                  <span className="sr-only">Alamat icon</span>
                </div>
                <p className="text-stone-700">
                  Jalan Contoh No. 123, Kota contoh, Indonesia 12345
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-espresso">Jam Operasional</h3>
              <div className="space-y-2">
                {operatingHours.map((hour, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 text-amber-800 p-2 rounded-xl flex-shrink-0">
                        <Clock className="w-5 h-5 text-amber-800" />
                        <span className="sr-only">Jam Operasional icon</span>
                      </div>
                      <span className="font-medium">{hour.day}</span>
                    </div>
                    <span>{hour.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-espresso">Kontak</h3>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 text-amber-800 p-3 rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5" />
                  <span className="sr-only">Kontak icon</span>
                </div>
                <p className="text-stone-700">+62 812-3456-7890</p>
              </div>
            </div>
          </div>

          {/* Right: Map and Action Buttons */}
          <div className="space-y-6">
            {/* Map - using real Google Maps embed */}
            <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-inner border border-amber-900/10">
              <iframe
                title="Kroma Coffee Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.937267182283!2d110.3638!3d-7.7956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDcnNDQuMiJTIDExMMKwMjE'4OS43IkU!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="https://maps.google.com/?q=Jalan+Contoh+No.+123,+Kota+contoh,+Indonesia"
                className="flex-1 bg-amber-800 text-white px-6 py-3 rounded-xl font-medium text-center hover:bg-amber-900 transition-colors transform hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Lihat di Google Maps
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20di%20Warm%20Caf%C3%A9."
                className="flex-1 border-2 border-warm-amber text-warm-amber px-6 py-3 rounded-xl font-medium text-center hover:bg-warm-amber/10 transition-colors transform hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="mr-2 h-4 w-4" />
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;