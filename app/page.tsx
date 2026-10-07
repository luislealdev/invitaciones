'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CalendarDays,
  Clock3,
  MapPin,
  Music2,
  Martini,
  Gift,
  Sparkles,
  Heart,
  PartyPopper,
  X,
  Send,
  ExternalLink,
  CheckCircle2
} from 'lucide-react'

export default function Page() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false)
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [rsvpName, setRsvpName] = useState('')
  const [rsvpPhone, setRsvpPhone] = useState('')
  const [rsvpGuests, setRsvpGuests] = useState('1')
  const [rsvpMessage, setRsvpMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsRsvpOpen(false)
      setIsSubmitted(false)
      setRsvpName('')
      setRsvpPhone('')
      setRsvpMessage('')
    }, 2500)
  }

  return (
    <>
      <div className="relative min-h-screen w-full bg-[#f1ede4] crumpled-paper-texture overflow-hidden flex flex-col items-center justify-start py-8 px-4 sm:px-6">

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
        <div className="absolute top-[40%] -translate-y-1/2 left-3 sm:left-12 pointer-events-none z-0 animate-float-slow">
          <Image
            src="/img/star4.png"
            alt="Star 4"
            width={200}
            height={200}
            className="w-14 sm:w-20 h-auto -rotate-15 drop-shadow-md opacity-90"
          />
        </div>

        {/* 4. Star3 (B) - Lateral derecho flotando junto a los globos */}
        <div className="absolute top-[45%] -translate-y-1/2 right-3 sm:right-12 pointer-events-none z-0 animate-float-reverse">
          <Image
            src="/img/star3.png"
            alt="Star 3"
            width={160}
            height={160}
            className="w-14 sm:w-18 h-auto rotate-15 drop-shadow-sm opacity-90"
          />
        </div>

        {/* 5. Star2 (B) - Abajo a la izquierda enmarcando los detalles */}
        <div className="absolute bottom-44 left-4 sm:left-16 pointer-events-none z-0 animate-float-reverse">
          <Image
            src="/img/star2.png"
            alt="Star 2"
            width={160}
            height={160}
            className="w-12 sm:w-16 h-auto rotate-45 drop-shadow-sm opacity-90"
          />
        </div>

        {/* 6. Star-1 (B) - Abajo a la derecha junto a los botones */}
        <div className="absolute bottom-20 right-4 sm:right-16 pointer-events-none z-0 animate-float-slow">
          <Image
            src="/img/star-1.png"
            alt="Star 1"
            width={200}
            height={200}
            className="w-14 sm:w-20 h-auto rotate-12 drop-shadow-md opacity-95"
          />
        </div>

        {/* Main Content Card Container */}
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md mx-auto pt-6">

          {/* Cute Top Birthday Girl Badge */}
          <div className="mb-3 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-pink-200 text-pink-700 text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>¡Citla cumple 23! 🎀</span>
          </div>

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
          <div className="mt-14 sm:mt-24 text-neutral-800 relative z-10">
            <p className="text-5xl sm:text-7xl font-bold tracking-wide maliatons leading-tight">
              24 de Octubre
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-pink-400 mt-1">
              21:30 hs
            </p>
          </div>

          {/* Event Details Grid Section */}
          <div className="w-full mt-8 space-y-3 relative z-10 text-left">

            {/* Live Norteño Music Card */}
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-pink-200/80 shadow-xs flex items-center gap-3.5 transform hover:scale-[1.01] transition-transform">
              <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center text-xl flex-shrink-0">
                🤠
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black uppercase tracking-wider text-purple-700">
                  Música en Vivo
                </p>
                <p className="text-sm font-bold text-neutral-800">
                  ¡Habrá Grupo Norteño en vivo! 🪗🎺
                </p>
                <p className="text-xs text-neutral-500">
                  Para cantar y bailar
                </p>
              </div>
            </div>

            {/* Drinks Note Card */}
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-pink-200/80 shadow-xs flex items-center gap-3.5 transform hover:scale-[1.01] transition-transform">
              <div className="w-11 h-11 rounded-xl bg-pink-100 border border-pink-200 text-pink-700 flex items-center justify-center text-xl flex-shrink-0">
                🍹
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black uppercase tracking-wider text-pink-600">
                  Bebidas & Brindis
                </p>
                <p className="text-sm font-bold text-neutral-800">
                  Lleven lo que quieran tomar
                </p>
                {/* <p className="text-xs text-neutral-500">
                  Habrá hielos, escarchados y mezcladores 🥂
                </p> */}
              </div>
            </div>

            {/* Location Card */}
            {/* <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-pink-200/80 shadow-xs flex items-start gap-3.5 transform hover:scale-[1.01] transition-transform">
              <div className="w-11 h-11 rounded-xl bg-rose-100 border border-rose-200 text-rose-700 flex items-center justify-center text-xl flex-shrink-0 mt-0.5">
                📍
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black uppercase tracking-wider text-rose-600">
                  Ubicación
                </p>
                <p className="text-sm font-bold text-neutral-800 leading-snug">
                  Priv. Misión de Santa Ana, fracc La Misión.
                </p>
                <button
                  type="button"
                  onClick={() => setIsMapOpen(true)}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-bold border border-pink-200 transition active:scale-95 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-pink-600" />
                  <span>Ver mapa & cómo llegar</span>
                  <ExternalLink className="w-3 h-3 text-pink-400" />
                </button>
              </div>
            </div> */}

            {/* The Fun Gag Note (Paper Sticker Style) */}
            <div className="p-4 rounded-2xl bg-[#fef3c7] border border-amber-200/90 shadow-sm flex items-start gap-3 text-[#78350f] rotate-[-0.5deg]">
              <span className="text-2xl flex-shrink-0">⭐</span>
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                <strong className="font-bold">Aviso importante:</strong> No olvidar regalo (¡si no no entras! Es broma... pero si quieres, no es broma 😉🎁).
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full px-1 relative z-10">
            <button
              onClick={() => setIsMapOpen(true)}
              className="w-full sm:w-1/2 py-3.5 px-5 rounded-2xl border-2 border-neutral-400/80 bg-white/90 hover:bg-white text-neutral-800 text-sm font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Ver Ubicación</span>
            </button>

            <button
              onClick={() => setIsRsvpOpen(true)}
              className="w-full sm:w-1/2 py-3.5 px-5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-bold shadow-md transition transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <PartyPopper className="w-4 h-4 text-amber-300" />
              <span>Confirmar asistencia</span>
            </button>
          </div>

          {/* Footer Note */}
          <footer className="mt-12 text-center text-xs text-neutral-400 font-medium">
            ¡Nos vemos para festejar los 23 de Citla! 💖✨
          </footer>

        </div>
      </div>

      {/* ================= MODALS ================= */}

      {/* 1. Modal: Confirmar Asistencia (RSVP) */}
      {isRsvpOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#fffafc] p-6 shadow-2xl border-2 border-pink-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsRsvpOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-neutral-800">
                  ¡Asistencia Confirmada!
                </h3>
                <p className="text-xs text-neutral-600">
                  ¡Listo {rsvpName}! Nos vemos el 24 de Octubre para festejar a Citla 🎉🤠
                </p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-3.5">
                <div className="text-center mb-4">
                  <span className="text-3xl inline-block mb-1">🎉</span>
                  <h3 className="font-serif text-2xl font-bold text-pink-950">
                    Confirmar Asistencia
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Festejo de los 23 de Citlali ✨
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Tu nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="Ej. Mariana González"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={rsvpPhone}
                    onChange={(e) => setRsvpPhone(e.target.value)}
                    placeholder="Ej. (81) 1234-5678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    ¿Cuántas personas asistirán?
                  </label>
                  <select
                    value={rsvpGuests}
                    onChange={(e) => setRsvpGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                  >
                    <option value="1">Solo yo (1 persona)</option>
                    <option value="2">Yo + 1 acompañante (2 personas)</option>
                    <option value="3">3 personas</option>
                    <option value="4">4+ personas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Mensaje para Citla
                  </label>
                  <textarea
                    rows={2}
                    value={rsvpMessage}
                    onChange={(e) => setRsvpMessage(e.target.value)}
                    placeholder="Hoy en tu cumple 23 quiero que sepas que..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm shadow-md transition active:scale-95 cursor-pointer mt-2"
                >
                  ¡Confirmar mi lugar! ✨
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. Modal: Ubicación y Mapa */}
      {isMapOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#fffafc] p-6 shadow-2xl border-2 border-pink-100">
            <button
              onClick={() => setIsMapOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-4">
              <span className="text-3xl inline-block mb-1">📍</span>
              <h3 className="font-serif text-2xl font-bold text-pink-950">
                Ubicación de la Fiesta
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Priv. Misión de Santa Ana, fracc La Misión.
              </p>
            </div>

            {/* Stylized simulated Map view */}
            <div className="w-full h-44 rounded-2xl bg-[#e5f0ec] border-2 border-pink-200 relative overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

              <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-white shadow-xs"></div>
              <div className="absolute left-0 right-0 top-1/2 h-6 bg-white shadow-xs"></div>

              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="px-3 py-1 bg-pink-600 text-white text-[11px] font-bold rounded-full shadow-md whitespace-nowrap">
                  🎉 Cumple #23 de Citla
                </div>
                <MapPin className="w-7 h-7 text-pink-600 fill-pink-100 -mt-1 drop-shadow" />
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-pink-50 text-xs text-pink-900 border border-pink-100">
              💡 <strong>Tip de acceso:</strong> En la caseta menciona que vas al cumpleaños #23 de Citlali en el lote 14.
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold text-center flex items-center justify-center gap-1 shadow-xs"
              >
                Google Maps
              </a>
              <a
                href="https://waze.com"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold text-center flex items-center justify-center gap-1 border border-amber-300 shadow-xs"
              >
                Abrir en Waze
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

