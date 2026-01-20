const PhotoFrame = ({ src, alt = "Momento especial" }) => {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <div className="border-2 border-boda-terracota p-2 rounded-2xl shadow-lg bg-white rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="overflow-hidden rounded-xl aspect-[4/3] md:aspect-video flex items-center justify-center bg-gray-100">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover"
            onError={(e) => e.target.src = "https://via.placeholder.com/800x600?text=Tu+Foto+Aquí"} 
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoFrame;