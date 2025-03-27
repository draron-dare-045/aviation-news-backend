require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_URL = "https://newsapi.org/v2/everything";

app.use(cors());

app.get("/news", async (req, res) => {
    const query = req.query.q || "aviation";

    try {
        const response = await axios.get(NEWS_API_URL, {
            params: {
                q: query,
                language: "en",
                apiKey: NEWS_API_KEY,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
