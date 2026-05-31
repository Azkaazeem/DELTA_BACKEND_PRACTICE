import { faker } from '@faker-js/faker';
import mysql from 'mysql2';
import express from 'express';

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345,Aza',
  database: 'test',
});

export function createRandomUser() {
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

app.get("/" , (req , res ) => {
  res.send("Welcome to Home Page");
});

app.listen("8080" , () => {
  console.log("Server is running on port 8080");
});

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();
