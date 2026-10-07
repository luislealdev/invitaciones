import PlatformLanding from '@/components/PlatformLanding'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return <>
    <div className="relative min-h-screen w-full bg-[#f1ede4] crumpled-paper-texture overflow-hidden flex items-center justify-center p-4 sm:p-6">
      {/* Paper Crumple & Crease Overlays */}
      <div className="absolute inset-0 paper-wrinkle-overlay opacity-60 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply bg-[radial-gradient(#2d241e_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      {/* Diagonal realistic paper fold shadow creases */}
      <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_0%,rgba(0,0,0,0.06)_45%,rgba(255,255,255,0.25)_48%,transparent_52%),linear-gradient(235deg,transparent_20%,rgba(0,0,0,0.05)_58%,rgba(255,255,255,0.2)_60%,transparent_64%)] pointer-events-none"></div>

      {/* Banderillas superiores que abarcan todo el ancho horizontal detrás de la foto */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen max-w-none flex justify-center pointer-events-none z-0 overflow-hidden">
        <Image
          src="/img/up.png"
          alt="Banderillas de cumpleaños"
          width={1920}
          height={800}
          className="w-full min-w-[650px] sm:min-w-full h-auto object-cover object-top mix-blend-multiply opacity-90"
          priority
        />
      </div>

      {/* Decorative Floating Stars (Máximo 2 de cada una, distribuidas de forma armónica) */}
      
      {/* 1. Star-1 (A) - Arriba a la izquierda flotando cerca de las banderillas */}
      <div className="absolute top-12 left-4 sm:left-14 pointer-events-none z-0 animate-float-slow">
        <Image
          src="/img/star-1.png"
          alt="Star 1"
          width={180}
          height={180}
          className="w-14 sm:w-20 h-auto -rotate-12 drop-shadow-md opacity-95"
        />
      </div>

      {/* 2. Star2 (A) - Arriba a la derecha grande y brillante */}
      <div className="absolute top-16 right-4 sm:right-16 pointer-events-none z-0 animate-float-reverse">
        <Image
          src="/img/star2.png"
          alt="Star 2"
          width={220}
          height={220}
          className="w-20 sm:w-28 h-auto rotate-12 drop-shadow-md opacity-95"
        />
      </div>

      {/* 3. Star4 (B) - Lateral izquierdo a media altura */}
      <div className="absolute top-[48%] -translate-y-1/2 left-3 sm:left-12 pointer-events-none z-0 animate-float-slow">
        <Image
          src="/img/star4.png"
          alt="Star 4"
          width={200}
          height={200}
          className="w-14 sm:w-20 h-auto -rotate-15 drop-shadow-md opacity-90"
        />
      </div>

      {/* 4. Star3 (B) - Lateral derecho flotando junto a los globos */}
      <div className="absolute top-[52%] -translate-y-1/2 right-3 sm:right-12 pointer-events-none z-0 animate-float-reverse">
        <Image
          src="/img/star3.png"
          alt="Star 3"
          width={160}
          height={160}
          className="w-14 sm:w-18 h-auto rotate-15 drop-shadow-sm opacity-90"
        />
      </div>

      {/* 5. Star2 (B) - Abajo a la izquierda enmarcando la fecha */}
      <div className="absolute bottom-24 left-4 sm:left-20 pointer-events-none z-0 animate-float-reverse">
        <Image
          src="/img/star2.png"
          alt="Star 2"
          width={160}
          height={160}
          className="w-12 sm:w-16 h-auto rotate-45 drop-shadow-sm opacity-90"
        />
      </div>

      {/* 6. Star-1 (B) - Abajo a la derecha junto a los botones */}
      <div className="absolute bottom-10 right-4 sm:right-20 pointer-events-none z-0 animate-float-slow">
        <Image
          src="/img/star-1.png"
          alt="Star 1"
          width={200}
          height={200}
          className="w-14 sm:w-20 h-auto rotate-12 drop-shadow-md opacity-95"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md mx-auto">

        {/* Photo + Overlay Balloon Letters Container */}
        <div className="relative w-full max-w-[320px] sm:max-w-[380px] mx-auto flex justify-center items-center">

          {/* 7. Star4 (A) - Asomándose detrás de la foto arriba a la derecha */}
          <div className="absolute -top-6 -right-6 sm:-right-8 pointer-events-none z-0 animate-float-slow">
            <Image
              src="/img/star4.png"
              alt="Star 4"
              width={160}
              height={160}
              className="w-14 sm:w-18 h-auto rotate-12 drop-shadow-sm opacity-90"
            />
          </div>

          {/* 8. Star3 (A) - Asomándose detrás de la foto a la izquierda */}
          <div className="absolute top-1/4 -left-6 sm:-left-8 pointer-events-none z-0 animate-float-reverse">
            <Image
              src="/img/star3.png"
              alt="Star 3"
              width={150}
              height={150}
              className="w-12 sm:w-16 h-auto -rotate-20 drop-shadow-sm opacity-90"
            />
          </div>

          {/* Birthday Girl Photo */}
          <Image
            src="/img/citla.PNG"
            alt="Birthday"
            width={500}
            height={500}
            className="w-full h-auto object-contain drop-shadow-sm relative z-10"
            priority
          />

          {/* Balloon Text Overlay (Positioned right over the bottom edge of the photo) */}
          <div className="absolute bottom-0 translate-y-[40%] sm:translate-y-[45%] inset-x-0 flex justify-center pointer-events-none z-20">
            <Image
              src="/img/birthday.png"
              alt="Balloon Text"
              width={900}
              height={600}
              className="w-[120%] sm:w-[130%] max-w-none h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Event Date & Time */}
        <div className="mt-12 sm:mt-22 text-neutral-800 relative z-10">
          <p className="text-6xl sm:text-8xl font-bold tracking-wide maliatons">24 de Octubre</p>
          <p className="text-2xl sm:text-4xl font-bold text-pink-300">21:30 hs</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 lg:mt-12 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0 relative z-10">
          <Link
            href="#"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-neutral-400 text-neutral-800 text-sm font-semibold hover:bg-black/5 transition shadow-xs text-center"
          >
            Ubicación 📍
          </Link>
          <button className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-bold shadow-md transition transform active:scale-95 cursor-pointer">
            Confirmar asistencia ✨
          </button>
        </div>

      </div>
    </div>
    <main>
    </main>
  </>
}
