'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sparkles,
  Search,
  MessageSquare,
  Trash2,
  Copy,
  Check,
  LogOut,
  ExternalLink,
  Calendar,
  User,
  Heart,
  Plus,
  X
} from 'lucide-react'
import { logout } from '@/actions/auth'
import { deleteMessage, createUpdateMessage } from '@/actions/message'

interface MessageItem {
  id: number
  name: string
  content: string
  createdAt: string | Date
}

export default function MessagesClient({
  initialMessages = [],
  userName = 'Citla'
}: {
  initialMessages: MessageItem[]
  userName?: string
}) {
  const [messages, setMessages] = useState<MessageItem[]>(initialMessages)
  const [search, setSearch] = useState('')
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [isDeleting, setIsDeleting] = useState<number | null>(null)

  // Modal para agregar mensaje manual
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [newName, setNewName] = useState('')
  const [newContent, setNewContent] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const filteredMessages = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.content.toLowerCase().includes(search.toLowerCase())
  )

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('¿Deseas eliminar este mensaje?')) return
    setIsDeleting(id)
    try {
      const res = await deleteMessage(id)
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== id))
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsDeleting(null)
    }
  }

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName.trim() || !newContent.trim()) return

    setIsAdding(true)
    try {
      const res = await createUpdateMessage({
        name: newName.trim(),
        content: newContent.trim()
      })
      if (res.ok && res.data) {
        setMessages((prev) => [res.data as MessageItem, ...prev])
        setNewName('')
        setNewContent('')
        setIsAddOpen(false)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsAdding(false)
    }
  }

  const formatDate = (date: string | Date) => {
    try {
      const d = new Date(date)
      return d.toLocaleDateString('es-MX', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return ''
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-[#f1ede4] crumpled-paper-texture overflow-hidden flex flex-col items-center justify-start py-8 px-4 sm:px-6">
      {/* Paper Crumple & Crease Overlays */}
      <div className="absolute inset-0 paper-wrinkle-overlay opacity-60 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply bg-[radial-gradient(#2d241e_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_0%,rgba(0,0,0,0.06)_45%,rgba(255,255,255,0.25)_48%,transparent_52%),linear-gradient(235deg,transparent_20%,rgba(0,0,0,0.05)_58%,rgba(255,255,255,0.2)_60%,transparent_64%)] pointer-events-none"></div>

      {/* Banderillas superiores */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen max-w-none flex justify-center pointer-events-none z-0 overflow-hidden">
        <Image
          src="/img/up.png"
          alt="Banderillas de cumpleaños"
          width={1920}
          height={800}
          className="w-full min-w-[650px] sm:min-w-full h-auto object-cover object-top mix-blend-multiply opacity-80"
          priority
        />
      </div>

      {/* Decorative Floating Stars */}
      <div className="absolute top-12 left-4 sm:left-14 pointer-events-none z-0 animate-float-slow">
        <Image
          src="/img/star-1.png"
          alt="Star 1"
          width={150}
          height={150}
          className="w-14 sm:w-18 h-auto -rotate-12 drop-shadow-md opacity-90"
        />
      </div>

      <div className="absolute top-16 right-4 sm:right-16 pointer-events-none z-0 animate-float-reverse">
        <Image
          src="/img/star2.png"
          alt="Star 2"
          width={180}
          height={180}
          className="w-16 sm:w-20 h-auto rotate-12 drop-shadow-md opacity-90"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto pt-4 pb-16">
        {/* Top Bar with Navigation & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-4 rounded-3xl bg-white/80 backdrop-blur-md border border-neutral-200/90 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-sans text-neutral-700">
              Panel de Mensajes • Citla 23
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-semibold border border-neutral-300 shadow-xs transition"
            >
              <span>Ver Invitación</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </Link>

            <form action={logout}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold border border-rose-200 shadow-xs transition cursor-pointer"
              >
                <LogOut className="w-3 h-3" />
                <span>Salir</span>
              </button>
            </form>
          </div>
        </div>

        {/* Hero Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 maliatons">
            Buzón de Citla
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-md mx-auto">
            Mensajes, confirmaciones y felicitaciones guardadas de tus invitados
          </p>

          {/* Quick Stats Pill */}
          <div className="inline-flex items-center gap-3 mt-4 px-4 py-2 rounded-2xl bg-white/90 border border-pink-200/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-800">
              <MessageSquare className="w-4 h-4 text-pink-500" />
              <span>{messages.length}</span>
              <span className="font-normal text-neutral-500">
                mensaje{messages.length === 1 ? '' : 's'} en total
              </span>
            </div>

            <span className="text-neutral-300">•</span>

            <button
              onClick={() => setIsAddOpen(true)}
              className="inline-flex items-center gap-1 text-xs font-bold text-pink-600 hover:text-pink-700 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Agregar manual</span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre o mensaje..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 shadow-xs transition"
          />
        </div>

        {/* Messages List / Grid */}
        {filteredMessages.length === 0 ? (
          <div className="p-10 rounded-3xl bg-white/80 backdrop-blur-md border border-neutral-200 text-center space-y-3">
            <span className="text-4xl inline-block">💌</span>
            <h3 className="text-lg font-bold text-neutral-800">
              {search ? 'No se encontraron mensajes' : 'Aún no hay mensajes guardados'}
            </h3>
            <p className="text-xs text-neutral-500 max-w-xs mx-auto">
              {search
                ? 'Intenta con otro término de búsqueda'
                : 'Cuando los invitados confirmen su asistencia con un mensaje en la invitación, aparecerán aquí.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredMessages.map((msg, index) => {
              // Cute pastel colors rotation
              const colors = [
                'bg-[#fffafc] border-pink-200/90 text-neutral-800',
                'bg-[#fffef7] border-amber-200/90 text-neutral-800',
                'bg-[#fdfaff] border-purple-200/90 text-neutral-800',
                'bg-[#f8fbf9] border-emerald-200/90 text-neutral-800'
              ]
              const colorClass = colors[index % colors.length]

              return (
                <div
                  key={msg.id}
                  className={`p-5 rounded-3xl border shadow-sm hover:shadow-md transition-all duration-200 relative group flex flex-col justify-between ${colorClass}`}
                >
                  <div>
                    {/* Header: Initial Avatar & Name */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-neutral-900 text-amber-50 font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs uppercase">
                          {msg.name.slice(0, 2)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-neutral-900 leading-tight">
                            {msg.name}
                          </h4>
                          <span className="text-[10px] text-neutral-400 font-medium">
                            {formatDate(msg.createdAt)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition">
                        <button
                          type="button"
                          onClick={() => handleCopy(msg.id, `${msg.name}: "${msg.content}"`)}
                          className="w-7 h-7 rounded-lg bg-white/80 hover:bg-white text-neutral-500 flex items-center justify-center shadow-2xs border border-neutral-200/60 transition cursor-pointer"
                          title="Copiar mensaje"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <button
                          type="button"
                          disabled={isDeleting === msg.id}
                          onClick={() => handleDelete(msg.id)}
                          className="w-7 h-7 rounded-lg bg-white/80 hover:bg-rose-50 text-neutral-400 hover:text-rose-600 flex items-center justify-center shadow-2xs border border-neutral-200/60 transition cursor-pointer disabled:opacity-50"
                          title="Eliminar mensaje"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans whitespace-pre-wrap pl-1 mb-2">
                      &ldquo;{msg.content}&rdquo;
                    </p>
                  </div>

                  {/* Bottom cute tag */}
                  <div className="pt-2 mt-2 border-t border-neutral-100/80 flex items-center justify-between text-[10px] text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
                      <span>Festejo 23</span>
                    </span>
                    <span>#{msg.id}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Modal para agregar mensaje manual */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#fffdfb] p-6 shadow-2xl border border-neutral-200">
            <button
              type="button"
              onClick={() => setIsAddOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center cursor-pointer transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-4">
              <span className="text-2xl inline-block mb-1">✍️</span>
              <h3 className="text-lg font-bold text-neutral-900">
                Agregar Mensaje Manual
              </h3>
              <p className="text-xs text-neutral-500">
                Guarda una felicitación recibida por WhatsApp u otro medio
              </p>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Nombre del Invitado *
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Ej. Sofía R."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Mensaje o Felicitación *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="¡Muchas felicidades Citla! Nos vemos en tu fiesta..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isAdding}
                className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-black text-amber-50 font-bold text-sm shadow-md transition active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{isAdding ? 'Guardando...' : 'Guardar Mensaje'}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
