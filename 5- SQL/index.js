const path = require('path');
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345,Aza',
  database: 'test',
});

function createRandomUser() {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

console.log(createRandomUser());

// INSERTING NEW DATA
let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(createRandomUser());
}

app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Error occurred while fetching data");
  }
});


// SHOW ROUTE
app.get("/users", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Error occurred while fetching data");
  }
});

app.listen("8080", () => {
  console.log("Server is running on port 8080");
});

// connection.end();
