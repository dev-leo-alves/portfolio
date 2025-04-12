import type { NextApiRequest, NextApiResponse } from 'next';

const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const DESTINATION_EMAIL = process.env.DESTINATION_EMAIL!;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    try {
        const { name, email, message } = req.body as {
            name: string;
            email: string;
            message: string;
        };

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Contato <onboarding@resend.dev>',
                to: [DESTINATION_EMAIL],
                subject: `Nova mensagem de contato de ${name}`,
                html: `
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong><br/>${message}</p>
        `,
                reply_to: email,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro do Resend:', errorText);
            return res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
        }

        const data = await response.json();
        return res.status(200).json({ success: true, messageId: data.id });
    } catch (err) {
        console.error('Erro inesperado:', err);
        return res.status(500).json({ error: 'Erro interno no servidor.' });
    }
}
