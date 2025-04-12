// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import i18next from 'i18next';
import { resources } from '../locales';

type ContactFormData = {
    nome: string;
    email: string;
    mensagem: string;
};

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await i18next.init({
        resources,
    });

    if (req.method !== 'POST') {
        return res.status(405).json({
            error: i18next.t('global:footer.contact.form.validation.method_not_allowed'),
        });
    }

    try {
        const { nome, email, mensagem } = req.body as ContactFormData;

        if (!nome || !email || !mensagem) {
            return res.status(400).json({
                error: i18next.t('global:footer.contact.form.validation.required_fields'),
            });
        }

        const { error } = await resend.emails.send({
            from: 'Contato <onboarding@resend.dev>',
            to: process.env.DESTINATION_EMAIL!,
            subject: `Nova mensagem de contato de ${nome}`,
            html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${mensagem}</p>
      `,
        });

        if (error) {
            console.error('Erro ao enviar email:', error);
            return res.status(500).json({
                error: i18next.t('global:footer.contact.form.validation.send_email_error'),
            });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(
            i18next.t('global:footer.contact.form.validation.send_email_error'),
            error
        );
        return res.status(500).json({
            error: i18next.t('global:footer.contact.form.validation.send_email_error'),
        });
    }
}
