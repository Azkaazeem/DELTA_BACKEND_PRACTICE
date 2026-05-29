const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Azka",
    content: "I am learning NodeJS & ExpressJS... I 🤟 it 💞!",
  },
  {
    id: uuidv4(),
    username: "Khola",
    content:
      "Hard work is important, but it is not the only thing. There is a time for hard work and a time for rest. When you rest, you are actually working. You are giving your body and mind the chance to recover and grow stronger. So, don't forget to take care of yourself and give yourself the rest you deserve! 💖",
  },
  {
    id: uuidv4(),
    username: "Habiba",
    content:
      "I got selected for my first internship!💗 I am so happy and excited to start my journey in the tech world! 🥰",
  },
  {
    id: uuidv4(),
    username: "Ghousia",
    content:
      "Hard work always pays off! I am thrilled to share that I have secured my first internship! 🌟 I am eager to learn and grow in this new chapter of my career! 💞",
  },
];

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let { content: newContent } = req.body || {};
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit" , {post});
});

app.delete("/posts/:id" , ( req , res ) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});