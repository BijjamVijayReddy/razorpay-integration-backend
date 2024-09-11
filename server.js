const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json({ extended: false }));

router.post("/", (req, res) => {
    res.send("Payment route");
});

// route included
app.use("/payment", require("./routes/payment"));

app.listen(port, () => console.log(`server started on port ${port}`));