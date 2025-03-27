import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const API_KEY = process.env.NEWS_API_KEY; // Securely use API Key

app.get("/news", async (req, res) => {
    try {
        const { q = "aviation" } = req.query;
        const url = `https://newsapi.org/v2/everything?q=${q}&language=en&apiKey=${API_KEY}`;
        const { data } = await axios.get(url);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
