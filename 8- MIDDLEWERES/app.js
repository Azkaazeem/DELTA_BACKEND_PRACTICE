const express = require('express');
const app = express();
const ExpressError = require("./ExpressError.js");

// app.use((req,res) => {
//     console.log("This is a middleware function");
//     res.send("Hello from middleware!");
// });

app.use("/api" , (req,res,next) => {
    let {token} = req.query;
    if(token === "12345"){
        next();
    }
    throw new ExpressError( 401 , "UNAUTHORIZED ACCESS!");
});

app.use((req,res,next) => {
    console.log(req.method);
    next();
})

//     Moddlewere ----->   response send
app.get("/" , (req, res) => {
    res.send("running successfully!")
})

app.get("/random" , (req,res) => {
    console.log("This is a random route");
    res.send("This is a random route")
});

app.get("/api" , (req , res) => {
    res.send("This is an Specific API route");
});

app.get("/admin" , (req , res) => {
    throw new ExpressError(403 , "Access to admin is Forbidden!");
});

// 404 PAGE NOT FOUND
// app.use((req,res) => {
//     res.status(404).send("Page Not Found");
// });

app.get((err , req , res , next) => {
    console.log("-------------- ERROR ---------------");
    res.send(err)
})

app.listen(8000 , () => {
    console.log('Server is running on port 8000')
}); 