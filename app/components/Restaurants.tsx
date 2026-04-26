import { Star, MapPin } from 'lucide-react';

const restaurants = [
  {
    name: 'Hotel Saravana Bhavan',
    rating: 4.5,
    location: 'Periyakulam Main Road',
    tags: ['Vegetarian', 'South Indian', 'Tiffin'],
    popular: 'Ghee Roast Dosa & Filter Coffee',
    img: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=200&h=200&fit=crop',
  },
  {
    name: 'Al-Madinah Biryani House',
    rating: 4.7,
    location: 'Theni Road, Periyakulam',
    tags: ['Biryani', 'Non-Veg', 'Halal'],
    popular: 'Mutton Biryani & Chicken 65',
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop',
  },
  {
    name: 'Murugan Idli Shop',
    rating: 4.3,
    location: 'Bus Stand Area, Periyakulam',
    tags: ['Vegetarian', 'Breakfast', 'Tiffin'],
    popular: 'Soft Idli & Sambar',
    img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&h=200&fit=crop',
  },
  {
    name: 'Parotha Junction',
    rating: 4.4,
    location: 'Bodinayakanur Bypass, Periyakulam',
    tags: ['Parotta', 'Non-Veg', 'Late Night'],
    popular: 'Coin Parotta & Salna Curry',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop',
  },
  {
    name: 'Sri Lakshmi Mess',
    rating: 4.2,
    location: 'Market Street, Periyakulam',
    tags: ['Meals', 'Vegetarian', 'Budget'],
    popular: 'Full Meals & Rasam Rice',
    img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=200&fit=crop',
  },
  {
    name: 'Spice Garden Restaurant',
    rating: 4.6,
    location: 'Kodaikanal Road, Periyakulam',
    tags: ['Family Dining', 'Multi-Cuisine', 'A/C'],
    popular: 'Pepper Chicken & Naan Combo',
    img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=200&h=200&fit=crop',
  },
];

export default function Restaurants() {
  return (
    <section id="explore" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase text-emerald-400 tracking-widest text-sm">WHERE TO EAT</p>
          <h2 className="heading-font text-5xl font-bold mt-3">Top Restaurants in Periyakulam</h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto">Authentic spots loved by locals for their biryanis, parottas and more</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="glass rounded-3xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all group">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-zinc-800 rounded-2xl flex-shrink-0 overflow-hidden">
                  <img src={restaurant.img} alt={restaurant.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-xl">{restaurant.name}</h3>
                    <div className="flex items-center text-amber-400 text-sm gap-1">
                      <Star size={16} fill="currentColor" /> {restaurant.rating}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm flex items-center gap-1 mt-1">
                    <MapPin size={14} /> {restaurant.location}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {restaurant.tags.map((tag, i) => (
                      <span key={i} className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-2xl text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6 text-sm text-zinc-300">
                    Popular: {restaurant.popular}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert('Full restaurant list with filters coming soon!')}
            className="px-8 py-4 border border-white/30 hover:border-white text-sm font-medium rounded-3xl transition-all"
          >
            Browse All 25+ Restaurants →
          </button>
        </div>
      </div>
    </section>
  );
}