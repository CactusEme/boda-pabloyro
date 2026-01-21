import { useState, useEffect } from 'react';
import { Truck, ChevronsDown } from 'lucide-react';
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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* FOTO CON ZOOM LENTO */}
          <img 
            src={slide.url} 
            className="w-full h-full object-cover animate-slow-zoom" 
          />
        </div>
      ))}

      <div className="relative z-20 text-center text-white px-4">
        {/* TEXTO 1: Aparece primero */}
        <p className="animate-fade-in-up uppercase tracking-[6px] mb-4 text-xs font-semibold text-boda-oliva">
          ¡Nos Casamos!
        </p>
        
        {/* TEXTO 2: Aparece un poquito después */}
        <h1 className="animate-fade-in-up [animation-delay:400ms] text-6xl md:text-8xl font-serif mb-6 drop-shadow-lg">
          Pablo & Rocio
        </h1>
        
        {/* Icono del camión y Fecha */}
        <div className="animate-fade-in-up [animation-delay:600ms]">
          <Truck size={48} strokeWidth={1} className="mx-auto mb-4 animate-bounce text-boda-beige" />
          <p className="uppercase tracking-[3px] font-medium text-boda-beige mb-6">15 de Febrero de 2026</p>
        </div>

        {/* TEXTO 3: Frase */}
        <p className="animate-fade-in-up [animation-delay:800ms] italic text-xl font-serif text-boda-beige/90">
          "{slides[current].text}"
        </p>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-50 text-white">
        <ChevronsDown 
          size={40} 
          strokeWidth={1} 
          className="animate-bounce" 
        />
      </div>
    </section>
  );
};

export default Hero;

