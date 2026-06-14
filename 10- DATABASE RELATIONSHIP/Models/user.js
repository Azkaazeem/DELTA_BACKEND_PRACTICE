const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
.then(() => console.log("connection successful!"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    address: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ]
});

const User = mongoose.model("User" , userSchema);

const addUsers = async () => {
    let user1 = new User({
        username: "Azkaazeem",
        address: [
            {
                location: "Manzoor colony",
                city: "Karachi",
            },
            {
                location: "Rehman colony colony",
                city: "Karachi",
            }
        ]
    });

    let result = await user1.save();
    console.log(result);
}

addUsers();