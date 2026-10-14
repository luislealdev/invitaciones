'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Clock3,
  MapPin,
  Music2,
  Martini,
  Gift,
  Sparkles,
  X,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  Play,
  Pause,
  ChevronDown,
  CalendarDays,
  Heart,
  Volume2
} from 'lucide-react'

// ================= COMPONENTE DE ANIMACIÓN AL HACER SCROLL =================
function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (elementRef.current) observer.unobserve(elementRef.current)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (isVisible) return 'none'
    switch (direction) {
      case 'up': return 'translateY(28px)'
      case 'down': return 'translateY(-28px)'
      case 'left': return 'translateX(28px)'
      case 'right': return 'translateX(-28px)'
      case 'scale': return 'scale(0.92)'
      default: return 'translateY(24px)'
    }
  }

  return (
    <div
      ref={elementRef}
      style={{
        transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: getTransform()
      }}
      className={className}
    >
      {children}
    </div>
  )
}

// ================= SVGS ILUSTRADOS PERSONALIZADOS =================

function CowboyHatIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 46C14 42 20 44 26 44C32 44 38 44 44 44C50 44 56 42 58 46C56 50 48 52 32 52C16 52 8 50 6 46Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 43V26C22 23 25 18 29 18C31 20 33 20 35 18C39 18 42 23 42 26V43" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 36C26 38 38 38 42 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function WesternBootsIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 14V36C20 40 24 44 30 46L44 47C48 47 50 44 46 42L38 40V14H20Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 14C24 18 34 18 38 14" stroke="currentColor" strokeWidth="2" />
      <path d="M26 24C28 28 30 28 32 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 46V52H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function AccordionIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="8" y="16" width="10" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
      <rect x="46" y="16" width="10" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
      <path d="M18 20L25 16L32 20L39 16L46 20V44L39 48L32 44L25 48L18 44V20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="25" y1="16" x2="25" y2="48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="32" y1="20" x2="32" y2="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="39" y1="16" x2="39" y2="48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="51" cy="24" r="1.5" fill="currentColor" />
      <circle cx="51" cy="32" r="1.5" fill="currentColor" />
      <circle cx="51" cy="40" r="1.5" fill="currentColor" />
    </svg>
  )
}

function BirthdayCakeIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="12" y="36" width="40" height="18" rx="4" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
      <rect x="18" y="24" width="28" height="12" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
      <line x1="32" y1="24" x2="32" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 16C33.5 14 34 11 32 9C30 11 30.5 14 32 16Z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" />
      <path d="M12 42C16 44 20 40 24 42C28 44 32 40 36 42C40 44 44 40 48 42C50 43 51 42 52 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CocktailToastIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 18L26 34V48M26 34L40 18H12ZM20 48H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 26L48 38V48M48 38L56 26H38ZM44 48H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="18" r="3" fill="#ec4899" />
      <path d="M32 12L34 8M46 14L49 10" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function MoonStarsIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M38 14C26 14 18 24 18 36C18 48 28 54 40 52C30 50 26 40 28 30C30 20 36 16 38 14Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 16L47 20L51 21L47 22L46 26L45 22L41 21L45 20L46 16Z" fill="#fbbf24" />
      <path d="M42 34L42.7 36.5L45 37L42.7 37.5L42 40L41.3 37.5L39 37L41.3 36.5L42 34Z" fill="#fbbf24" />
    </svg>
  )
}

function WashiTape({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-4.5 w-24 bg-pink-200/80 border-t border-b border-pink-300/60 backdrop-blur-xs shadow-xs rotate-[-2deg] pointer-events-none mx-auto ${className}`}
      style={{
        clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)'
      }}
    />
  )
}

// ================= PÁGINA PRINCIPAL =================

export default function Page() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false)
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [rsvpName, setRsvpName] = useState('')
  const [rsvpPhone, setRsvpPhone] = useState('')
  const [rsvpGuests, setRsvpGuests] = useState('1')
  const [rsvpMessage, setRsvpMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)
  const [copiedClabe, setCopiedClabe] = useState(false)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  // Scroll tracking
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showFloatingBar, setShowFloatingBar] = useState(false)

  // Datos ficticios configurables
  const addressText = 'Priv. Misión de Santa Ana, fracc La Misión'
  const bankClabe = '012 180 01548976231 4'

  // Contador regresivo interactivo
  const [timeLeft, setTimeLeft] = useState({ days: 11, hours: 7, minutes: 24, seconds: 40 })

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100
        setScrollProgress(Math.min(100, Math.max(0, current)))
      }
      setShowFloatingBar(window.scrollY > 480)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const targetDate = new Date('2026-10-24T17:00:00')
    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((diff / 1000 / 60) % 60)
        const seconds = Math.floor((diff / 1000) % 60)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleCopyAddress = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(addressText)
      setCopiedAddress(true)
      setTimeout(() => setCopiedAddress(false), 2200)
    }
  }

  const handleCopyClabe = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(bankClabe)
      setCopiedClabe(true)
      setTimeout(() => setCopiedClabe(false), 2200)
    }
  }

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

  const handleWhatsAppRsvp = () => {
    const text = encodeURIComponent(
      `¡Hola Citla! 🎉 Confirmo mi asistencia a tu fiesta de 23 años.` +
      (rsvpName ? ` Soy ${rsvpName}` : '') +
      (rsvpGuests !== '1' ? ` (${rsvpGuests} personas)` : '') +
      (rsvpMessage ? ` — "${rsvpMessage}"` : '')
    )
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  return (
    <>
      {/* 1. Barra de progreso superior al scrollear */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-400 via-amber-300 to-pink-600 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Reproductor flotante de Música / Ambiente */}
      <div className="fixed top-4 right-4 z-40 animate-enter-down">
        <button
          type="button"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-300/80 shadow-md text-neutral-800 text-xs font-semibold hover:bg-white active:scale-95 transition cursor-pointer"
        >
          {isPlayingMusic ? (
            <div className="flex items-end gap-0.5 h-3.5 px-0.5">
              <span className="w-0.5 bg-pink-500 rounded-full anim-sound-1" />
              <span className="w-0.5 bg-pink-500 rounded-full anim-sound-2" />
              <span className="w-0.5 bg-pink-500 rounded-full anim-sound-3" />
              <span className="w-0.5 bg-pink-500 rounded-full anim-sound-4" />
            </div>
          ) : (
            <Play className="w-3.5 h-3.5 text-neutral-600 fill-neutral-600" />
          )}
          <span className="hidden sm:inline text-[11px] font-sans">
            {isPlayingMusic ? 'Sonando: Norteño Mix' : 'Poner Rolita'}
          </span>
        </button>
      </div>

      <div className="relative min-h-screen w-full bg-[#f1ede4] crumpled-paper-texture overflow-hidden flex flex-col items-center justify-start py-8 px-4 sm:px-6">

        {/* Paper Crumple & Crease Overlays */}
        <div className="absolute inset-0 paper-wrinkle-overlay opacity-60 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply bg-[radial-gradient(#2d241e_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        {/* Diagonal realistic paper fold shadow creases */}
        <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_0%,rgba(0,0,0,0.06)_45%,rgba(255,255,255,0.25)_48%,transparent_52%),linear-gradient(235deg,transparent_20%,rgba(0,0,0,0.05)_58%,rgba(255,255,255,0.2)_60%,transparent_64%)] pointer-events-none"></div>

        {/* Banderillas superiores */}
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

        {/* Decorative Floating Stars */}
        <div className="absolute top-12 left-4 sm:left-14 pointer-events-none z-0 animate-float-slow">
          <div className="animate-enter-scale anim-delay-100">
            <Image
              src="/img/star-1.png"
              alt="Star 1"
              width={180}
              height={180}
              className="w-14 sm:w-20 h-auto -rotate-12 drop-shadow-md opacity-95"
            />
          </div>
        </div>

        <div className="absolute top-16 right-4 sm:right-16 pointer-events-none z-0 animate-float-reverse">
          <div className="animate-enter-scale anim-delay-200">
            <Image
              src="/img/star2.png"
              alt="Star 2"
              width={220}
              height={220}
              className="w-20 sm:w-28 h-auto rotate-12 drop-shadow-md opacity-95"
            />
          </div>
        </div>

        <div className="absolute top-[35%] -translate-y-1/2 left-3 sm:left-12 pointer-events-none z-0 animate-float-slow">
          <div className="animate-enter-scale anim-delay-300">
            <Image
              src="/img/star4.png"
              alt="Star 4"
              width={200}
              height={200}
              className="w-14 sm:w-20 h-auto -rotate-15 drop-shadow-md opacity-90"
            />
          </div>
        </div>

        <div className="absolute top-[40%] -translate-y-1/2 right-3 sm:right-12 pointer-events-none z-0 animate-float-reverse">
          <div className="animate-enter-scale anim-delay-400">
            <Image
              src="/img/star3.png"
              alt="Star 3"
              width={160}
              height={160}
              className="w-14 sm:w-18 h-auto rotate-15 drop-shadow-sm opacity-90"
            />
          </div>
        </div>

        {/* ================= HERO SECTION ================= */}
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md mx-auto pt-6">

          {/* Chic Top Birthday Badge */}
          <div className="animate-enter-down mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-300/80 text-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase font-sans text-neutral-700">
              CITLA • B-DAY EDITION
            </span>
            <span className="text-neutral-300 text-xs">/</span>
            <span className="text-[11px] font-semibold tracking-widest text-pink-600">
              VOL. 23
            </span>
          </div>

          {/* Photo + Overlay Balloon Letters Container */}
          <div className="animate-enter-scale anim-delay-100 relative w-full max-w-[320px] sm:max-w-[380px] mx-auto flex justify-center items-center">
            {/* Star 7 */}
            <div className="absolute -top-6 -right-6 sm:-right-8 pointer-events-none z-0 animate-float-slow">
              <div className="animate-enter-scale anim-delay-300">
                <Image
                  src="/img/star4.png"
                  alt="Star 4"
                  width={160}
                  height={160}
                  className="w-14 sm:w-18 h-auto rotate-12 drop-shadow-sm opacity-90"
                />
              </div>
            </div>

            {/* Star 8 */}
            <div className="absolute top-1/4 -left-6 sm:-left-8 pointer-events-none z-0 animate-float-reverse">
              <div className="animate-enter-scale anim-delay-400">
                <Image
                  src="/img/star3.png"
                  alt="Star 3"
                  width={150}
                  height={150}
                  className="w-12 sm:w-16 h-auto -rotate-20 drop-shadow-sm opacity-90"
                />
              </div>
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

            {/* Balloon Text Overlay */}
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
          <div className="animate-enter-up anim-delay-200 mt-14 sm:mt-24 text-neutral-800 relative z-10 flex flex-col items-center">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-wide maliatons leading-tight drop-shadow-xs">
              24 de Octubre
            </h1>
            <div className="mt-2.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xs border border-pink-200/80 shadow-xs">
              <Clock3 className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-700 uppercase font-sans">
                Viernes • 17:00 hrs (5:00 PM)
              </span>
            </div>
          </div>

          {/* Contador Regresivo Interactivo */}
          <div className="animate-enter-up anim-delay-300 w-full mt-7 p-4 rounded-3xl bg-white/80 backdrop-blur-md border border-neutral-200/90 shadow-xs">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-2.5">
              Cuenta Regresiva para la Fiesta
            </p>
            <div className="grid grid-cols-4 gap-2">
              <div className="p-2 rounded-2xl bg-[#faf6f0] border border-stone-200 text-center">
                <span className="block text-xl sm:text-2xl font-bold text-neutral-900 font-sans">
                  {timeLeft.days}
                </span>
                <span className="block text-[10px] font-medium text-neutral-500 uppercase">
                  Días
                </span>
              </div>
              <div className="p-2 rounded-2xl bg-[#faf6f0] border border-stone-200 text-center">
                <span className="block text-xl sm:text-2xl font-bold text-neutral-900 font-sans">
                  {timeLeft.hours}
                </span>
                <span className="block text-[10px] font-medium text-neutral-500 uppercase">
                  Horas
                </span>
              </div>
              <div className="p-2 rounded-2xl bg-[#faf6f0] border border-stone-200 text-center">
                <span className="block text-xl sm:text-2xl font-bold text-neutral-900 font-sans">
                  {timeLeft.minutes}
                </span>
                <span className="block text-[10px] font-medium text-neutral-500 uppercase">
                  Min
                </span>
              </div>
              <div className="p-2 rounded-2xl bg-[#faf6f0] border border-stone-200 text-center">
                <span className="block text-xl sm:text-2xl font-bold text-pink-600 font-sans">
                  {timeLeft.seconds}
                </span>
                <span className="block text-[10px] font-medium text-pink-500 uppercase">
                  Seg
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="animate-enter-up anim-delay-400 mt-6 flex flex-col sm:flex-row items-center gap-3 w-full px-1 relative z-10">
            <button
              type="button"
              onClick={() => setIsMapOpen(true)}
              className="w-full sm:w-1/2 py-3.5 px-5 rounded-2xl border border-neutral-300 bg-white/90 hover:bg-white text-neutral-800 text-sm font-bold transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <MapPin className="w-4 h-4 text-pink-600" />
              <span>Ver Ubicación</span>
            </button>

            <button
              type="button"
              onClick={() => setIsRsvpOpen(true)}
              className="w-full sm:w-1/2 py-3.5 px-5 rounded-2xl bg-neutral-950 hover:bg-neutral-800 text-amber-50 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center gap-2 border border-neutral-800"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Confirmar Asistencia</span>
            </button>
          </div>

          {/* Indicador sutil de scroll hacia abajo */}
          <div className="mt-8 flex flex-col items-center gap-1.5 opacity-70 animate-scroll-bounce">
            <span className="text-[11px] font-medium text-neutral-500 tracking-wider">
              Desliza para ver la experiencia
            </span>
            <ChevronDown className="w-4 h-4 text-neutral-400" />
          </div>

          {/* ================= SECCIÓN 1: ITINERARIO INTERACTIVO (TIMELINE) ================= */}
          <ScrollReveal direction="up" className="w-full mt-16 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-pink-400 rounded-full" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                Itinerario de la Noche
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 maliatons mb-6">
              El Plan de la Fiesta
            </h2>

            {/* Timeline Vertical con SVGs */}
            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-pink-300 before:via-amber-300 before:to-pink-400">

              {/* Hito 1: Llegada */}
              <ScrollReveal direction="left" delay={100} className="relative group">
                <div className="absolute -left-[27px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-pink-400 flex items-center justify-center shadow-xs animate-timeline-dot">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                </div>
                <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-xs group-hover:shadow-md transition">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-pink-600 font-mono tracking-wider">
                        17:00 HRS (5:00 PM)
                      </span>
                      <h3 className="text-sm font-bold text-neutral-900 mt-0.5">
                        Llegada & Bienvenida
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Empieza el festejo, asignación de lugares, botana y los primeros brindis con Citla.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0 border border-pink-200/60">
                      <CocktailToastIcon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hito 2: Grupo Norteño en Vivo (7:00 PM) */}
              <ScrollReveal direction="left" delay={200} className="relative group">
                <div className="absolute -left-[27px] top-1.5 w-6 h-6 rounded-full bg-neutral-950 border-2 border-amber-300 flex items-center justify-center shadow-sm">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1c1917] to-[#292524] text-amber-50 border border-stone-800 shadow-md group-hover:shadow-xl transition">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-amber-300 font-mono tracking-wider">
                        19:00 HRS (7:00 PM) • EN VIVO
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5 flex items-center gap-2">
                        <span>Grupo Norteño en Vivo</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          🪗 Norteño
                        </span>
                      </h3>
                      <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                        Entra el grupo norteño en vivo para cantar y bailar a todo pulmón.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-neutral-800 text-amber-300 flex items-center justify-center flex-shrink-0 border border-neutral-700">
                      <AccordionIcon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hito 3: Las Mañanitas & Pastel (9:00 PM) */}
              <ScrollReveal direction="left" delay={300} className="relative group">
                <div className="absolute -left-[27px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-pink-400 flex items-center justify-center shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                </div>
                <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-xs group-hover:shadow-md transition">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-pink-600 font-mono tracking-wider">
                        21:00 HRS (9:00 PM)
                      </span>
                      <h3 className="text-sm font-bold text-neutral-900 mt-0.5">
                        El Pastel & Mañanitas
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Momento de cantar las mañanitas, apagar las velitas de los 23 con Citla y comer pastel.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0 border border-pink-200/60">
                      <BirthdayCakeIcon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hito 4: Continuación de la Fiesta */}
              <ScrollReveal direction="left" delay={400} className="relative group">
                <div className="absolute -left-[27px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-purple-400 flex items-center justify-center shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-xs group-hover:shadow-md transition">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-purple-700 font-mono tracking-wider">
                        HASTA QUE EL CUERPO AGUANTE
                      </span>
                      <h3 className="text-sm font-bold text-neutral-900 mt-0.5">
                        Música, Baile & Festejo
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Seguimos con el ambiente, la música y la plática toda la noche.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0 border border-purple-200/60">
                      <MoonStarsIcon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </ScrollReveal>

          {/* ================= SECCIÓN 2: CÓDIGO DE VESTIMENTA ================= */}
          <ScrollReveal direction="up" className="w-full mt-16 text-left">
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                    Vestimenta
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                    ¿Cómo venir vestido?
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-pink-100/80 text-pink-900 text-xs font-bold border border-pink-200">
                  Libre & Cómodo ✨
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf6f0] border border-stone-200 flex items-center gap-3.5 my-3">
                <div className="w-11 h-11 rounded-xl bg-white text-stone-800 flex items-center justify-center shadow-xs flex-shrink-0 border border-stone-200 text-xl">
                  💃🕺
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-800">Sin código de vestimenta</p>
                  <p className="text-xs text-neutral-600 mt-0.5">Lo único importante es que vengas cómodo(a) para bailar y pasarla increíble.</p>
                </div>
              </div>

              <p className="text-xs text-neutral-500 mt-3 leading-relaxed italic bg-pink-50/60 p-3 rounded-xl border border-pink-100">
                &ldquo;Ponte lo que más te guste, traigan sus mejores pasos y ganas de cantar con el norteño.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* ================= SECCIÓN 3: B.Y.O.B & DETALLES PRÁCTICOS ================= */}
          <ScrollReveal direction="up" className="w-full mt-10 space-y-3 text-left">
            {/* Drinks Card */}
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-xs hover:shadow-md transition">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 border border-pink-200/60 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Martini className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                      Barra & Drinks
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                      B.Y.O.B.
                    </span>
                  </div>
                  <p className="text-sm font-bold text-neutral-900 mt-0.5">
                    Trae tus bebidas favoritas
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Hielos, mezcladores, refrescos y vasos corren por cuenta de la casa.
                  </p>
                </div>
              </div>
            </div>

            {/* Food Card */}
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-xs hover:shadow-md transition">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    Cena & Botanas
                  </span>
                  <p className="text-sm font-bold text-neutral-900 mt-0.5">
                    Mesa de snacks y taquiza
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Habrá rica comida para botanear durante la noche y no parar de bailar.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ================= SECCIÓN 4: GALERÍA POLAROID REEL (CON TAPE) ================= */}
          <ScrollReveal direction="up" className="w-full mt-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-pink-400 rounded-full" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                Momentos & Recuerdos
              </span>
              <span className="w-6 h-0.5 bg-pink-400 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 maliatons mb-8">
              Capítulo 23 de Citla
            </h2>

            {/* Polaroids con cinta adhesiva y rotación */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">

              {/* Polaroid 1 */}
              <ScrollReveal direction="left" delay={100} className="relative group">
                <div className="bg-white p-3.5 pb-5 rounded-2xl shadow-lg border border-neutral-200/80 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
                  <WashiTape className="-mt-6 mb-2" />
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-pink-100 flex items-center justify-center">
                    <Image
                      src="/img/citla.PNG"
                      alt="Citla 23"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-3 font-serif italic text-xs text-neutral-700">
                    Citla • Edición 23 🤍
                  </p>
                </div>
              </ScrollReveal>

              {/* Polaroid 2 */}
              <ScrollReveal direction="right" delay={200} className="relative group">
                <div className="bg-white p-3.5 pb-5 rounded-2xl shadow-lg border border-neutral-200/80 rotate-[3deg] group-hover:rotate-0 transition-transform duration-300">
                  <WashiTape className="-mt-6 mb-2" />
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-amber-50 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-4xl mb-2">🪗🤠✨</span>
                    <p className="text-sm font-bold text-neutral-900">
                      Norteño, Botas & Brindis
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      See you on the dance floor
                    </p>
                  </div>
                  <p className="mt-3 font-serif italic text-xs text-neutral-700">
                    Viernes 24 de Octubre ✨
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </ScrollReveal>

          {/* ================= SECCIÓN 5: EL REGALO ================= */}
          <ScrollReveal direction="up" className="w-full mt-16 text-left">
            <div className="p-5 rounded-3xl bg-gradient-to-br from-[#fef3c7] to-[#fef08a]/60 border border-amber-300/80 shadow-sm relative overflow-hidden text-[#78350f]">
              <div className="flex items-start gap-3.5">
                <span className="text-3xl flex-shrink-0">🎁</span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-900/70">
                    Aviso Importante
                  </span>
                  <p className="text-sm font-bold text-amber-950 mt-0.5">
                    No olvidar regalo 😉
                  </p>
                  <p className="text-xs text-amber-900/90 mt-1 leading-relaxed">
                    ¡Si no llevas regalo no entras! (Es broma... pero si quieres, no es broma 🎁😜).
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ================= SECCIÓN 6: UBICACIÓN Y CÓMO LLEGAR ================= */}
          <ScrollReveal direction="up" className="w-full mt-14 text-left">
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                    Lugar del Festejo
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                    Ubicación & Acceso
                  </h3>
                </div>
                <MapPin className="w-5 h-5 text-pink-600" />
              </div>

              {/* Dirección con Copiar */}
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-neutral-400 uppercase">
                    Dirección
                  </p>
                  <p className="text-xs font-bold text-neutral-800 leading-snug mt-0.5">
                    {addressText}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-neutral-50 border border-neutral-300 text-[11px] font-bold text-neutral-700 flex items-center gap-1 shadow-xs transition active:scale-95 flex-shrink-0 cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">¡Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mapa estilizado */}
              <div className="w-full h-36 rounded-2xl bg-[#e8ede9] border border-stone-300 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
                <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-white/90 shadow-xs"></div>
                <div className="absolute left-0 right-0 top-1/2 h-6 bg-white/90 shadow-xs"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="px-3 py-1 bg-neutral-900 text-amber-50 text-[10px] font-bold rounded-full shadow-md whitespace-nowrap mb-1">
                    🎉 Fiesta #23 Citla
                  </div>
                  <MapPin className="w-6 h-6 text-pink-600 fill-pink-100 drop-shadow animate-bounce" />
                </div>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-amber-50/80 text-xs text-amber-900 border border-amber-200/70">
                💡 <strong>Al estar fuera de la privada:</strong> Mándame un mensaje a mi o a alguien de los invitados.
              </div>

              <div className="mt-3.5 grid grid-cols-2 gap-2">
                <a
                  href="https://maps.google.com/?q=Priv.+Mision+de+Santa+Ana+fracc+La+Mision"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-xs transition"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
                <a
                  href="https://waze.com/ul?q=Priv.+Mision+de+Santa+Ana+fracc+La+Mision"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-bold text-center flex items-center justify-center gap-1.5 border border-neutral-300 shadow-xs transition"
                >
                  <span>Abrir en Waze</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* ================= FINAL CTA & CONFIRMACIÓN ================= */}
          <ScrollReveal direction="up" className="w-full mt-14 mb-16 text-center">
            <div className="p-8 rounded-3xl bg-neutral-950 text-amber-50 shadow-xl border border-neutral-800 relative overflow-hidden">
              <span className="text-3xl mb-2 inline-block">💖🤠✨</span>
              <h2 className="text-3xl font-bold tracking-wide maliatons text-white">
                ¿Nos acompañas?
              </h2>
              <p className="text-xs text-stone-300 mt-2 max-w-xs mx-auto leading-relaxed">
                Por favor confírmanos antes del 20 de Octubre para contemplarte en el banquete y amenidades.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsRsvpOpen(true)}
                  className="w-full py-3.5 rounded-2xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Confirmar mi Asistencia</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRsvp}
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Avisar directamente por WhatsApp</span>
                </button>
              </div>
            </div>

            <footer className="mt-8 text-xs text-neutral-400 font-medium">
              Con mucho cariño para celebrar los 23 de Citla ✨
            </footer>
          </ScrollReveal>

        </div>
      </div>

      {/* ================= FLOATING STICKY BOTTOM BAR ================= */}
      {showFloatingBar && (
        <div className="fixed bottom-4 inset-x-0 z-40 flex justify-center px-4 animate-enter-up pointer-events-none">
          <div className="pointer-events-auto max-w-md w-full p-2 rounded-2xl bg-neutral-900/95 backdrop-blur-md border border-neutral-700/80 shadow-2xl flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMapOpen(true)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-pink-400" />
              <span>Ubicación</span>
            </button>

            <button
              type="button"
              onClick={() => setIsRsvpOpen(true)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Confirmar Lugar</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= MODALS ================= */}

      {/* 1. Modal: Confirmar Asistencia (RSVP) */}
      {isRsvpOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#fffdfb] p-6 shadow-2xl border border-neutral-200 max-h-[92vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsRsvpOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center cursor-pointer transition"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-neutral-900">
                  ¡Asistencia Confirmada!
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed px-2">
                  ¡Listo {rsvpName || ''}! Nos vemos el 24 de Octubre para festejar a Citla en grande.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppRsvp}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Avisar también por WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-3.5">
                <div className="text-center mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    Confirmación
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                    Celebración 23 de Citla
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Viernes 24 de Octubre • 17:00 hrs (5:00 PM)
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
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
                    placeholder="Ej. 81 1234 5678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Número de asistentes
                  </label>
                  <select
                    value={rsvpGuests}
                    onChange={(e) => setRsvpGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                  >
                    <option value="1">1 persona (Solo yo)</option>
                    <option value="2">2 personas (+1 acompañante)</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 o más personas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Mensaje o felicitación (opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={rsvpMessage}
                    onChange={(e) => setRsvpMessage(e.target.value)}
                    placeholder="Un mensajito con cariño para la cumpleañera..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white resize-none"
                  />
                </div>

                <div className="pt-1 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-black text-amber-50 font-bold text-sm shadow-md transition active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Confirmar Asistencia</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRsvp}
                    className="w-full py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Confirmar por WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. Modal: Ubicación y Mapa */}
      {isMapOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#fffdfb] p-6 shadow-2xl border border-neutral-200">
            <button
              type="button"
              onClick={() => setIsMapOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center cursor-pointer transition"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Ubicación del evento
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                Cómo Llegar
              </h3>
            </div>

            {/* Address Box with 1-click Copy */}
            <div className="p-3.5 rounded-2xl bg-stone-100/80 border border-stone-200 flex items-center justify-between gap-3 text-left">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                  Dirección
                </p>
                <p className="text-xs font-bold text-neutral-800 leading-snug mt-0.5">
                  {addressText}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-neutral-50 border border-neutral-300 text-[11px] font-bold text-neutral-700 flex items-center gap-1 shadow-xs transition active:scale-95 flex-shrink-0 cursor-pointer"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Stylized simulated Map view */}
            <div className="w-full h-40 mt-3 rounded-2xl bg-[#e8ede9] border border-stone-300 relative overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
              <div className="absolute top-0 bottom-0 left-1/3 w-7 bg-white/90 shadow-xs"></div>
              <div className="absolute left-0 right-0 top-1/2 h-7 bg-white/90 shadow-xs"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="px-3 py-1 bg-neutral-900 text-amber-50 text-[11px] font-bold rounded-full shadow-md whitespace-nowrap mb-1">
                  Fiesta 23 de Citla
                </div>
                <MapPin className="w-7 h-7 text-pink-600 fill-pink-100 drop-shadow animate-bounce" />
              </div>
            </div>

            <div className="mt-3.5 p-3 rounded-xl bg-amber-50/80 text-xs text-amber-900 border border-amber-200/70">
              💡 <strong>Al estar fuera de la privada:</strong> Mándame un mensaje a mi o a alguien de los invitados.
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href="https://maps.google.com/?q=Priv.+Mision+de+Santa+Ana+fracc+La+Mision"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-xs transition"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
              <a
                href="https://waze.com/ul?q=Priv.+Mision+de+Santa+Ana+fracc+La+Mision"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-bold text-center flex items-center justify-center gap-1.5 border border-neutral-300 shadow-xs transition"
              >
                <span>Abrir en Waze</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
