'use client'

import { useState } from 'react'
import {
  CalendarDays,
  Clock3,
  MapPin,
  Music2,
  Martini,
  Sparkles,
  Heart,
  ChevronRight,
  ExternalLink,
  Volume2,
  VolumeX,
  Share2,
  Check,
  PartyPopper,
  X,
  Gift,
  Send
} from 'lucide-react'

export interface GuestbookEntry {
  id: string
  name: string
  message: string
  timeAgo: string
  avatarBg: string
  tag?: string
}

interface InvitationCardProps {
  onOpenRsvp?: () => void
  onOpenMessage?: () => void
  onOpenMap?: () => void
  customName?: string
  customAge?: number
  isEmbedded?: boolean
}

export default function InvitationCard({
  onOpenRsvp,
  onOpenMessage,
  onOpenMap,
  customName = 'Valeria',
  customAge = 23,
  isEmbedded = false
}: InvitationCardProps) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  const [showMapModal, setShowMapModal] = useState(false)
  const [showRsvpModal, setShowRsvpModal] = useState(false)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState<string | null>(null)

  // RSVP Form state
  const [rsvpName, setRsvpName] = useState('')
  const [rsvpPhone, setRsvpPhone] = useState('')
  const [rsvpGuests, setRsvpGuests] = useState('1')
  const [rsvpNote, setRsvpNote] = useState('')

  // Guestbook Messages state
  const [messages, setMessages] = useState<GuestbookEntry[]>([
    {
      id: '1',
      name: 'Caro',
      message: '¡Qué emoción! 🎉 Ya tengo el outfit listo para bailar con el norteño y festejar tus 23 como se debe. Te adoro!',
      timeAgo: 'Hace 2 horas',
      avatarBg: 'bg-pink-100 text-pink-700',
      tag: 'BFF 💖'
    },
    {
      id: '2',
      name: 'Mariana',
      message: '¡Te veo ahí cumpleañera! ✨ Preparada para cantar a todo pulmón. ¡Felices 23!',
      timeAgo: 'Hace 4 horas',
      avatarBg: 'bg-amber-100 text-amber-800',
      tag: 'Uni Squad 🎀'
    },
    {
      id: '3',
      name: 'Fer Gómez',
      message: '¡No me lo pierdo por nada! Llevo los drinks y toda la actitud 🥳🍾🤠',
      timeAgo: 'Ayer',
      avatarBg: 'bg-purple-100 text-purple-700'
    }
  ])

  // New message form state
  const [authorName, setAuthorName] = useState('')
  const [authorMessage, setAuthorMessage] = useState('')

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowRsvpModal(false)
    setShowSuccessToast(`¡Listo ${rsvpName || 'amiga'}! Tu asistencia ha sido confirmada con éxito 🎉`)
    setRsvpName('')
    setRsvpPhone('')
    setRsvpNote('')
    setTimeout(() => setShowSuccessToast(null), 4000)
  }

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!authorName.trim() || !authorMessage.trim()) return

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: authorName.trim(),
      message: authorMessage.trim(),
      timeAgo: 'Justo ahora',
      avatarBg: 'bg-rose-100 text-rose-700',
      tag: 'Invitad@ VIP 🎀'
    }

    setMessages([newEntry, ...messages])
    setShowMessageModal(false)
    setShowSuccessToast('¡Tu mensaje bonito se publicó en el muro! 💕')
    setAuthorName('')
    setAuthorMessage('')
    setTimeout(() => setShowSuccessToast(null), 4000)
  }

  const handleCopyShare = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2500)
  }

  const eventDetails = [
    {
      icon: CalendarDays,
      label: 'Fecha',
      value: '24 de Octubre',
      subtext: 'Sábado de fiesta',
      accent: 'text-pink-600 bg-pink-100/80 border-pink-200'
    },
    {
      icon: Clock3,
      label: 'Hora',
      value: '5:00 PM',
      subtext: 'Hasta que el cuerpo aguante',
      accent: 'text-amber-600 bg-amber-100/80 border-amber-200'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Priv. Misión de Santa Ana, fracc La Misión.',
      subtext: 'Fraccionamiento privado con acceso en caseta',
      isLocation: true,
      accent: 'text-rose-600 bg-rose-100/80 border-rose-200'
    },
    {
      icon: Music2,
      label: 'Música',
      value: 'Música en vivo (Norteño)',
      subtext: '¡Para cantar y bailar toda la noche! 🤠🎺',
      accent: 'text-purple-600 bg-purple-100/80 border-purple-200'
    },
    {
      icon: Martini,
      label: 'Bebidas',
      value: 'Lleyen lo que quieran tomar.',
      subtext: 'Habrá hielos, escarchados y mezcladores 🍹🥂',
      accent: 'text-fuchsia-600 bg-fuchsia-100/80 border-fuchsia-200'
    }
  ]

  return (
    <div
      className={`relative w-full max-w-[430px] mx-auto bg-[#fffafc] rounded-[2.5rem] overflow-hidden text-[#3b2233] selection:bg-pink-200 selection:text-pink-900 ${isEmbedded
          ? 'shadow-2xl border-4 border-pink-100/90'
          : 'shadow-[0_20px_70px_rgba(219,39,119,0.18)] border border-pink-100/80'
        }`}
    >
      {/* Toast Notification */}
      {showSuccessToast && (
        <div className="absolute top-6 left-4 right-4 z-50 animate-bounce bg-[#2d1222] text-pink-100 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-pink-500/40">
          <PartyPopper className="w-5 h-5 text-amber-300 flex-shrink-0" />
          <p className="text-xs font-medium leading-snug">{showSuccessToast}</p>
        </div>
      )}

      {/* Decorative Bunting Triangular Banner at Very Top */}
      <div className="relative w-full overflow-hidden pt-1 pb-2 bg-gradient-to-r from-pink-200 via-amber-100 to-pink-200 border-b border-pink-200/50 flex justify-center items-center gap-1.5 z-20">
        {[
          { color: 'border-t-pink-500 text-white', label: '★' },
          { color: 'border-t-amber-400 text-amber-950', label: 'F' },
          { color: 'border-t-pink-400 text-white', label: 'I' },
          { color: 'border-t-purple-400 text-white', label: 'E' },
          { color: 'border-t-rose-500 text-white', label: 'S' },
          { color: 'border-t-amber-400 text-amber-950', label: 'T' },
          { color: 'border-t-pink-500 text-white', label: 'A' },
          { color: 'border-t-purple-400 text-white', label: '★' },
        ].map((flag, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] ${flag.color} drop-shadow-xs relative`}
            >
              <span className="absolute -top-[13px] -left-[4px] text-[8px] font-black tracking-tighter">
                {flag.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Sparkles & Metallic Stars Background Elements */}
      <div className="absolute top-14 left-4 text-slate-300 text-2xl select-none pointer-events-none animate-sparkle drop-shadow">
        ★
      </div>
      <div className="absolute top-28 right-6 text-pink-400 text-xl select-none pointer-events-none animate-sparkle sparkle-delay-1">
        ✦
      </div>
      <div className="absolute top-52 left-6 text-amber-400 text-lg select-none pointer-events-none animate-sparkle sparkle-delay-2">
        ★
      </div>
      <div className="absolute top-80 right-4 text-slate-300 text-xl select-none pointer-events-none animate-sparkle sparkle-delay-3">
        ✧
      </div>

      {/* Top Floating Controls Bar */}
      <div className="relative px-5 pt-3 flex items-center justify-between z-20">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 text-[11px] font-semibold text-pink-700 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
          Invitación Oficial 🎀
        </span>

        <div className="flex items-center gap-2">
          {/* Audio toggle simulation */}
          <button
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-50 transition shadow-xs cursor-pointer"
            title={isPlayingMusic ? 'Pausar música norteña' : 'Escuchar ambientación norteña'}
            aria-label="Toggle music"
          >
            {isPlayingMusic ? (
              <Volume2 className="w-4 h-4 animate-bounce text-pink-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-pink-400" />
            )}
          </button>

          {/* Share button */}
          <button
            onClick={handleCopyShare}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-50 transition shadow-xs cursor-pointer"
            title="Copiar link de invitación"
            aria-label="Share invitation"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Hero Header with Disco Ball, Photo & Inflated Silver Foil Header */}
      <header className="relative pt-3 pb-8 px-6 bg-gradient-to-b from-[#fce7f3]/90 via-[#fdf2f8] to-[#fffafc] text-center overflow-hidden">

        {/* Glittering Disco Ball Graphic in Corner */}
        <div className="absolute -top-1 -right-1 z-10 animate-float-slow">
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-slate-300 via-white to-pink-200 border-2 border-white shadow-md flex items-center justify-center text-2xl animate-disco">
            🪩
          </div>
          <span className="absolute -bottom-1 -left-1 text-xs text-amber-400 animate-sparkle">✨</span>
        </div>

        {/* Catchphrase tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/95 border border-pink-200 text-pink-600 text-[11px] font-bold tracking-widest uppercase shadow-xs mb-3">
          <Sparkles className="w-3 h-3 text-amber-500" />
          ¡Estás cordialmente invitad@!
        </div>

        {/* Silver Foil Balloon Typography */}
        <div className="relative z-10 my-2">
          <h1 className="silver-foil-text text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
            ¡CUMPLEAÑOS #{customAge}!
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-pink-800 font-semibold mt-1">
            {customName} cumple y se festeja en grande 🎂
          </p>
        </div>

        {/* Birthday Girl Childhood Photo (/img/IMG_9925.PNG) with Pink Party Hat Overlay & Silver Stars */}
        <div className="relative z-10 mt-6 mx-auto w-44 h-44 sm:w-48 sm:h-48">

          {/* Digital Pink Party Hat Overlay */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-md animate-float-slow">
            <div className="relative flex flex-col items-center">
              {/* Pom-pom */}
              <div className="w-4 h-4 rounded-full bg-amber-300 border border-white shadow-xs animate-pulse"></div>
              {/* Cone */}
              <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[34px] border-b-pink-500 -mt-1 relative">
                {/* Polka dots on hat */}
                <span className="absolute top-2 -left-1.5 w-1.5 h-1.5 rounded-full bg-white opacity-90"></span>
                <span className="absolute top-5 left-1 w-1.5 h-1.5 rounded-full bg-amber-200 opacity-90"></span>
              </div>
            </div>
          </div>

          {/* Outer glowing shimmer ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-amber-300 to-pink-500 p-[5px] shadow-[0_10px_28px_rgba(236,72,153,0.3)] animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-white p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-pink-100 relative">
                {/* Visual reference child photo from /img/IMG_9925.PNG with fallback */}
                <img
                  src="/img/IMG_9925.PNG"
                  onError={(e) => {
                    const target = e.currentTarget
                    if (!target.src.includes('birthday-girl.png')) {
                      target.src = '/birthday-girl.png'
                    }
                  }}
                  alt={`Foto de ${customName} de niña`}
                  className="w-full h-full object-cover object-center filter brightness-105 contrast-102"
                />
              </div>
            </div>
          </div>

          {/* Floating metallic silver stars around photo */}
          <span className="absolute -top-2 -left-3 text-2xl filter drop-shadow animate-sparkle">★</span>
          <span className="absolute -bottom-1 -left-2 text-xl text-pink-400 filter drop-shadow animate-sparkle sparkle-delay-1">✦</span>
          <span className="absolute top-1/2 -right-4 text-2xl text-slate-300 filter drop-shadow animate-sparkle sparkle-delay-2">★</span>

          {/* Cute Badge attached to frame */}
          <div className="absolute -bottom-2 right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md border-2 border-white flex items-center gap-1">
            <span>✨</span> 23 primaveras <span>🥂</span>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="px-5 py-6 space-y-5">

        {/* Event Details Grid */}
        <section aria-labelledby="detalles-evento" className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 id="detalles-evento" className="font-serif text-xl font-bold text-pink-950 flex items-center gap-2">
              <span>📅</span> Detalles de la Fiesta
            </h2>
            <span className="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
              No faltes 🎀
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {eventDetails.map((detail, idx) => {
              const IconComponent = detail.icon
              const isFullSpan = detail.isLocation
              return (
                <div
                  key={idx}
                  className={`relative p-3.5 rounded-2xl bg-white border border-pink-100/90 shadow-xs hover:border-pink-300 transition-all ${isFullSpan ? 'sm:col-span-2 bg-gradient-to-r from-white via-pink-50/40 to-white' : ''
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl border flex-shrink-0 ${detail.accent}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-pink-500">
                        {detail.label}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 leading-snug mt-0.5">
                        {detail.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-tight">
                        {detail.subtext}
                      </p>

                      {detail.isLocation && (
                        <div className="mt-2.5 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => (onOpenMap ? onOpenMap() : setShowMapModal(true))}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-bold border border-pink-200 transition active:scale-95 shadow-xs cursor-pointer"
                          >
                            <MapPin className="w-3.5 h-3.5 text-pink-600" />
                            Ver en Google Maps
                            <ExternalLink className="w-3 h-3 ml-0.5 text-pink-400" />
                          </button>
                          <span className="text-[11px] text-pink-400 italic">
                            (Privada con caseta)
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Fun Gag Note Box */}
        <div className="p-4 rounded-2xl bg-[#fef3c7] border border-amber-200/90 shadow-xs flex items-start gap-3 text-[#78350f]">
          <span className="text-xl flex-shrink-0">⭐</span>
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            No olvides tu regalo (¡o no entras! Es broma... pero si quieres, no es broma) 😉.
          </p>
        </div>

        {/* Primary Action Buttons (RSVP & Message) */}
        <section aria-label="Acciones de la invitación" className="pt-2 space-y-2.5">
          <button
            type="button"
            onClick={() => (onOpenRsvp ? onOpenRsvp() : setShowRsvpModal(true))}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-bold text-base shadow-[0_10px_25px_rgba(219,39,119,0.35)] flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <PartyPopper className="w-5 h-5 text-amber-200" />
            <span>Confirmar mi asistencia</span>
          </button>

          <button
            type="button"
            onClick={() => (onOpenMessage ? onOpenMessage() : setShowMessageModal(true))}
            className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-pink-50/80 text-pink-700 border-2 border-pink-200 font-bold text-sm shadow-xs flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Heart className="w-4 h-4 text-pink-500 fill-pink-100" />
            <span>Regálale un mensaje bonito</span>
          </button>
        </section>

        {/* Guestbook Section ("Mensajes bonitos") */}
        <section aria-labelledby="guestbook-heading" className="pt-4 border-t border-pink-100/80 space-y-3">
          <div className="flex items-center justify-between">
            <h3 id="guestbook-heading" className="font-serif text-xl font-bold text-pink-950 flex items-center gap-2">
              <span>💌</span> Mensajes bonitos
            </h3>
            <span className="text-xs font-semibold text-pink-600 bg-pink-100/70 px-2.5 py-0.5 rounded-full">
              {messages.length} dedicatorias
            </span>
          </div>

          <div className="space-y-2.5">
            {messages.map((entry) => (
              <div
                key={entry.id}
                className="p-3.5 rounded-2xl bg-white border border-pink-100 shadow-xs hover:border-pink-200 transition space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${entry.avatarBg}`}>
                      {entry.name.charAt(0)}
                    </span>
                    <p className="text-xs font-bold text-gray-900">{entry.name}</p>
                    {entry.tag && (
                      <span className="text-[10px] bg-pink-50 text-pink-600 font-semibold px-2 py-0.5 rounded-full border border-pink-100">
                        {entry.tag}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400">{entry.timeAgo}</span>
                </div>
                <p className="text-xs text-gray-700 font-normal leading-relaxed pl-9">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-1">
            <button
              onClick={() => (onOpenMessage ? onOpenMessage() : setShowMessageModal(true))}
              className="text-xs font-semibold text-pink-600 hover:text-pink-800 underline decoration-pink-300 underline-offset-4 cursor-pointer"
            >
              + Escribir otro mensajito para {customName}
            </button>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="pt-4 text-center pb-2">
          <p className="text-[11px] text-pink-400 font-medium">
            Hecho con mucho amor para el cumple de {customName} 💖
          </p>
        </footer>
      </div>

      {/* ================= MODALS ================= */}

      {/* 1. Modal: Confirmar Asistencia (RSVP) */}
      {showRsvpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-pink-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowRsvpModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-5">
              <span className="inline-block text-3xl mb-1">🎉</span>
              <h3 className="font-serif text-2xl font-bold text-pink-950">
                Confirmar Asistencia
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                ¡Nos encantará verte celebrar los {customAge} de {customName}!
              </p>
            </div>

            <form onSubmit={handleRsvpSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Tu nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="Ej. Caro Martínez"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={rsvpPhone}
                  onChange={(e) => setRsvpPhone(e.target.value)}
                  placeholder="Ej. 81 1234 5678"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  ¿Cuántas personas asistirán?
                </label>
                <select
                  value={rsvpGuests}
                  onChange={(e) => setRsvpGuests(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/30"
                >
                  <option value="1">Solo yo (1 persona)</option>
                  <option value="2">Yo + 1 acompañante (2 personas)</option>
                  <option value="3">3 personas</option>
                  <option value="4">4+ personas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Mensaje o canción que quieres escuchar 🎵
                </label>
                <textarea
                  rows={2}
                  value={rsvpNote}
                  onChange={(e) => setRsvpNote(e.target.value)}
                  placeholder="¡Aparten mi lugar cerca de la pista!"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm shadow-md transition active:scale-95 cursor-pointer mt-2"
              >
                ¡Confirmar mi lugar! ✨
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. Modal: Mensaje Bonito (Guestbook) */}
      {showMessageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-pink-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowMessageModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-5">
              <span className="inline-block text-3xl mb-1">💌</span>
              <h3 className="font-serif text-2xl font-bold text-pink-950">
                Regálale un Mensaje
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Escribe algo lindo que la cumpleañera guardará para siempre.
              </p>
            </div>

            <form onSubmit={handleMessageSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Tu nombre o apodo *
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Ej. Tu amiga favorita"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Tu dedicatoria bonita *
                </label>
                <textarea
                  rows={4}
                  required
                  value={authorMessage}
                  onChange={(e) => setAuthorMessage(e.target.value)}
                  placeholder="¡Felices 23! Que este año te traiga viajes, risas y todo lo bonito del mundo 💕"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-sm shadow-md transition active:scale-95 cursor-pointer"
              >
                Publicar mensaje con amor 💖
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. Modal: Ver Mapa */}
      {showMapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-pink-100">
            <button
              onClick={() => setShowMapModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-4">
              <span className="inline-block text-3xl mb-1">📍</span>
              <h3 className="font-serif text-2xl font-bold text-pink-950">
                Ubicación de la Fiesta
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Priv. Misión de Santa Ana, fracc La Misión.
              </p>
            </div>

            {/* Stylized simulated Map view */}
            <div className="w-full h-44 rounded-2xl bg-[#e5f0ec] border-2 border-pink-200 relative overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

              {/* Roads graphic mock */}
              <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-white shadow-xs"></div>
              <div className="absolute left-0 right-0 top-1/2 h-6 bg-white shadow-xs"></div>

              {/* Pin */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="px-3 py-1 bg-pink-600 text-white text-[11px] font-bold rounded-full shadow-md whitespace-nowrap">
                  🎉 Casa de Valeria #23
                </div>
                <MapPin className="w-7 h-7 text-pink-600 fill-pink-100 -mt-1 drop-shadow" />
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-pink-50 text-xs text-pink-900 border border-pink-100">
              💡 <strong>Tip de llegada:</strong> En la caseta menciona que vas al cumpleaños #23 de Valeria en el lote 14.
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold text-center flex items-center justify-center gap-1 shadow-xs"
              >
                Abrir Google Maps
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

    </div>
  )
}
