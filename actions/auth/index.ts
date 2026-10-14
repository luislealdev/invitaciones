'use server'

import { signIn, signOut } from "@/auth.config";
import { AuthError } from "next-auth";

export async function login(prevState: { ok: boolean; message: string } | undefined, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      return {
        ok: false,
        message: 'Por favor ingresa correo y contraseña.'
      };
    }

    await signIn('credentials', {
      email,
      password,
      redirectTo: '/app',
    });

    return {
      ok: true,
      message: 'Inicio de sesión exitoso.'
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            ok: false,
            message: 'Correo o contraseña incorrectos.'
          };
        default:
          return {
            ok: false,
            message: 'Error de autenticación. Intenta de nuevo.'
          };
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: '/auth' });
}
