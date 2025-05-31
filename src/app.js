const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile("index.html", {
        root: path.join(__dirname)
    });
});

app.get("/about", (req, res) => {
    res.send("My business is so cool!!11!!");
});

app.listen(3000, () => {
    console.log("The server is now running on Port 3000");
});
