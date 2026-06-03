const express = require("express");
const app = express();
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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
app.post("/chats", async (req, res) => {
    let { from, msg, to } = req.body;
    let NewChat = new Chat({ from, msg, to, created_at: new Date() });
    await NewChat.save();
    console.log("Chat is Saved Successfully!");
    res.redirect("/chats");
});

// EDIT ROUTE
app.get("/chats/:id/edit" , async (req,res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs" , { chat });
});

// UPDATE ROUTE
app.put("/chats/:id" , async (req,res) => {
    let { id } = req.params;
    let { msg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id , { msg } , {runValidators: true , new: true});
    console.log("Updated Chat: " , updatedChat);
    res.redirect("/chats");
});

// DESTROY ROUTE
app.delete("/chats/:id" , async (req , res) => {
    let { id } = req.params;
   let deletedChat = await Chat.findByIdAndDelete(id);
    console.log("Deleted Chat: " , deletedChat);
    res.redirect("/chats");
});

app.get("/", (req, res) => {
    res.send("Root is Working!");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
