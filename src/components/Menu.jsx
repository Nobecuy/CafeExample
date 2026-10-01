import { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten all items for search and filtering
  const allItems = useMemo(() => {
    return menuData.reduce((acc, category) => {
      return [...acc, ...category.items.map(item => ({ ...item, category: category.category }))];
    }, []);
  }, []);

  // Filter items based on active category and search term
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allItems, activeCategory, searchTerm]);

  return (
    <section className="bg-cream animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-amber-950">
            Our Menu
          </h2>
          <p className="mt-4 text-stone-700 max-w-xl mx-auto">
            Carefully crafted beverages and pastries made with premium ingredients.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-4">
          <div className="flex items-center space-x-3 pb-2">
            <Search className="h-4 w-4 text-stone-700" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-muted/20 rounded-xl px-4 py-2 bg-transparent text-stone-700 focus:outline-none focus:ring-2 focus:ring-warm-amber sm:w-64"
            />
          </div>
          <div className="flex overflow-x-auto pb-2 no-scrollbar md:flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === 'All' ? 'bg-amber-800 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-amber-100/50 border border-amber-200/60'}
              `}
            >
              All
            </button>
            {menuData.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${activeCategory === category.category ? 'bg-amber-800 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-amber-100/50 border border-amber-200/60'}
                `}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-in">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-espresso">{item.name}</h3>
                  <span className="text-amber-800 font-bold text-lg">
                    {item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                  </span>
                </div>
                <p className="text-stone-700 text-sm line-clamp-2 mb-3">{item.description}</p>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {/* Optional: Add a sparkle for favorite or recommended */}
                {item.tags.includes('Recommended') && (
                  <div className="mt-2 flex items-center space-x-1 text-sm">
                    <Sparkles className="h-3 w-3 text-warm-amber" />
                    <span className="text-warm-amber">Recommended</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-stone-700">No menu items match your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;