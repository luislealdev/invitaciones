'use client'

import { useActionState, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Lock, Mail, ArrowLeft, Eye, EyeOff, ShieldCheck } from 'lucide-react'
import { login } from '@/actions/auth'
import bcrypt from 'bcryptjs'

export default function AuthPage() {
    const [state, formAction, isPending] = useActionState(login, undefined);
    const [showPassword, setShowPassword] = useState(false);

    console.log(bcrypt.hashSync('teamohermosa'))

    return (
        <div className="relative min-h-screen w-full bg-[#f1ede4] crumpled-paper-texture overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6">
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
                    className="w-full min-w-[650px] sm:min-w-full h-auto object-cover object-top mix-blend-multiply opacity-80"
                    priority
                />
            </div>

            {/* Decorative Floating Stars */}
            <div className="absolute top-12 left-4 sm:left-14 pointer-events-none z-0 animate-float-slow">
                <Image
                    src="/img/star-1.png"
                    alt="Star 1"
                    width={160}
                    height={160}
                    className="w-14 sm:w-20 h-auto -rotate-12 drop-shadow-md opacity-90"
                />
            </div>

            <div className="absolute top-16 right-4 sm:right-16 pointer-events-none z-0 animate-float-reverse">
                <Image
                    src="/img/star2.png"
                    alt="Star 2"
                    width={180}
                    height={180}
                    className="w-16 sm:w-24 h-auto rotate-12 drop-shadow-md opacity-90"
                />
            </div>

            {/* Main Login Card */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto animate-enter-scale">
                {/* Badge */}
                <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-300/80 text-neutral-800 shadow-xs mb-3">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                        <span className="text-[11px] font-bold tracking-[0.22em] uppercase font-sans text-neutral-700">
                            CITLA • PANEL PRIVADO
                        </span>
                        <span className="text-neutral-300 text-xs">/</span>
                        <span className="text-[11px] font-semibold tracking-widest text-pink-600">
                            ADMIN
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 maliatons">
                        Iniciar Sesión
                    </h1>
                    <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                        Ingresa tus datos para ver y gestionar los mensajes de los invitados
                    </p>
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xl relative overflow-hidden">
                    {state?.message && !state.ok && (
                        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium flex items-center gap-2 animate-enter-down">
                            <span className="text-base">⚠️</span>
                            <p>{state.message}</p>
                        </div>
                    )}

                    <form action={formAction} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                                Correo Electrónico
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    placeholder="ejemplo@correo.com"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-neutral-50/50 focus:bg-white transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                                Contraseña
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    required
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-neutral-50/50 focus:bg-white transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full py-3.5 px-5 rounded-2xl bg-neutral-950 hover:bg-neutral-800 text-amber-50 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 border border-neutral-800"
                            >
                                <Sparkles className="w-4 h-4 text-amber-300" />
                                <span>{isPending ? 'Verificando...' : 'Entrar al Panel'}</span>
                            </button>
                        </div>
                    </form>

                    {/* Quick link back */}
                    <div className="mt-5 pt-4 border-t border-neutral-100 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Volver a la Invitación</span>
                        </Link>
                    </div>
                </div>

                <p className="mt-6 text-center text-xs text-neutral-400 font-medium">
                    Invitaciones • Celebración #23 de Citla ✨
                </p>
            </div>
        </div>
    )
}
