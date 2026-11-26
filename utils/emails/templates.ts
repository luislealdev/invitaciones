import { formatCurrency } from '../format-currency';

export interface PaymentEmailData {
    id: string;
    name?: string;
    amount: number;
    paidAt: string;
    method: string;
    notas?: string;
}

export interface SubscriptionEmailData {
    clinicName?: string; // Retrocompatibilidad
    accountName?: string;
    planName: string;
    amount?: number;
    interval?: string;
    endDate?: Date | string | null;
    isUnlimited?: boolean;
    isUpdate?: boolean;
}

interface EmailShellOptions {
    title: string;
    badgeEmoji?: string;
    headerTitle?: string;
    headerSubtitle?: string;
    content: string;
}

/**
 * Plantilla base HTML con la identidad visual moderna de Invitta.link.
 */
function renderEmailShell({
    title,
    badgeEmoji = '✨',
    headerTitle = 'Invitta.link',
    headerSubtitle = 'Invitaciones digitales para momentos inolvidables',
    content,
}: EmailShellOptions): string {
    const year = new Date().getFullYear();

    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title} - Invitta.link</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: center; -webkit-font-smoothing: antialiased;">
            <div style="width: 100%; padding: 40px 16px; box-sizing: border-box;">
                <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0; text-align: left;">
                    
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #4f46e5 0%, #db2777 100%); padding: 36px 24px; text-align: center;">
                        <div style="display: inline-block; background: rgba(255, 255, 255, 0.2); width: 56px; height: 56px; border-radius: 50%; line-height: 56px; font-size: 28px; margin-bottom: 12px;">
                            ${badgeEmoji}
                        </div>
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">${headerTitle}</h1>
                        <p style="margin: 6px 0 0; color: #fdf2f8; font-size: 14px; opacity: 0.95;">${headerSubtitle}</p>
                    </div>

                    <!-- Main Content -->
                    <div style="padding: 36px 28px; color: #334155; line-height: 1.6;">
                        ${content}
                    </div>

                    <!-- Footer -->
                    <div style="background: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="color: #64748b; font-size: 13px; margin: 0 0 6px;">
                            <strong>Invitta.link</strong> — Plataforma de invitaciones digitales para eventos.
                        </p>
                        <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                            © ${year} Invitta.link. Todos los derechos reservados.
                        </p>
                        <p style="color: #cbd5e1; font-size: 11px; margin: 8px 0 0;">
                            Simplificando la manera de invitar, conectar personas y celebrar juntos.
                        </p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
}

/**
 * Correo de recuperación de contraseña.
 */
export function buildPasswordRecoveryEmailHtml(resetLink: string): string {
    const content = `
        <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #1e293b; font-size: 22px; font-weight: 700; margin: 0 0 10px;">Recuperación de Contraseña</h2>
            <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.6;">
                Recibiste este correo porque solicitaste restablecer la contraseña de tu cuenta en <strong>Invitta.link</strong>.
            </p>
        </div>
        
        <div style="background-color: #eff6ff; border-left: 4px solid #4f46e5; padding: 16px 20px; border-radius: 10px; margin: 24px 0;">
            <p style="color: #1e3a8a; margin: 0; font-size: 14px; line-height: 1.5;">
                <strong>Seguridad:</strong> Este enlace expirará en <strong>1 hora</strong>. 
                Si tú no solicitaste este cambio, puedes ignorar este mensaje; tu cuenta permanecerá segura.
            </p>
        </div>
        
        <div style="text-align: center; margin: 32px 0;">
            <a href="${resetLink}" 
               style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #db2777 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);">
                Restablecer Mi Contraseña
            </a>
        </div>
        
        <div style="margin-top: 28px; text-align: center;">
            <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">
                ¿El botón no responde? Copia y pega este enlace en tu navegador:
            </p>
            <p style="word-break: break-all; color: #4f46e5; font-size: 12px; margin: 0; font-family: monospace; background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
                ${resetLink}
            </p>
        </div>
    `;

    return renderEmailShell({
        title: 'Recuperación de Contraseña',
        badgeEmoji: '🔐',
        headerTitle: 'Invitta.link',
        headerSubtitle: 'Seguridad y acceso a tu cuenta',
        content,
    });
}

/**
 * Correo para establecer contraseña (nuevo usuario o invitación de equipo).
 */
export function buildSetPasswordEmailHtml(setPasswordLink: string, name?: string): string {
    const welcomeHeading = name ? `¡Hola, ${name}!` : '¡Bienvenido!';

    const content = `
        <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #1e293b; font-size: 22px; font-weight: 700; margin: 0 0 10px;">${welcomeHeading}</h2>
            <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.6;">
                Se ha creado una cuenta para ti en <strong>Invitta.link</strong>. Para comenzar a diseñar tus invitaciones digitales y gestionar confirmaciones de asistencia, establece tu contraseña.
            </p>
        </div>
        
        <div style="text-align: center; margin: 32px 0;">
            <a href="${setPasswordLink}" 
               style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #db2777 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);">
                Establecer Mi Contraseña
            </a>
        </div>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 14px 18px; border-radius: 10px; margin: 24px 0;">
            <p style="color: #475569; margin: 0; font-size: 13px; line-height: 1.5;">
                🔒 Este enlace es de un solo uso. Una vez establecida tu contraseña, podrás acceder directamente a tu panel desde cualquier dispositivo.
            </p>
        </div>
        
        <div style="margin-top: 24px; text-align: center;">
            <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">
                O copia y pega el siguiente enlace:
            </p>
            <p style="word-break: break-all; color: #4f46e5; font-size: 12px; margin: 0; font-family: monospace; background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
                ${setPasswordLink}
            </p>
        </div>
    `;

    return renderEmailShell({
        title: 'Establece tu Contraseña',
        badgeEmoji: '🎉',
        headerTitle: 'Invitta.link',
        headerSubtitle: 'Crea y gestiona tus invitaciones digitales',
        content,
    });
}

/**
 * Correo de bienvenida a la plataforma.
 */
export function buildWelcomeEmailHtml(name?: string): string {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invitta.link';
    const welcomeGreeting = name ? `¡Bienvenido, ${name}!` : '¡Bienvenido a Invitta.link!';

    const content = `
        <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #1e293b; font-size: 22px; font-weight: 700; margin: 0 0 10px;">${welcomeGreeting}</h2>
            <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.6;">
                Gracias por unirte a <strong>Invitta.link</strong>. Estamos listos para ayudarte a simplificar la manera de invitar, conectar personas y celebrar cada momento especial.
            </p>
        </div>

        <!-- Lo que puedes hacer -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 22px; margin: 26px 0; border: 1px solid #e2e8f0;">
            <h3 style="color: #1e293b; margin: 0 0 16px; font-size: 15px; text-align: center; font-weight: 700;">
                ✨ Lo que puedes hacer con Invitta.link:
            </h3>
            <div style="display: grid; gap: 14px;">
                <div style="display: flex; align-items: flex-start; gap: 12px;">
                    <div style="background: #4f46e5; color: white; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0;">1</div>
                    <div>
                        <strong style="color: #1e293b; font-size: 14px;">Diseña invitaciones interactivas</strong>
                        <p style="color: #64748b; font-size: 13px; margin: 2px 0 0; line-height: 1.4;">Bodas, cumpleaños, XV años, bautizos, graduaciones y eventos corporativos.</p>
                    </div>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 12px;">
                    <div style="background: #4f46e5; color: white; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0;">2</div>
                    <div>
                        <strong style="color: #1e293b; font-size: 14px;">Comparte enlaces personalizados</strong>
                        <p style="color: #64748b; font-size: 13px; margin: 2px 0 0; line-height: 1.4;">Comparte fácilmente por WhatsApp o redes sociales con vista previa optimizada.</p>
                    </div>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 12px;">
                    <div style="background: #4f46e5; color: white; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0;">3</div>
                    <div>
                        <strong style="color: #1e293b; font-size: 14px;">Gestión de Asistencia en Tiempo Real (RSVP)</strong>
                        <p style="color: #64748b; font-size: 13px; margin: 2px 0 0; line-height: 1.4;">Consulta confirmaciones, pases asignados y mensajes de tus invitados en un solo lugar.</p>
                    </div>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 12px;">
                    <div style="background: #4f46e5; color: white; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0;">4</div>
                    <div>
                        <strong style="color: #1e293b; font-size: 14px;">Música, mapa y cuenta regresiva</strong>
                        <p style="color: #64748b; font-size: 13px; margin: 2px 0 0; line-height: 1.4;">Agrega canciones, itinerario con horarios y ubicación directa a Google Maps.</p>
                    </div>
                </div>
            </div>
        </div>

        <div style="text-align: center; margin: 30px 0 10px;">
            <a href="${appUrl}/app" 
               style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #db2777 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);">
                🚀 Comenzar a Crear
            </a>
        </div>
    `;

    return renderEmailShell({
        title: '¡Bienvenido a Invitta.link!',
        badgeEmoji: '💌',
        headerTitle: 'Invitta.link',
        headerSubtitle: 'Tu plataforma de invitaciones digitales',
        content,
    });
}

/**
 * Correo de confirmación de pago registrado.
 */
export function buildPaymentNotificationEmailHtml(data: PaymentEmailData): string {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invitta.link';

    const content = `
        <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #1e293b; font-size: 22px; font-weight: 700; margin: 0 0 8px;">¡Pago Registrado con Éxito!</h2>
            <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.6;">
                Hola <strong>${data.name || 'Usuario'}</strong>, hemos recibido y confirmado tu pago. Gracias por confiar en <strong>Invitta.link</strong>.
            </p>
        </div>

        <!-- Tabla Resumen -->
        <div style="background-color: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; padding: 22px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 14px; color: #4f46e5; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">
                Resumen de la Transacción
            </h3>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Folio:</span>
                <span style="font-weight: 700; color: #1e293b; font-size: 15px;">${data.id}</span>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Monto:</span>
                <span style="font-weight: 700; color: #1e293b; font-size: 16px;">${formatCurrency(data.amount)}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Fecha:</span>
                <span style="font-weight: 600; color: #1e293b; font-size: 14px;">${data.paidAt}</span>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Método:</span>
                <span style="font-weight: 600; color: #1e293b; font-size: 14px;">${data.method}</span>
            </div>

            ${data.notas ? `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Concepto / Notas:</span>
                <span style="font-weight: 600; color: #1e293b; font-size: 14px;">${data.notas}</span>
            </div>
            ` : ''}

            <div style="display: flex; justify-content: space-between; padding-top: 4px;">
                <span style="color: #64748b; font-size: 14px;">Estado:</span>
                <span style="font-weight: 700; color: #059669; font-size: 14px;">✨ Confirmado</span>
            </div>
        </div>

        <div style="text-align: center; margin: 28px 0 12px;">
            <a href="${appUrl}/app" 
               style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #db2777 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px;">
                Ir a Mi Panel de Eventos
            </a>
        </div>
    `;

    return renderEmailShell({
        title: 'Confirmación de Pago',
        badgeEmoji: '✅',
        headerTitle: 'Invitta.link',
        headerSubtitle: 'Comprobante de transacción',
        content,
    });
}

/**
 * Correo de notificación de pago eliminado o cancelado.
 */
export function buildPaymentDeletionEmailHtml(data: PaymentEmailData): string {
    const content = `
        <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #b91c1c; font-size: 22px; font-weight: 700; margin: 0 0 8px;">Registro de Pago Removido</h2>
            <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.6;">
                Hola <strong>${data.name || 'Usuario'}</strong>, te informamos que un registro de pago ha sido <strong>eliminado</strong> de tu cuenta por ajuste o cancelación administrativa.
            </p>
        </div>

        <div style="background-color: #fef2f2; border-radius: 12px; border: 1px solid #fee2e2; padding: 22px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 14px; color: #b91c1c; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">
                Detalles del Registro Removido
            </h3>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #fee2e2; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Folio:</span>
                <span style="font-weight: 700; color: #1e293b; font-size: 15px;">${data.id}</span>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #fee2e2; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Monto:</span>
                <span style="font-weight: 700; color: #1e293b; font-size: 16px;">${formatCurrency(data.amount)}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #fee2e2; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Fecha:</span>
                <span style="font-weight: 600; color: #1e293b; font-size: 14px;">${data.paidAt}</span>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #fee2e2; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Método:</span>
                <span style="font-weight: 600; color: #1e293b; font-size: 14px;">${data.method}</span>
            </div>

            ${data.notas ? `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #fee2e2; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Notas:</span>
                <span style="font-weight: 600; color: #1e293b; font-size: 14px;">${data.notas}</span>
            </div>
            ` : ''}

            <div style="display: flex; justify-content: space-between; padding-top: 4px;">
                <span style="color: #7f1d1d; font-size: 14px;">Estado:</span>
                <span style="font-weight: 700; color: #b91c1c; font-size: 14px;">🚫 Cancelado / Eliminado</span>
            </div>
        </div>

        <p style="font-size: 13px; color: #64748b; text-align: center; background: #f8fafc; padding: 14px; border-radius: 8px; margin: 0;">
            ⚠️ <strong>¿Tienes dudas sobre esta cancelación?</strong><br>
            Si no reconoces esta acción, por favor comunícate con nuestro equipo de soporte de Invitta.link.
        </p>
    `;

    return renderEmailShell({
        title: 'Registro de Pago Eliminado',
        badgeEmoji: '🗑️',
        headerTitle: 'Invitta.link',
        headerSubtitle: 'Actualización en tu cuenta',
        content,
    });
}

/**
 * Correo de confirmación de cuenta eliminada.
 */
export function buildUserDeletedEmailHtml(name?: string): string {
    const greeting = name ? `Hola, ${name}` : 'Hola';

    const content = `
        <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #1e293b; font-size: 22px; font-weight: 700; margin: 0 0 10px;">¡Hasta pronto!</h2>
            <p style="color: #64748b; font-size: 15px; margin: 0 0 16px; line-height: 1.6;">
                ${greeting}, te confirmamos que tu cuenta y los datos asociados han sido <strong>eliminados correctamente</strong> de <strong>Invitta.link</strong>.
            </p>
            <p style="color: #64748b; font-size: 14px; margin: 0; line-height: 1.6;">
                Agradecemos mucho el tiempo que compartiste con nosotros. En Invitta.link siempre tendrás las puertas abiertas cuando desees volver a crear invitaciones digitales para tus próximas celebraciones.
            </p>
        </div>

        <div style="background-color: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; padding: 20px; margin-bottom: 24px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Estado de la cuenta:</span>
                <span style="font-weight: 600; color: #b91c1c; font-size: 14px;">Desactivada</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <span style="color: #64748b; font-size: 14px;">Acceso al portal:</span>
                <span style="font-weight: 600; color: #b91c1c; font-size: 14px;">🚫 Eliminado</span>
            </div>
        </div>

        <p style="margin: 0; font-size: 13px; color: #94a3b8; text-align: center;">
            Si tú no solicitaste esta acción o crees que se trata de un error, contáctanos de inmediato.
        </p>
    `;

    return renderEmailShell({
        title: 'Confirmación de Cuenta Eliminada',
        badgeEmoji: '👋',
        headerTitle: 'Invitta.link',
        headerSubtitle: 'Confirmación de baja de cuenta',
        content,
    });
}

/**
 * Correo de confirmación o actualización de suscripción SaaS.
 */
export function buildSubscriptionConfirmationEmailHtml(data: SubscriptionEmailData): string {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invitta.link';
    const accountTitle = data.accountName || data.clinicName || 'tu cuenta';
    const actionTitle = data.isUpdate ? 'Suscripción Actualizada' : '¡Suscripción Confirmada!';

    const formattedDate = data.isUnlimited || !data.endDate
        ? 'Acceso Ilimitado (Sin vencimiento)'
        : new Date(data.endDate).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    const content = `
        <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #1e293b; font-size: 22px; font-weight: 700; margin: 0 0 10px;">${actionTitle}</h2>
            <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.6;">
                Tu suscripción para <strong>${accountTitle}</strong> en el plan <strong>${data.planName}</strong> está activa. ¡Ya puedes disfrutar de todas las herramientas para tus eventos!
            </p>
        </div>

        <!-- Resumen de Suscripción -->
        <div style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 22px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 14px; color: #4f46e5; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">
                Detalles del Plan
            </h3>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Cuenta / Organización:</span>
                <span style="font-weight: 600; color: #0f172a; font-size: 14px;">${accountTitle}</span>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Plan:</span>
                <span style="font-weight: 700; color: #4f46e5; font-size: 14px;">${data.planName}</span>
            </div>

            ${data.amount !== undefined && data.amount > 0 ? `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Importe:</span>
                <span style="font-weight: 700; color: #0f172a; font-size: 14px;">${formatCurrency(data.amount)} / ${data.interval || 'Mensual'}</span>
            </div>
            ` : ''}

            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                <span style="color: #64748b; font-size: 14px;">Vigencia:</span>
                <span style="font-weight: 600; color: #0f172a; font-size: 14px;">${formattedDate}</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding-top: 4px;">
                <span style="color: #64748b; font-size: 14px;">Estado:</span>
                <span style="font-weight: 700; color: #16a34a; font-size: 14px;">✅ Activa</span>
            </div>
        </div>

        <div style="text-align: center; margin: 28px 0 16px;">
            <a href="${appUrl}/app" 
               style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #db2777 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px;">
                🚀 Ir a Mi Panel
            </a>
        </div>
    `;

    return renderEmailShell({
        title: actionTitle,
        badgeEmoji: '✨',
        headerTitle: 'Invitta.link',
        headerSubtitle: 'Plataforma SaaS de invitaciones digitales',
        content,
    });
}
