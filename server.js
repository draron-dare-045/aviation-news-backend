require('dotenv').config();
import express from 'express';
import { get } from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

const API_KEY = process.env.NEWS_API_KEY; // Load API key from .env

app.get('/news', async (req, res) => {
    try {
        const { q = 'aviation' } = req.query;
        const url = `https://newsapi.org/v2/everything?q=${q}&language=en&apiKey=${API_KEY}`;
        const { data } = await get(url);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
