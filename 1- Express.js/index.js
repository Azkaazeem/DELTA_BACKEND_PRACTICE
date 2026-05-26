const express = require("express");
const app =express();

// console.dir(app);

const port = 8080;

app.listen(port , () => {
    console.log(`app is listening on port ${port}`);
});

app.use ((req , res) => {
    console.log(res);
    console.log('request received');
    res.send("It`s a basic response");
    const code = "<h1>Fruits</h1> <ul> <li>Apple</li> <li>Orange</li> </ul>";
    res.send(code);

});