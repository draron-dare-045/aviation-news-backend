import dotenv from 'dotenv';
dotenv.config();  // Load environment variables

import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

const API_KEY = process.env.NEWS_API_KEY; // Load API key from .env

app.get('/news', async (req, res) => {
    try {
        const { q = 'aviation' } = req.query;
        const url = `https://newsapi.org/v2/everything?q=${q}&language=en&apiKey=${API_KEY}`;
        const { data } = await axios.get(url);
        res.json(data);
    } catch (error) {
        console.error('Error fetching news:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

