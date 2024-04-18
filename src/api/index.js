const express = require("express");
const app = express();
const Transaction = require("./models/Transaction.js");
const cors = require("cors");
require("dotenv").config();
const { mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
// app.get("/api/test", (req, res) => {
//   res.json("test ok");
// });

app.post("/api/transaction", async (req, res) => {
  const { name, price, description, datetime } = req.body;
  //console.log(process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL);
  const transaction = await new Transaction({
    name,
    price,
    description,
    datetime,
  }).save();
  //const savedTransaction = await transaction.save();
  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.listen(4040);
