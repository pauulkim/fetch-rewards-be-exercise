import express from "express";

const router = express.Router();

// "table" for all transactions
const transactions = [];

// add a transaction
router.post("/", (req, res) => {
  transactions.push(req.body)
  res.json(req.body);
});

// get balance
router.get("/", (req, res) => {
  const formatted = {};

  for (let transaction of transactions) {
    if (formatted[transaction.payer]) formatted[transaction.payer] += transaction.points
    else formatted[transaction.payer] = transaction.points
  }

  res.json(formatted);
});


// spending points
router.post("/spend", (req, res) => {
  transactions.sort( (a, b) => b.timestamp - a.timestamp )

  res.json(transactions);
});

export default router;