const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
app.use("/", express.json());

app.post("/signup", async (req, res) => {
    const user = new User(req.body);

    await user.save();
    res.send("User added successfully...");

});







connectDB()
.then(() => {
    console.log("database connected sucessfully...");
    app.listen(3000, () => {
        console.log("Server is listening...")
    });
})
.catch((error) => {
    console.log("something went wrong while connecting to database...");
});
