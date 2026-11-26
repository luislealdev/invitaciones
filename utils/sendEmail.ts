import type { Transporter } from 'nodemailer';
import {
    buildPasswordRecoveryEmailHtml,
    buildSetPasswordEmailHtml,
    buildWelcomeEmailHtml,
    buildPaymentNotificationEmailHtml,
    buildPaymentDeletionEmailHtml,
    buildUserDeletedEmailHtml,
    buildSubscriptionConfirmationEmailHtml,
    type PaymentEmailData,
    type SubscriptionEmailData,
} from './emails/templates';

let transporter: Transporter | null = null;

async function getTransporter() {
    if (transporter) return transporter;

    const nodemailer = await import('nodemailer');

    transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    return transporter;
}

const DEFAULT_FROM = `"Invitta.link" <${process.env.SMTP_FROM || process.env.SMTP_USER || 'hola@invitta.link'}>`;

export interface SendEmailResponse {
    ok: boolean;
    error?: string;
}

// 1. Recuperación de Contraseña
export interface PasswordRecoveryEmailOptions {
    to: string;
    token: string;
}

export async function sendPasswordRecoveryEmail({ to, token }: PasswordRecoveryEmailOptions): Promise<SendEmailResponse> {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invitta.link';
    const resetLink = `${appUrl}/auth/set-password?token=${token}`;
    const htmlContent = buildPasswordRecoveryEmailHtml(resetLink);

    try {
        const mailer = await getTransporter();
        await mailer.sendMail({
            from: DEFAULT_FROM,
            to,
            subject: '🔐 Recuperación de Contraseña - Invitta.link',
            html: htmlContent,
        });

        return { ok: true };
    } catch (error) {
        console.error('[SEND_EMAIL_ERROR] sendPasswordRecoveryEmail:', error);
        return { ok: false, error: 'Error al enviar el correo de recuperación' };
    }
}

// 2. Establecer Contraseña
export interface SetPasswordEmailOptions {
    to: string;
    token: string;
    name?: string;
}

export async function sendSetPasswordEmail({ to, token, name }: SetPasswordEmailOptions): Promise<SendEmailResponse> {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invitta.link';
    const setPasswordLink = `${appUrl}/auth/set-password?token=${token}`;
    const htmlContent = buildSetPasswordEmailHtml(setPasswordLink, name);

    try {
        const mailer = await getTransporter();
        await mailer.sendMail({
            from: DEFAULT_FROM,
            to,
            subject: '🎉 Bienvenido a Invitta.link - Establece tu contraseña',
            html: htmlContent,
        });

        return { ok: true };
    } catch (error) {
        console.error('[SEND_EMAIL_ERROR] sendSetPasswordEmail:', error);
        return { ok: false, error: 'Error al enviar el correo para establecer contraseña' };
    }
}

// 3. Bienvenida
export interface WelcomeEmailOptions {
    to: string;
    name?: string;
}

export async function sendWelcomeEmail({ to, name }: WelcomeEmailOptions): Promise<SendEmailResponse> {
    const htmlContent = buildWelcomeEmailHtml(name);

    try {
        const mailer = await getTransporter();
        await mailer.sendMail({
            from: DEFAULT_FROM,
            to,
            subject: '🎉 ¡Bienvenido a Invitta.link!',
            html: htmlContent,
        });

        return { ok: true };
    } catch (error) {
        console.error('[SEND_EMAIL_ERROR] sendWelcomeEmail:', error);
        return { ok: false, error: 'Error al enviar el correo de bienvenida' };
    }
}

// 4. Confirmación de Pago
export interface PaymentNotificationEmailOptions extends PaymentEmailData {
    to: string;
}

export async function sendPaymentNotificationEmail({ to, ...data }: PaymentNotificationEmailOptions): Promise<SendEmailResponse> {
    const htmlContent = buildPaymentNotificationEmailHtml(data);

    try {
        const mailer = await getTransporter();
        await mailer.sendMail({
            from: DEFAULT_FROM,
            to,
            subject: '✅ Confirmación de Pago - Invitta.link',
            html: htmlContent,
        });

        return { ok: true };
    } catch (error) {
        console.error('[SEND_EMAIL_ERROR] sendPaymentNotificationEmail:', error);
        return { ok: false, error: 'Error al enviar el correo de confirmación de pago' };
    }
}

// 5. Notificación de Pago Eliminado
export async function sendPaymentDeletionEmail({ to, ...data }: PaymentNotificationEmailOptions): Promise<SendEmailResponse> {
    const htmlContent = buildPaymentDeletionEmailHtml(data);

    try {
        const mailer = await getTransporter();
        await mailer.sendMail({
            from: DEFAULT_FROM,
            to,
            subject: '⚠️ Notificación: Registro de pago cancelado - Invitta.link',
            html: htmlContent,
        });

        return { ok: true };
    } catch (error) {
        console.error('[SEND_EMAIL_ERROR] sendPaymentDeletionEmail:', error);
        return { ok: false, error: 'Error al enviar la notificación de pago eliminado' };
    }
}

// 6. Cuenta Eliminada
export interface UserDeletedEmailOptions {
    to: string;
    name?: string;
}

export async function sendUserDeletedEmail({ to, name }: UserDeletedEmailOptions): Promise<SendEmailResponse> {
    const htmlContent = buildUserDeletedEmailHtml(name);

    try {
        const mailer = await getTransporter();
        await mailer.sendMail({
            from: DEFAULT_FROM,
            to,
            subject: '👋 Confirmación de cuenta eliminada - Invitta.link',
            html: htmlContent,
        });

        return { ok: true };
    } catch (error) {
        console.error('[SEND_EMAIL_ERROR] sendUserDeletedEmail:', error);
        return { ok: false, error: 'Error al enviar el correo de cuenta eliminada' };
    }
}

// 7. Confirmación de Suscripción
export interface SubscriptionEmailOptions extends SubscriptionEmailData {
    to: string;
}

export async function sendSubscriptionConfirmationEmail({ to, ...data }: SubscriptionEmailOptions): Promise<SendEmailResponse> {
    const htmlContent = buildSubscriptionConfirmationEmailHtml(data);
    const actionTitle = data.isUpdate ? 'Suscripción Actualizada' : '¡Suscripción Confirmada!';

    try {
        const mailer = await getTransporter();
        await mailer.sendMail({
            from: DEFAULT_FROM,
            to,
            subject: `🎉 ${actionTitle} - Invitta.link`,
            html: htmlContent,
        });

        return { ok: true };
    } catch (error) {
        console.error('[SEND_EMAIL_ERROR] sendSubscriptionConfirmationEmail:', error);
        return { ok: false, error: 'Error al enviar el correo de suscripción' };
    }
}
