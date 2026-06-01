const express = required("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Root is Working!");
})

app.listen(8080, ()=> {
    console.log("Server is running on port 8080");
})