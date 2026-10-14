'use client'

import Link from 'next/link'

export default function AuthForm() {
  return (
    <div className="p-4 text-center">
      <Link href="/auth" className="text-sm underline text-neutral-600">
        Ir al inicio de sesión
      </Link>
    </div>
  )
}
