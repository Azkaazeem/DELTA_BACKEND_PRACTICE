const express = require("express");
const app = express();
const path = require("path");
const Chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

main()
    .then(() => { console.log("connection Successful!") })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatDB");
}

// INDEX ROUTE
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index", { chats: chats });
});

// NEW ROUTE
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// CREATE ROUTE
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    let NewChat = new Chat({ from, msg, to, created_at: new Date() });
    NewChat.save().then(() => { console.log("Chat is Saved Successfully!") }).catch(err => console.log(err));
    res.redirect("/chats");
});

app.get("/", (req, res) => {
    res.send("Root is Working!");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
