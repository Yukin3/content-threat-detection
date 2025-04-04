require('dotenv').config();  
const express = require("express");
const app = express();
const cors = require("cors");


//middleware
app.use(cors());
app.use(express.json())



app.get("/", (req, res) => {
    res.send("CyberSentry backend is running, CORS allowed."); 
});


app.use((req, res, next) => {
        console.log("🛰️ CORS origin check:", req.headers.origin);
        console.log("➡️ Path:", req.path);
        next();
      });
    
    
const classifyRoutes = require("./routes/classifierRoutes")
app.use("/api/classify", classifyRoutes)


app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "localhost", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
