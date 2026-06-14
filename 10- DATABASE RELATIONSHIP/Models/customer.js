const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
.then(() => console.log("connection successful!"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number
});

const Order = mongoose.model("Order" , orderSchema);

const addOrders = async () => {
    let res = await Order.insertMany(
        [
            {item: "Samosa" , price: 40},
            {item: "Burger" , price: 60},
            {item: "Pizza" , price: 90}
        ]
    )
    console.log(res);
}

addOrders();