require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// Middlewares
app.use(express.json({ extended: false }));

// Razorpay payment route
app.post("/payment/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: "rzp_test_kXnA7K8qgIOJBO",
            key_secret: "7ZDEEK58E53dcq4XQQndgVcc",
        });

        const options = {
            amount: 500 * 100, // Amount in paise (500 INR)
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occurred");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
