const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "Azka",
        content: "I am learning NodeJS & ExpressJS... I 🤟 it 💞!"
    },
    {
        username: "Khola",
        content: "Hard work is important, but it is not the only thing. There is a time for hard work and a time for rest. When you rest, you are actually working. You are giving your body and mind the chance to recover and grow stronger. So, don't forget to take care of yourself and give yourself the rest you deserve! 💖"
    },
    {
        username: "Habiba",
        content: "I got selected for my first internship!💗 I am so happy and excited to start my journey in the tech world! 🥰"
    },
    {
        username: "Ghousia",
        content: "Hard work always pays off! I am thrilled to share that I have secured my first internship! 🌟 I am eager to learn and grow in this new chapter of my career! 💞"
    }
];

app.get("/posts" , (req, res) => {
    res.render("index" , {posts});
});

app.listen(port , () => { console.log(`Server is running on port ${port}`)});
