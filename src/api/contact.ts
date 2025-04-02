import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactFormData = {
    nome: string;
    email: string;
    mensagem: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { nome, email, mensagem } = req.body as ContactFormData;

        if (!nome || !email || !mensagem) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST as string,
            port: parseInt(process.env.EMAIL_PORT as string),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER as string,
                pass: process.env.EMAIL_PASSWORD as string,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER as string,
            to: process.env.DESTINATION_EMAIL as string,
            subject: `Nova mensagem de contato de ${nome}`,
            text: `
        Nome: ${nome}
        Email: ${email}
        
        Mensagem:
        ${mensagem}
      `,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return res.status(500).json({ error: 'Erro ao enviar email' });
    }
}