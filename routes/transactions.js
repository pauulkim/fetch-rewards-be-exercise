import express from "express";

const router = express.Router();

// "table" for all transactions
const transactions = [];

// get all the transactions
router.get("/", (req, res) => {
  res.json(transactions)
});

// add a transaction
router.post("/", (req, res) => {
  transactions.push(req.body)
  res.json(req.body);
});



export default router;