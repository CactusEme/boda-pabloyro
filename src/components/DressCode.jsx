import { Sparkles } from 'lucide-react';

const DressCode = () => {
  return (
    <div className="text-center p-6 flex flex-col items-center">
      <div className="text-boda-terracota mb-4">
        <Sparkles size={44} strokeWidth={1} className="text-boda-terracota" />
      </div>
      <h3 className="font-serif text-2xl mb-2 text-boda-terracota">Dress Code</h3>
      <p className="font-bold uppercase tracking-widest text-sm mb-2">Elegante</p>
    </div>
  );
};

export default DressCode;