import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventCard from './components/EventCard';
import PhotoFrame from './components/PhotoFrame';
import GiftSection from './components/GiftSection';
import PhotoAlbum from './components/PhotoAlbum';
import PrimaryButton from './components/PrimaryButton';
import MusicPlayer from './components/MusicPlayer';
import DressCode from './components/DressCode';
import { BookOpenText, Wine } from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <main className="bg-boda-oliva text-boda-texto font-sans overflow-x-hidden transition-colors duration-500">
      
      <MusicPlayer />
      <ScrollReveal>
      <Hero />
      </ScrollReveal>

      {/* Sección Contador - Diseño Elegante y Centrado */}
      <ScrollReveal>
      <section className="bg-white/40 backdrop-blur-sm py-16 border-y border-boda-oliva-oscuro/10">
        <h3 className="text-center text-boda-oliva-oscuro uppercase tracking-[4px] text-xs mb-4 font-semibold">
          Faltan tan solo...
        </h3>
        {/* FECHA AJUSTADA: 15 de Febrero de 2026 */}
        <Countdown targetDate="2026-02-15T16:00:00" />
      </section>
      </ScrollReveal>

      {/* Imagen después de la cuenta regresiva */}
      <ScrollReveal>
      <PhotoFrame images={["/photo_5.jpeg"]} alt="Nosotros" />
      </ScrollReveal>
      
      {/* Mensaje de bienvenida */}
      <ScrollReveal>
      <section className="py-16 text-center px-6">
        <h2 className="font-serif text-4xl mb-6 text-boda-oliva-oscuro">¡Estás invitado!</h2>
        <p className="max-w-2xl mx-auto leading-relaxed text-lg opacity-90">
          Hay momentos en la vida que son únicos, y compartirlos con las personas que más queremos los hace inolvidables. Gracias por ser parte de nuestra historia.
        </p>
      </section>
      </ScrollReveal>

      {/* Detalles de los Eventos - Iconos Minimalistas */}
      <ScrollReveal>
      <section className="py-20 bg-boda-crema px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <EventCard 
            title="Civil y Discurso"
            time="16:00 hs"
            location="Salón del Reino"
            address="Las Golondrinas 1738 - Barrio Bancario"
            mapLink="https://maps.app.goo.gl/TYMZQhhha1KsGyTQ8?g_st=aw" 
            icon={<BookOpenText size={44} strokeWidth={1} className="text-boda-oliva-oscuro" />}
          />
          <EventCard 
            title="Celebración"
            time="18:00 hs a 02:00 hs"
            location="Salón de Fiestas Turquesa"
            address="Av. Suiza y Punta del Este - Barrio Morosini"
            mapLink="https://maps.app.goo.gl/7EBbbiJHgNZ9z6HK8?g_st=aw"
            icon={<Wine size={44} strokeWidth={1} className="text-boda-oliva-oscuro" />}
          />
        </div>
      </section>
      </ScrollReveal>

      {/* Sección de Detalles: Vestimenta y Regalos */}
      <ScrollReveal>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <PhotoFrame images={["/photo_4.jpeg", "/photo_6.jpeg"]} alt="Nosotros" />
          
          <div className="grid md:grid-cols-2 gap-12 items-start bg-white/50 backdrop-blur-md rounded-[50px] p-10 md:p-16 border border-white mt-12 shadow-sm">
            <DressCode />
            <div className="border-t md:border-t-0 md:border-l border-boda-oliva-oscuro/10 pt-10 md:pt-0 md:pl-10">
              <GiftSection />
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Sección de Álbum */}
      <ScrollReveal>
      <section className="py-24 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <PhotoFrame images={["/photo_album_1.jpeg", "/photo_album_2.jpeg", "/photo_album_3.jpeg", "/photo_album_4.jpeg"]} alt="Momentos divertidos" />
          <div className="bg-white rounded-[50px] p-16 shadow-sm border border-boda-verde/20 mt-12">
            <PhotoAlbum />
          </div>
        </div>
      </section>
      </ScrollReveal>
      
      {/* Sección de Confirmación Uniforme */}
      <ScrollReveal>
      <section className="py-24 bg-white text-center px-6 border-t border-boda-oliva-oscuro/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-5xl mb-8 text-boda-oliva-oscuro">Confirmación</h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-xl leading-relaxed">
              Es muy importante que confirmes tu asistencia, puedes hacerlo hasta el <span className="font-bold border-b-2 border-boda-verde/30 text-boda-oliva-oscuro">31 de Enero</span>.
            </p>
            <p className="text-sm text-boda-texto/70 italic max-w-md mx-auto">
              En caso de no recibir confirmación hasta esa fecha, entenderemos que no podrás acompañarnos.
            </p>
          </div>
          
          <PrimaryButton 
            text="CONFIRMAR POR WHATSAPP"
            href="https://wa.me/5493757649642?text=¡Hola! Confirmo mi asistencia a la boda."
            variant="verde"
          />

          <div className="mt-16 p-10 bg-boda-oliva/10 rounded-[40px] border border-dashed border-boda-oliva-oscuro/20">
            <p className="text leading-relaxed italic text-boda-texto/80 font-serif">
              "Para nosotros este día es muy especial y su organización también, te agradeceremos que puedas cumplir con tu asistencia si nos diste tu confirmación."
            </p>
          </div>
          <div className="mt-10 animate-fade-in-up uppercase tracking-[6px] mb-4 text font-semibold text-boda-oliva">
            ¡Los esperamos!
          </div>
        </div>
      </section>
      </ScrollReveal>

      <footer className="py-12 text-center text-[10px] tracking-[4px] opacity-40 text-boda-oliva-oscuro uppercase">
        HECHO CON AMOR • 2026
      </footer>
    </main>
  );
}

export default App;