/* src/components/GiftSection.jsx */
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { HeartHandshake } from 'lucide-react';

const GiftSection = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center flex flex-col items-center">
      {/* Ícono de regalo para dar simetría con el Dress Code */}
      <HeartHandshake size={44} strokeWidth={1} className="text-boda-terracota" />

      <h3 className="font-serif text-2xl mb-2 text-boda-terracota">Regalos</h3>
      <p className="max-w-xs mx-auto text-sm mb-6 text-boda-texto">
        Tu presencia es nuestro mejor regalo, pero si deseas realizarnos un presente, puedes hacerlo aquí:
      </p>

      <PrimaryButton 
        text={show ? 'OCULTAR DATOS' : 'VER DATOS BANCARIOS'} 
        onClick={() => setShow(!show)} 
        variant="terracota"
      />

      {show && (
        <div className="mt-6 p-6 bg-white rounded-2xl shadow-inner border-2 border-dashed border-boda-crema w-full max-w-sm animate-fade-in">
          <p className="text-[10px] font-bold mb-1 uppercase tracking-widest text-boda-terracota">CBU:</p>
          <p className="text-boda-texto mb-4 break-all font-mono text-sm">0000003100012345678901</p>
          
          <p className="text-[10px] font-bold mb-1 uppercase tracking-widest text-boda-terracota">Alias:</p>
          <p className="text-boda-texto font-mono text-sm">pablo.y.rocio.2026</p>
        </div>
      )}
    </div>
  );
};

export default GiftSection;