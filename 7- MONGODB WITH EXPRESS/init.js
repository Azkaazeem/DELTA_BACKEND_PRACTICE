const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
    await mongoose.connect("mongodb://localhost:27017/chatDB");
}

let allChat = [
    {
        from: "Anum",
        to: "Asia",
        msg: "Hello Asia, how are you?",
        created_at: new Date()
    },
    {
        from: "Fatima",
        to: "Inaya",
        msg: "Hello Inaya, how are you?",
        created_at: new Date()
    },
    {
        from: "Ayesha",
        to: "Lina",
        msg: "Hello Lina, how are you?",
        created_at: new Date()
    },
    {
        from: "Sana",
        to: "Hina",
        msg: "Hello Hina, how are you?",
        created_at: new Date()
    },
    {
        from: "Zainab",
        to: "Sadia",
        msg: "Hello Sadia, how are you?",
        created_at: new Date()
    },
    {
        from: "Zeshan",
        to: "Ali",
        msg: "Hello Ali, how are you?",
        created_at: new Date()
    }
];

main()
.then(async () => {
    await Chat.insertMany(allChat);
    console.log("Chats inserted successfully!");
})
.catch((err) => {console.log(err)})
.finally(() => {
    mongoose.connection.close();
});
