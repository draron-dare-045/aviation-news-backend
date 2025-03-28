// require("dotenv").config(); // Load environment variables
// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors()); // Enable CORS for frontend requests

// const API_KEY = process.env.NEWS_API_KEY; // Secure API Key from Vercel

// // Route to fetch aviation news
// app.get("/news", async (req, res) => {
//     try {
//         const query = req.query.q || "aviation"; // Default query is 'aviation'
//         const url = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${API_KEY}`;
        
//         const response = await axios.get(url);
//         res.json(response.data); // Send news data to frontend
//     } catch (error) {
//         console.error("Error fetching news:", error);
//         res.status(500).json({ error: "Failed to fetch news" });
//     }
// });

// // Default route
// app.get("/", (req, res) => {
//     res.send("Aviation News API is running ");
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
