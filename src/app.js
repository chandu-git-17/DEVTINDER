const express = require("express");

const app = express();

app.use("/admin",(req, res) => {
    res.end("Hello...")
})


app.listen(3000, () => {
    console.log("Server is listening...")
});