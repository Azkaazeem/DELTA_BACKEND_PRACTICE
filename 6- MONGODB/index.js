const mongoose = require('mongoose');

main().then(() => console.log('Connected to MongoDB Successfully!')).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number
// });

User.insertMany([
    {name: "Azka", email:"azka@example.com", age: 13},
    {name: "Ali", email:"ali@example.com", age: 16}
]);

const User = mongoose.model("Users" , userSchema);