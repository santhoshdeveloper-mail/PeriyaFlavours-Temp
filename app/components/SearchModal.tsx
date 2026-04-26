interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-start justify-center pt-32 px-4">
      <div className="glass w-full max-w-lg mx-auto rounded-3xl p-8">
        <div className="flex justify-between mb-6 items-center">
          <input 
            type="text" 
            placeholder="Search biryani, parotta, restaurants..." 
            className="flex-1 bg-transparent outline-none text-lg placeholder-zinc-400" 
            autoFocus 
          />
          <button onClick={onClose} className="text-3xl text-zinc-400 hover:text-white">✕</button>
        </div>
        <p className="text-xs text-zinc-400">Try: Chicken Biryani, Prince Biryani, Dosa</p>
      </div>
    </div>
  );
}