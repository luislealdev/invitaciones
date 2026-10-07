'use client'

import { useState } from 'react'
import Link from 'next/link'
import InvitationCard from '@/components/InvitationCard'
import { StepMockupOne, StepMockupTwo, StepMockupThree } from '@/components/PhoneMockupSteps'
import {
  Sparkles,
  Check,
  ChevronRight,
  Heart,
  Music,
  Share2,
  Gift,
  Star,
  PartyPopper,
  Menu,
  X,
  Smartphone,
  Sliders,
  CheckCircle2,
  Crown,
  Zap,
  ArrowRight,
  ShieldCheck,
  Palette,
  ExternalLink
} from 'lucide-react'

export default function PlatformLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [creatorModalOpen, setCreatorModalOpen] = useState(false)
  const [selectedPlanModal, setSelectedPlanModal] = useState<'free' | 'pro' | null>(null)
  
  // Customization state for creator simulator
  const [birthdayName, setBirthdayName] = useState('Valeria')
  const [birthdayAge, setBirthdayAge] = useState(23)
  const [selectedVibe, setSelectedVibe] = useState('y2k')

  return (
    <div className="min-h-screen bg-[#fbf7f4] text-[#3b2233] selection:bg-pink-200 selection:text-pink-900">
      
      {/* 1. STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#fbf7f4]/90 backdrop-blur-md border-b border-pink-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Name with Star Icon */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:rotate-6 transition-transform">
              🪩
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black italic tracking-tight bg-gradient-to-r from-pink-700 via-pink-600 to-rose-600 bg-clip-text text-transparent flex items-center gap-1">
                fiestita<span className="text-amber-500">.</span>
                <span className="text-amber-400 text-lg not-italic animate-pulse">★</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-pink-400 uppercase -mt-1">
                Y2K Coquette Invitations
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links: Características, Plantillas, Precios */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#caracteristicas"
              className="text-sm font-bold text-gray-700 hover:text-pink-600 transition-colors"
            >
              Características
            </a>
            <a
              href="#plantillas"
              className="text-sm font-bold text-gray-700 hover:text-pink-600 transition-colors"
            >
              Plantillas
            </a>
            <a
              href="#precios"
              className="text-sm font-bold text-gray-700 hover:text-pink-600 transition-colors"
            >
              Precios
            </a>
            <Link
              href="/ejemplo"
              className="text-sm font-bold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 px-3.5 py-1.5 rounded-full border border-pink-200 transition flex items-center gap-1.5"
            >
              <span>Ver Ejemplo Móvil</span>
              <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
            </Link>
          </nav>

          {/* Desktop Right CTA: "Crear Invitación" */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCreatorModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white text-sm font-bold shadow-[0_4px_16px_rgba(219,39,119,0.3)] transition transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Crear Invitación</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-pink-700 hover:bg-pink-50"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 bg-[#fbf7f4] border-b border-pink-100 space-y-3 animate-in slide-in-from-top-2">
            <a
              href="#caracteristicas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-pink-600 rounded-xl"
            >
              Características
            </a>
            <a
              href="#plantillas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-pink-600 rounded-xl"
            >
              Plantillas
            </a>
            <a
              href="#precios"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-pink-600 rounded-xl"
            >
              Precios
            </a>
            <Link
              href="/ejemplo"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-pink-600 rounded-xl bg-pink-50"
            >
              Ver Ejemplo Móvil (/ejemplo) 📱
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                setCreatorModalOpen(true)
              }}
              className="w-full py-3 rounded-full bg-pink-600 text-white font-bold text-sm shadow-md cursor-pointer"
            >
              ¡Crear Invitación! ✨
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-10 pb-20 md:py-24 overflow-hidden">
        {/* Background Pastel Glow Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Copy & CTA */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Cute Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef3c7] border border-amber-200/80 text-[#78350f] text-xs font-bold tracking-wide shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Y2K Girlie & Coquette • Para tus 23, 24 y más 🎀</span>
              </div>

              {/* Exact Catchy Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl font-black text-pink-950 tracking-tight leading-[1.08]">
                Crea tu invitación <span className="italic bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 bg-clip-text text-transparent underline decoration-pink-300 decoration-wavy decoration-2">perfecta</span> en minutos.
              </h1>

              {/* Exact Subheadline */}
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Diseños únicos, aesthetic y divertidos para tus fiestas inolvidables.
              </p>

              {/* Feature Highlights Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-pink-200 text-xs font-semibold text-pink-700 shadow-xs">
                  <Check className="w-3.5 h-3.5 text-pink-600" /> Globos plateados 3D
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-pink-200 text-xs font-semibold text-pink-700 shadow-xs">
                  <Check className="w-3.5 h-3.5 text-pink-600" /> Muro de dedicatorias
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-pink-200 text-xs font-semibold text-pink-700 shadow-xs">
                  <Check className="w-3.5 h-3.5 text-pink-600" /> Música en vivo & mapa GPS
                </span>
              </div>

              {/* CTA Buttons: "¡Empieza a crear ahora!" */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={() => setCreatorModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-bold text-base shadow-[0_12px_30px_rgba(219,39,119,0.35)] transition transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-amber-200" />
                  <span>¡Empieza a crear ahora!</span>
                </button>

                <Link
                  href="/ejemplo"
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-white hover:bg-pink-50/80 text-pink-700 font-bold text-sm border-2 border-pink-200 shadow-xs flex items-center justify-center gap-2 transition"
                >
                  <span>Ver demo en pantalla completa</span>
                  <ChevronRight className="w-4 h-4 text-pink-400" />
                </Link>
              </div>

              {/* Social Proof */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-gray-600">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-300 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">V</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-amber-300 flex items-center justify-center text-[10px] font-bold text-amber-900 shadow-xs">C</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-300 flex items-center justify-center text-[10px] font-bold text-purple-900 shadow-xs">M</div>
                </div>
                <span>⭐ Más de <strong>2,000+ invitaciones creadas</strong> este mes</span>
              </div>
            </div>

            {/* Right Column: Live Mobile Interactive Showcase */}
            <div id="demo-showcase" className="lg:col-span-6 relative flex justify-center">
              
              {/* Floating badges around phone */}
              <div className="absolute -top-4 -left-2 sm:left-4 z-30 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 shadow-lg text-xs font-bold text-pink-800 flex items-center gap-2 animate-float-slow">
                <span className="text-base">🪩</span>
                <div>
                  <p className="text-[11px] font-extrabold text-pink-600">Formato 100% Móvil</p>
                  <p className="text-[9px] text-gray-500 font-medium">Listo para WhatsApp e Instagram</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-2 sm:right-4 z-30 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200 shadow-lg text-xs font-bold text-amber-900 flex items-center gap-2 animate-float-reverse">
                <span className="text-base">🥂</span>
                <div>
                  <p className="text-[11px] font-extrabold text-amber-700">Confirmación RSVP</p>
                  <p className="text-[9px] text-gray-500 font-medium">Tus invitados confirman al instante</p>
                </div>
              </div>

              {/* Realistic Phone Shell Container */}
              <div className="relative w-full max-w-[420px]">
                {/* Outer Glow */}
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 via-rose-300 to-amber-200 rounded-[52px] blur-lg opacity-40 animate-pulse-glow"></div>
                
                {/* Phone Hardware Shell */}
                <div className="relative bg-[#1e101a] rounded-[48px] p-2.5 shadow-[0_30px_90px_rgba(219,39,119,0.3)] border-4 border-pink-900/30">
                  {/* Speaker & Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1e101a] rounded-full z-30 flex items-center justify-center">
                    <div className="w-10 h-1 rounded-full bg-[#3b2233]"></div>
                    <div className="w-2 h-2 rounded-full bg-pink-900/70 ml-2"></div>
                  </div>

                  {/* Inner Screen rendering InvitationCard */}
                  <div className="rounded-[40px] overflow-hidden max-h-[720px] overflow-y-auto pt-2 bg-[#fffafc]">
                    <InvitationCard
                      customName={birthdayName}
                      customAge={birthdayAge}
                      isEmbedded={true}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURES HIGHLIGHTS SECTION: "Características" */}
      <section id="caracteristicas" className="py-20 bg-white border-y border-pink-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-pink-600 bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
              Características Exclusivas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pink-950 mt-3">
              Todo lo que necesitas para una invitación inolvidable
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Estética digital collage, detalles interactivos y enlaces instantáneos para compartir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-pink-50/70 to-white border border-pink-100 hover:border-pink-300 transition-all duration-200 shadow-xs hover:shadow-md group">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform text-xl">
                ★
              </div>
              <h3 className="font-serif text-xl font-bold text-pink-950 mb-2">
                Tipografía Inflated Silver 3D
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Títulos que parecen globos plateados metálicos reales con brillo especular y sombras que dan el toque fiestero Y2K perfecto.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-amber-50/70 to-white border border-amber-100 hover:border-amber-300 transition-all duration-200 shadow-xs hover:shadow-md group">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
              <h3 className="font-serif text-xl font-bold text-amber-950 mb-2">
                Guestbook de Mensajes Bonitos
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tus amigas y amigos te dejan dedicatorias llenas de cariño que quedan guardadas en tu invitación como recuerdo para siempre.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-purple-50/70 to-white border border-purple-100 hover:border-purple-300 transition-all duration-200 shadow-xs hover:shadow-md group">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Music className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-purple-950 mb-2">
                Música en Vivo & Ubicación GPS
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ambientación norteña, botón directo a Google Maps / Waze, notas de regalos graciosas y confirmación de invitados en 1 click.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURE & FLOW SHOWCASE: "Plantillas / Cómo Funciona" */}
      <section id="plantillas" className="py-24 bg-[#fbf7f4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-pink-600 bg-pink-100 px-3.5 py-1 rounded-full">
              Flujo Simple en 3 Pasos
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-pink-950 mt-3 tracking-tight">
              Cómo Funciona
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Desde la elección de tu plantilla hasta tener tu enlace listo para enviar.
            </p>
          </div>

          {/* Three-step visual guide using stylized mockups of phone screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 items-start">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-5">
              <div className="relative w-full">
                <StepMockupOne />
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-pink-600 text-white font-black text-xs shadow-md">
                  Paso 1
                </span>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="font-serif text-2xl font-bold text-pink-950">
                  1. Elige una plantilla
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Escoge tu vibe favorito: Y2K Coquette, Golden Glam, Cowgirl Norteño o Soft Pink.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-5">
              <div className="relative w-full">
                <StepMockupTwo />
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-amber-500 text-amber-950 font-black text-xs shadow-md">
                  Paso 2
                </span>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="font-serif text-2xl font-bold text-pink-950">
                  2. Personaliza a tu gusto
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sube tu foto de niña (<code className="text-pink-600 bg-pink-50 px-1 rounded font-mono text-xs">IMG_9925.PNG</code>), fecha, lugar y frase de regalo.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-5">
              <div className="relative w-full">
                <StepMockupThree />
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-rose-600 text-white font-black text-xs shadow-md">
                  Paso 3
                </span>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="font-serif text-2xl font-bold text-pink-950">
                  3. Comparte tu enlace único
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Copia tu link personalizado y envíalo a tus grupos de WhatsApp, amigos y stories de Instagram.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PRICING & PLANS SECTION: "Precios" */}
      <section id="precios" className="py-24 bg-gradient-to-b from-white via-pink-50/50 to-[#fbf7f4] border-t border-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-pink-600 bg-pink-100 px-3.5 py-1 rounded-full">
              Precios Claros
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-pink-950 mt-3 tracking-tight">
              Planes y Precios
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Sin suscripciones ni cargos ocultos. Elige el que mejor vaya con tu fiesta.
            </p>
          </div>

          {/* Clean Cards as specified: Plan Básico (Gratis) & Plan Pro / Fiesta Total ($49 MXN) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Plan 1: Plan Básico (Gratis) */}
            <div className="p-8 rounded-3xl bg-white border-2 border-pink-200/80 shadow-md hover:border-pink-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                    Plan Básico
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pink-950">
                  Plan Básico (Gratis)
                </h3>
                
                <div className="my-6">
                  <span className="font-serif text-4xl font-black text-gray-900">$0</span>
                  <span className="text-gray-500 text-sm ml-2 font-medium">/ para siempre</span>
                </div>

                <p className="text-sm text-gray-600 mb-6">
                  Plantillas esenciales y edición de texto para festejos sencillos.
                </p>

                <div className="space-y-3 pt-2 border-t border-pink-100">
                  <div className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Plantillas esenciales incluidas</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Edición completa de texto y fecha</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Carga de 1 foto de la cumpleañera</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Enlace público compartible</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setSelectedPlanModal('free')}
                  className="w-full py-3.5 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold text-sm border-2 border-pink-200 transition active:scale-95 cursor-pointer"
                >
                  Seleccionar Plan Básico
                </button>
              </div>
            </div>

            {/* Plan 2: Plan Pro / Fiesta Total ($49 MXN) */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-pink-600 to-rose-600 text-white shadow-[0_20px_50px_rgba(219,39,119,0.35)] border-2 border-pink-400 flex flex-col justify-between">
              
              {/* Most Popular Badge */}
              <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-[#fef3c7] text-[#78350f] font-black text-xs shadow-md flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 text-amber-600" />
                <span>MÁS ELEGIDO 🎀</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-pink-200 bg-pink-700/60 px-3 py-1 rounded-full border border-pink-500/50">
                    Experiencia Total
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Plan Pro / Fiesta Total
                </h3>

                <div className="my-6">
                  <span className="font-serif text-4xl font-black text-white">$49 MXN</span>
                  <span className="text-pink-100 text-sm ml-2 font-medium">/ por evento</span>
                </div>

                <p className="text-sm text-pink-100 mb-6">
                  La experiencia Y2K completa para cumpleañeras que quieren celebrar en grande.
                </p>

                <div className="space-y-3 pt-2 border-t border-pink-500/40">
                  <div className="flex items-center gap-2.5 text-sm text-white">
                    <Check className="w-4 h-4 text-amber-300 flex-shrink-0" />
                    <span><strong>Todo lo del Plan Básico</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-white">
                    <Check className="w-4 h-4 text-amber-300 flex-shrink-0" />
                    <span>Plantillas exclusivas Y2K & Foil Silver 3D</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-white">
                    <Check className="w-4 h-4 text-amber-300 flex-shrink-0" />
                    <span>Muro interactivo de Guestbook con mensajes</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-white">
                    <Check className="w-4 h-4 text-amber-300 flex-shrink-0" />
                    <span>Música embed (Norteño / Pop / Reggaeton)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-white">
                    <Check className="w-4 h-4 text-amber-300 flex-shrink-0" />
                    <span>Opciones de dominio corto y sin anuncios</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setSelectedPlanModal('pro')}
                  className="w-full py-4 rounded-2xl bg-white hover:bg-pink-50 text-pink-700 font-bold text-base shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Seleccionar Plan Pro ($49 MXN)</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FOOTER BANNER */}
      <section className="py-16 bg-[#2d1222] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-4xl animate-bounce inline-block">✨</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-pink-100">
            ¿Lista para crear la invitación de tus 23 o 24?
          </h2>
          <p className="text-pink-200 max-w-xl mx-auto text-sm sm:text-base">
            Crea tu link personalizado en segundos y sorprende a todas tus invitadas.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setCreatorModalOpen(true)}
              className="px-8 py-4 rounded-full bg-[#fcd34d] hover:bg-amber-300 text-amber-950 font-black text-base shadow-xl transition transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              ¡Crear mi invitación ahora! 🎈
            </button>
            <Link
              href="/ejemplo"
              className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 backdrop-blur-md transition"
            >
              Ver demo /ejemplo
            </Link>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL FLOATING ACTION COMPONENT: "✨ Crea la tuya ahora" */}
      <button
        onClick={() => setCreatorModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-5 py-3.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 hover:from-pink-700 hover:to-rose-600 text-white font-black text-sm shadow-[0_10px_30px_rgba(219,39,119,0.45)] border-2 border-white/70 flex items-center gap-2 transition-transform transform hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Crea la tuya ahora"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
        <span>✨ Crea la tuya ahora</span>
      </button>

      {/* ================= SIMULATOR MODALS ================= */}

      {/* Modal: Interactive Creator Studio */}
      {creatorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-pink-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setCreatorModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <span className="inline-block text-3xl mb-1">🪩</span>
              <h3 className="font-serif text-2xl font-bold text-pink-950">
                Creador de Invitación Y2K
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Personaliza tus datos y previsualiza los cambios al instante.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Nombre de la cumpleañera:
                </label>
                <input
                  type="text"
                  value={birthdayName}
                  onChange={(e) => setBirthdayName(e.target.value)}
                  placeholder="Ej. Valeria"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Edad a festejar:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[22, 23, 24, 25].map((age) => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => setBirthdayAge(age)}
                      className={`py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        birthdayAge === age
                          ? 'bg-pink-600 text-white border-pink-600 shadow-xs'
                          : 'bg-pink-50/50 text-pink-800 border-pink-200 hover:bg-pink-100'
                      }`}
                    >
                      #{age}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Estilo de plantilla:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    onClick={() => setSelectedVibe('y2k')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2 ${
                      selectedVibe === 'y2k'
                        ? 'border-pink-500 bg-pink-50 text-pink-900 font-bold'
                        : 'border-gray-200 bg-white text-gray-700'
                    }`}
                  >
                    <span>🪩</span>
                    <span className="text-xs">Y2K Coquette #23</span>
                  </div>
                  <div
                    onClick={() => setSelectedVibe('glam')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2 ${
                      selectedVibe === 'glam'
                        ? 'border-pink-500 bg-pink-50 text-pink-900 font-bold'
                        : 'border-gray-200 bg-white text-gray-700'
                    }`}
                  >
                    <span>🍸</span>
                    <span className="text-xs">Golden Glam</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Foto de niña cargada desde <code className="font-mono font-bold">/img/IMG_9925.PNG</code> con gorrito digital 🎀</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => {
                    setCreatorModalOpen(false)
                    document.getElementById('demo-showcase')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="py-3 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold text-xs border border-pink-200 transition cursor-pointer"
                >
                  Ver en Preview
                </button>
                <Link
                  href="/ejemplo"
                  onClick={() => setCreatorModalOpen(false)}
                  className="py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold text-xs shadow-md transition text-center flex items-center justify-center gap-1 cursor-pointer"
                >
                  Abrir Invitación Completa →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Plan Selection Simulator */}
      {selectedPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-pink-100 text-center">
            <button
              onClick={() => setSelectedPlanModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="my-4">
              <span className="text-4xl inline-block animate-bounce">
                {selectedPlanModal === 'pro' ? '👑' : '⭐'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-pink-950 mt-2">
                {selectedPlanModal === 'pro' ? 'Plan Pro / Fiesta Total ($49 MXN)' : 'Plan Básico (Gratis)'}
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {selectedPlanModal === 'pro'
                  ? '¡Acceso VIP activado! Disfruta de guestbook ilimitado, plantillas Y2K con globos plateados y música embed para tu fiesta.'
                  : '¡Tu plan básico está listo! Puedes personalizar el texto y compartir tu enlace libremente.'}
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedPlanModal(null)
                setCreatorModalOpen(true)
              }}
              className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm shadow-md transition active:scale-95 cursor-pointer"
            >
              Continuar al Editor ✨
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
