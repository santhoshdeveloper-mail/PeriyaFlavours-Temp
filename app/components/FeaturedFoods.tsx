'use client';

import { ArrowRight, Star } from 'lucide-react';

const foods = [
  {
    name: "Chicken Biryani",
    subtitle: "Dum style • Aromatic",
    price: "₹199",
    rating: "4.8",
    desc: "Tender chicken pieces layered with fragrant basmati rice, spices and slow-cooked to perfection.",
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2070&auto=format&fit=crop",
    tags: ["Non-Veg", "Biryani"]
  },
  {
    name: "Mutton Biryani",
    subtitle: "Seeraga Samba",
    price: "₹280",
    rating: "4.9",
    desc: "Succulent mutton cooked with premium spices and traditional Tamil Nadu techniques.",
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop",
    tags: ["Non-Veg", "Signature"]
  },
  {
    name: "Kothu Parotta",
    subtitle: "With salna",
    price: "₹120",
    rating: "4.7",
    desc: "Flaky layered parotta minced with spices, egg and rich salna gravy.",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2070&auto=format&fit=crop",
    tags: ["Street Favourite"]
  },
  {
    name: "Masala Dosa",
    subtitle: "Crispy & Golden",
    price: "₹85",
    rating: "4.6",
    desc: "Thin crispy dosa filled with spiced potato masala, served with sambar & chutneys.",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2070&auto=format&fit=crop",
    tags: ["Veg"]
  },
  {
    name: "Grilled Chicken",
    subtitle: "Chettinad Style",
    price: "₹220",
    rating: "4.8",
    desc: "Juicy chicken marinated in Chettinad spices and grilled to smoky perfection.",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae784?q=80&w=2070&auto=format&fit=crop",
    tags: ["Non-Veg"]
  },
  {
    name: "Soft Idli",
    subtitle: "With sambar",
    price: "₹60",
    rating: "4.5",
    desc: "Fluffy steamed idlis served with coconut chutney and hot sambar.",
    img: "https://images.unsplash.com/photo-1626509867565-1b5f0b1e2e5f?q=80&w=2070&auto=format&fit=crop",
    tags: ["Veg", "Breakfast"]
  },
];

export default function FeaturedFoods({ smoothScroll }: { smoothScroll: (id: string) => void }) {
  return (
    <section id="featured" className="py-24 bg-zinc-900">
      {/* ... rest of the component (same as before) ... */}
      {/* Paste the full JSX from your previous FeaturedFoods section here */}
    </section>
  );
}