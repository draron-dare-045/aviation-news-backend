require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const NEWS_API_URL = "https://newsapi.org/v2/everything";
const API_KEY = process.env.NEWS_API_KEY;

// Root Route (Optional)
app.get("/", (req, res) => {
    res.send("Aviation News API is running!");
});

// API Route to fetch news
app.get("/news", async (req, res) => {
    try {
        const query = req.query.q || "aviation";
        const response = await axios.get(`${NEWS_API_URL}?q=${query}&apiKey=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching news" });
    }
});

// Start Server (For Local Testing)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Required for Vercel
