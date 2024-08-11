// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configuração do transporter para enviar email através do Gmail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Substitua com seu email do Gmail
            pass: 'your-email-password', // Substitua com sua senha do Gmail (ou melhor, use um App Password)
        },
    });

    let mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Substitua com seu email do Gmail
        subject: `Mensagem de Contato de ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email enviado com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Falha ao enviar o email.');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
