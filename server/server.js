const mongoose = require("mongoose");
const express = require("express");

const app = express();

const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/skilltrack")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed:", error);
    });

app.get("/", (req, res) => {
    res.send("SkillTrack Backend is Running!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});