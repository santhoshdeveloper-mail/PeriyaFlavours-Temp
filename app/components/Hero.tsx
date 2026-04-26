import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  smoothScroll: (id: string) => void;
}

export default function Hero({ smoothScroll }: HeroProps) {
  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Content */}
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 text-center z-10 pt-24 pb-28 flex flex-col items-center">

        {/* Location pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 sm:px-5 py-2 rounded-full mb-6 backdrop-blur-md border border-white/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs sm:text-sm font-medium tracking-widest">
            PERIYAKULAM • THENI
          </span>
        </div>

        {/* Heading */}
        <h1 className="heading-font text-5xl sm:text-7xl md:text-8xl font-bold leading-none mb-6 text-white neon-text">
          THE BEST<br />FLAVOURS
        </h1>

        {/* Sub-heading */}
        <p className="text-base sm:text-xl md:text-2xl text-zinc-300 max-w-xl mx-auto mb-10 leading-relaxed px-2">
          From steaming{' '}
          <span className="text-emerald-400 font-medium">Biryani</span> to crispy{' '}
          <span className="text-emerald-400 font-medium">Parotta</span> — Discover
          authentic Tamil Nadu tastes in Periyakulam
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
          <button
            onClick={() => smoothScroll('featured')}
            className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-semibold rounded-2xl text-base sm:text-lg hover:bg-emerald-400 hover:text-white transition-all flex items-center justify-center gap-3 group active:scale-95"
          >
            Discover Dishes
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => smoothScroll('explore')}
            className="w-full sm:w-auto px-8 py-4 border border-white/50 hover:border-emerald-400 hover:text-emerald-400 font-medium rounded-2xl text-base sm:text-lg transition-all active:scale-95"
          >
            Find Restaurants
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-12 flex items-center justify-center gap-8 sm:gap-12 text-center">
          {[
            { value: '25+', label: 'Restaurants' },
            { value: '4.5★', label: 'Avg Rating' },
            { value: '100%', label: 'Local Picks' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-xl sm:text-2xl font-bold text-emerald-400">{value}</p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — properly centered */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
        <p className="text-xs tracking-widest text-zinc-400 uppercase">Scroll to explore</p>
        <button
          onClick={() => smoothScroll('featured')}
          className="animate-bounce text-zinc-400 hover:text-emerald-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}