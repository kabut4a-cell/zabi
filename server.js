const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post('/send-order', async (req, res) => {
    try {
        const { name, phone, from, to, details } = req.body;

        const message =
`🚚 Фармоиши нав - Kabut Express

👤 Ном: ${name}
📞 Телефон: ${phone}
📍 Аз: ${from}
📦 Ба: ${to}
📝 Бор: ${details || 'Нишон дода нашудааст'}`;

        const response = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message
                })
            }
        );

        const data = await response.json();

        if (!data.ok) {
            return res.status(500).json(data);
        }

        res.json({
            success: true
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false
        });
    }
});

app.listen(3000, () => {
    console.log('Kabut Express server: http://localhost:3000');
});