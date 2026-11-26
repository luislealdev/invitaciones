/**
 * Construye el mensaje de WhatsApp para recuperación de contraseña.
 * 
 * @param name Nombre del usuario
 * @param resetLink Enlace seguro para restablecer
 * @returns Mensaje de texto formateado para WhatsApp
 */
export function buildPasswordRecoveryWhatsAppMessage(name: string, resetLink: string) {
    return [
        "🔐 *Recuperación de Contraseña - Invitta.link*",
        "",
        `Hola *${name}*,`,
        "",
        "Recibimos una solicitud para restablecer la contraseña de tu cuenta en Invitta.link.",
        "",
        "✨ *Restablecer mi contraseña:*",
        resetLink,
        "",
        "🛡️ *Seguridad:* Este enlace expirará en *1 hora*.",
        "Si no solicitaste este cambio, puedes ignorar este mensaje.",
        "",
        "Invitta.link - Invitaciones digitales para momentos inolvidables.",
    ].join("\n");
}

/**
 * Construye el mensaje de WhatsApp para establecer la contraseña por primera vez.
 * 
 * @param name Nombre del usuario
 * @param setPasswordLink Enlace seguro para establecer la contraseña
 * @returns Mensaje de texto formateado para WhatsApp
 */
export function buildSetPasswordWhatsAppMessage(name: string, setPasswordLink: string) {
    return [
        "🎉 *Bienvenido a Invitta.link*",
        "",
        `Hola *${name}*,`,
        "",
        "Se ha creado una cuenta para ti en Invitta.link. Para comenzar a diseñar tus invitaciones digitales y gestionar la confirmación de tus eventos, establece tu contraseña:",
        "",
        "✨ *Establecer mi contraseña:*",
        setPasswordLink,
        "",
        "Una vez que la establezcas, podrás iniciar sesión y administrar tus celebraciones en cualquier momento.",
        "",
        "Invitta.link - Invitaciones digitales para momentos inolvidables.",
    ].join("\n");
}

/**
 * Construye el mensaje de WhatsApp de bienvenida cuando el usuario ya tiene contraseña.
 * 
 * @param name Nombre del usuario
 * @returns Mensaje de texto formateado para WhatsApp
 */
export function buildWelcomeWhatsAppMessage(name: string) {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://invitta.link";
    return [
        "🎉 *¡Bienvenido a Invitta.link!*",
        "",
        `Hola *${name}*,`,
        "",
        "Tu cuenta ha sido creada exitosamente. Ya puedes ingresar y comenzar a diseñar invitaciones digitales interactivas, compartir enlaces personalizados y gestionar la asistencia de tus invitados en tiempo real.",
        "",
        `👉 *Ir a mi panel:* ${appUrl}/app`,
        "",
        "Invitta.link - Invitaciones digitales para momentos inolvidables.",
    ].join("\n");
}
