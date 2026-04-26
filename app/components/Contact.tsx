import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Contact({ handleSubmit }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="heading-font text-5xl font-bold mb-6">Let's Talk Food</h2>
          <p className="text-zinc-400 max-w-md">
            Have a favorite spot in Periyakulam or a must-try dish we missed? Drop us a message.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex gap-5">
              <Mail className="text-emerald-400 mt-1" size={28} />
              <div>
                <div className="font-medium">hello@periyaflavours.in</div>
                <div className="text-xs text-zinc-500">We reply within hours</div>
              </div>
            </div>
            <div className="flex gap-5">
              <Phone className="text-emerald-400 mt-1" size={28} />
              <div>
                <div className="font-medium">+91 98765 43210</div>
                <div className="text-xs text-zinc-500">Mon-Sun, 9 AM - 9 PM</div>
              </div>
            </div>
            <div className="flex gap-5">
              <MapPin className="text-emerald-400 mt-1" size={28} />
              <div>
                <div className="font-medium">Periyakulam, Theni District</div>
                <div className="text-xs text-zinc-500">Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 text-zinc-400">Your Name</label>
              <input type="text" className="w-full bg-zinc-950 border border-zinc-700 focus:border-emerald-400 rounded-2xl px-5 py-4 outline-none transition-colors" placeholder="Santo" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2 text-zinc-400">Email</label>
                <input type="email" className="w-full bg-zinc-950 border border-zinc-700 focus:border-emerald-400 rounded-2xl px-5 py-4 outline-none transition-colors" placeholder="you@email.com" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2 text-zinc-400">Phone</label>
                <input type="tel" className="w-full bg-zinc-950 border border-zinc-700 focus:border-emerald-400 rounded-2xl px-5 py-4 outline-none transition-colors" placeholder="+91" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 text-zinc-400">Message / Recommendation</label>
              <textarea rows={5} className="w-full bg-zinc-950 border border-zinc-700 focus:border-emerald-400 rounded-3xl px-5 py-4 outline-none resize-none transition-colors" placeholder="I loved the mutton biryani at Prince Biryani..." required />
            </div>
            <button type="submit" className="w-full py-5 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-semibold rounded-3xl transition-all active:scale-[0.985]">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}