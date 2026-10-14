import NextAuth from "next-auth";
import { z } from "zod";
import bcryptjs from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';
import prisma from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    pages: {
        signIn: '/auth',
    },
    callbacks: {
        authorized({ }) {
            return true;
        },

        jwt({ token, user }) {
            if (user) {
                token.data = user;
            }

            return token;
        },

        session({ session, token }) {

            session.user = token.data as any;
            return session;
        },
    },
    providers: [
        Credentials({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        console.error("Missing credentials");
                        return null;
                    }

                    const parsedCredentials = z
                        .object({
                            email: z.string().email(),
                            password: z.string().min(6)
                        })
                        .safeParse(credentials);

                    if (!parsedCredentials.success) {
                        console.error("Invalid credentials format");
                        return null;
                    }

                    const { email, password } = parsedCredentials.data;

                    // Buscar el usuario por correo
                    const user = await prisma.user.findFirst({
                        where: { email: email.toLowerCase() }
                    });

                    if (!user || !user.password) {
                        console.error("User not found");
                        return null;
                    }

                    // Comparar las contraseñas
                    const isValidPassword = bcryptjs.compareSync(password, user.password);
                    if (!isValidPassword) {
                        console.error("Invalid password");
                        return null;
                    }

                    // Regresar el usuario sin el password
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { password: _, ...rest } = user;

                    return rest as any;
                } catch (error) {
                    console.error("Error en authorize:", error);
                    return null;
                }
            },
        }),
    ],
});