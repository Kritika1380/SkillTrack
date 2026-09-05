const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

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