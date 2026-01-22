import PrimaryButton from './PrimaryButton';
import { Camera } from 'lucide-react';

const PhotoAlbum = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icono de cámara/fotos */}
      <div className="text-boda-verde mb-6">
        <Camera size={56} strokeWidth={1} className="text-boda-verde" />
      </div>

      <h3 className="font-serif text-3xl mb-4 text-boda-verde">Álbum de Fotos Compartido</h3>
      
      <p className="mb-8 italic text-boda-texto max-w-md">
        "Te invitamos a compartir en este álbum las fotos de recuerdo que desees y también aquellas que tomes durante nuestra boda."
      </p>
      
      <PrimaryButton 
        text="SUBIR MIS FOTOS AHORA"
        href="https://photos.app.goo.gl/AEG6CTnwjtx4MWrw6" // Reemplaza con tu enlace real
        variant="verde"
      />
      
      <p className="mt-4 text-[10px] text-dark-gray-400 uppercase tracking-widest">
        Es fácil y no necesitas instalar nada.
      </p>
    </div>
  );
};

export default PhotoAlbum;