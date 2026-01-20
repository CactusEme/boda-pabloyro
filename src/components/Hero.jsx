import { useState, useEffect } from 'react';
import { Truck

 } from 'lucide-react';
const Hero = () => {
  const slides = [
    { url: '/photo_1.jpeg', text: 'Nuestro viaje comienza' },
    { url: '/photo_2.jpeg', text: 'Unidos por el amor' },
    { url: '/photo_3.png', text: '¡Acompáñanos a celebrar!' }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden flex items-center justify-center">
      {/* Imágenes del Carrusel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" /> {/* Capa oscura para leer texto */}
          <img src={slide.url} alt="Boda" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Contenido Superior */}
      <div className="relative z-20 text-center text-white px-4 animate-fade-in">
        <p className="uppercase tracking-[4px] mb-4 text font-semibold text-boda-beige">¡Nos Casamos!</p>
        <h1 className="text-5xl md:text-7xl font-serif mb-4">Pablo & Rocio</h1>
        <Truck size={48} strokeWidth={1} className="mx-auto mb-4 animate-bounce text-boda-beige" />
        <p className="uppercase tracking-[3px] text font-medium text-boda-beige mb-6">15 de Febrero de 2026</p>
        <p className="italic text-xl font-serif text-boda-beige/90">"{slides[current].text}"</p>
      </div>

      {/* Indicadores de bolitas */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-4' : 'bg-white/50'}`} 
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;