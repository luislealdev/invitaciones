'use client'

import {
  Sparkles,
  Upload,
  Image as ImageIcon,
  Share2,
  Check,
  Palette,
  Sliders,
  Send,
  Heart,
  Music
} from 'lucide-react'

export function StepMockupOne() {
  return (
    <div className="relative mx-auto w-full max-w-[270px] aspect-[9/18.5] bg-[#1e101a] rounded-[40px] p-2.5 shadow-[0_20px_45px_rgba(219,39,119,0.25)] border-2 border-pink-900/40">
      {/* Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1e101a] rounded-full z-20 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-pink-950/80 ml-8"></div>
      </div>

      {/* Screen */}
      <div className="w-full h-full bg-[#fff5f9] rounded-[32px] overflow-hidden pt-7 px-3.5 pb-3 flex flex-col justify-between border border-pink-100">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-pink-200/60 pb-2 mb-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-pink-600">
              Plantillas ✦
            </span>
            <span className="text-[9px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-bold">
              Y2K Coquette
            </span>
          </div>

          <p className="text-[11px] font-bold text-gray-800 mb-2.5">
            Selecciona tu vibe:
          </p>

          {/* Grid of Templates */}
          <div className="grid grid-cols-2 gap-2">
            {/* Template 1 - Selected */}
            <div className="relative p-2 rounded-2xl bg-gradient-to-b from-pink-200 to-pink-100 border-2 border-pink-500 shadow-xs flex flex-col items-center justify-center text-center">
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-pink-600 text-white text-[9px] flex items-center justify-center font-bold shadow-xs">
                ✓
              </span>
              <div className="w-8 h-8 rounded-full bg-white/90 shadow-xs flex items-center justify-center text-xs mb-1">
                🪩
              </div>
              <p className="text-[10px] font-black text-pink-900">Y2K Coquette</p>
              <p className="text-[8px] text-pink-600 font-semibold">Globo Silver #23</p>
            </div>

            {/* Template 2 */}
            <div className="p-2 rounded-2xl bg-gradient-to-b from-amber-100 to-amber-50 border border-amber-200 flex flex-col items-center justify-center text-center opacity-85">
              <div className="w-8 h-8 rounded-full bg-white/90 shadow-xs flex items-center justify-center text-xs mb-1">
                🍸
              </div>
              <p className="text-[10px] font-bold text-amber-900">Golden Glam</p>
              <p className="text-[8px] text-amber-600">Disco & Glitter</p>
            </div>

            {/* Template 3 */}
            <div className="p-2 rounded-2xl bg-gradient-to-b from-purple-100 to-purple-50 border border-purple-200 flex flex-col items-center justify-center text-center opacity-85">
              <div className="w-8 h-8 rounded-full bg-white/90 shadow-xs flex items-center justify-center text-xs mb-1">
                🤠
              </div>
              <p className="text-[10px] font-bold text-purple-900">Cowgirl Norteño</p>
              <p className="text-[8px] text-purple-600">Botas & Sombrero</p>
            </div>

            {/* Template 4 */}
            <div className="p-2 rounded-2xl bg-gradient-to-b from-rose-100 to-pink-50 border border-rose-200 flex flex-col items-center justify-center text-center opacity-85">
              <div className="w-8 h-8 rounded-full bg-white/90 shadow-xs flex items-center justify-center text-xs mb-1">
                🎀
              </div>
              <p className="text-[10px] font-bold text-rose-900">Soft Pink Bow</p>
              <p className="text-[8px] text-rose-600">Sweet & Chic</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA on Screen */}
        <div className="pt-2">
          <div className="w-full py-2 rounded-xl bg-pink-600 text-white text-[10px] font-bold text-center shadow-xs flex items-center justify-center gap-1">
            <span>Continuar con Y2K Coquette</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function StepMockupTwo() {
  return (
    <div className="relative mx-auto w-full max-w-[270px] aspect-[9/18.5] bg-[#1e101a] rounded-[40px] p-2.5 shadow-[0_20px_45px_rgba(219,39,119,0.25)] border-2 border-pink-900/40">
      {/* Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1e101a] rounded-full z-20 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-pink-950/80 ml-8"></div>
      </div>

      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[32px] overflow-hidden pt-7 px-3.5 pb-3 flex flex-col justify-between border border-pink-100">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-pink-100 pb-2 mb-2.5">
            <span className="text-[10px] font-black text-pink-600 uppercase tracking-wider">
              Editor en Vivo ✏️
            </span>
            <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
              Autoguardado
            </span>
          </div>

          {/* Form simulation */}
          <div className="space-y-2">
            <div>
              <span className="text-[9px] font-bold text-gray-600 block mb-0.5">
                Nombre de la festejada
              </span>
              <div className="px-2.5 py-1.5 rounded-lg bg-pink-50/70 border border-pink-200 text-[10px] font-semibold text-pink-950 flex items-center justify-between">
                <span>Valeria Morales</span>
                <span className="text-[9px] text-pink-400 font-bold">#23</span>
              </div>
            </div>

            <div>
              <span className="text-[9px] font-bold text-gray-600 block mb-0.5">
                Fecha & Lugar
              </span>
              <div className="px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-[9px] text-gray-700">
                24 de Octubre • 5:00 PM
              </div>
            </div>

            {/* Photo Upload Placeholder with /img/IMG_9925.PNG */}
            <div>
              <span className="text-[9px] font-bold text-pink-600 block mb-1">
                Foto de niña (/img/IMG_9925.PNG)
              </span>
              <div className="p-2 rounded-xl border-2 border-dashed border-pink-300 bg-pink-50/50 flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-2 border-white shadow-xs overflow-hidden flex-shrink-0 bg-pink-200">
                  <img
                    src="/img/IMG_9925.PNG"
                    onError={(e) => {
                      const target = e.currentTarget
                      if (!target.src.includes('birthday-girl.png')) {
                        target.src = '/birthday-girl.png'
                      }
                    }}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold text-pink-900 truncate">
                    IMG_9925.PNG
                  </p>
                  <p className="text-[8px] text-emerald-600 font-semibold flex items-center gap-0.5">
                    <Check className="w-2.5 h-2.5" /> Con gorrito & glitter
                  </p>
                </div>
              </div>
            </div>

            {/* Norteño music tag */}
            <div className="p-1.5 rounded-lg bg-purple-50 border border-purple-200 flex items-center gap-1.5">
              <Music className="w-3 h-3 text-purple-600 flex-shrink-0" />
              <span className="text-[8px] font-semibold text-purple-900 truncate">
                Música en vivo (Norteño) 🤠
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA on Screen */}
        <div className="pt-2">
          <div className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-bold text-center shadow-xs">
            ✨ Generar Mi Invitación
          </div>
        </div>
      </div>
    </div>
  )
}

export function StepMockupThree() {
  return (
    <div className="relative mx-auto w-full max-w-[270px] aspect-[9/18.5] bg-[#1e101a] rounded-[40px] p-2.5 shadow-[0_20px_45px_rgba(219,39,119,0.25)] border-2 border-pink-900/40">
      {/* Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1e101a] rounded-full z-20 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-pink-950/80 ml-8"></div>
      </div>

      {/* Screen */}
      <div className="w-full h-full bg-gradient-to-b from-pink-100 via-[#fff5f9] to-white rounded-[32px] overflow-hidden pt-7 px-3 pb-3 flex flex-col justify-between border border-pink-100 text-center">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-pink-200 pb-1.5 mb-2">
            <span className="text-[9px] font-black text-pink-600">
              fiestita.link/vale23 🔗
            </span>
            <span className="text-[8px] bg-pink-600 text-white font-bold px-1.5 py-0.5 rounded-full">
              ¡En vivo!
            </span>
          </div>

          {/* Mini Card Preview */}
          <div className="p-2.5 rounded-2xl bg-white border border-pink-200/80 shadow-xs mb-2">
            <p className="text-[9px] font-black uppercase text-pink-600">
              ¡CUMPLEAÑOS #23!
            </p>
            <div className="w-12 h-12 mx-auto my-1.5 rounded-full p-0.5 bg-gradient-to-tr from-pink-400 via-amber-300 to-pink-500">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/img/IMG_9925.PNG"
                  onError={(e) => {
                    const target = e.currentTarget
                    if (!target.src.includes('birthday-girl.png')) {
                      target.src = '/birthday-girl.png'
                    }
                  }}
                  alt="Valeria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-[9px] font-bold text-gray-800">Valeria Morales</p>
            <p className="text-[8px] text-pink-500 font-semibold">24 Octubre • 5:00 PM</p>
          </div>

          {/* Share links buttons */}
          <div className="space-y-1.5">
            <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[9px] font-bold flex items-center justify-center gap-1.5 shadow-xs">
              <span>💬</span> Enviar por WhatsApp
            </div>
            <div className="p-1.5 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-pink-200 text-pink-900 text-[9px] font-bold flex items-center justify-center gap-1.5 shadow-xs">
              <span>📸</span> Compartir en Instagram Story
            </div>
          </div>
        </div>

        {/* Big Share CTA */}
        <div className="pt-2">
          <div className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-[10px] font-bold text-center shadow-md flex items-center justify-center gap-1.5">
            <Share2 className="w-3 h-3" />
            <span>Copiar Enlace Único ✦</span>
          </div>
        </div>
      </div>
    </div>
  )
}
